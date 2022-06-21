import { BaseForm } from '@/components/form';
import { FormInput, FormSelect } from '@/components/form/inputs/FormField';
import {
	TUsers,
	TUsers_Set_Input,
	TUser_Address,
	TUser_Address_Set_Input,
	TUser_Profile,
	TUser_Profile_Set_Input,
	useUpdateUserPersonalDetailsMutation
} from '@generated/api';
import { useCurrentUser } from '@/hooks/auth';
import { useModalDrawer } from '@/hooks/util';
import { updateUserPersonalDetails } from '@slices/auth';
import { ALL_COUNTRIES, ALL_PRONOUNS } from '@/utils/Constants';
import { redirectTo } from '@/utils/validators';
import React from 'react';
import { useDispatch } from 'react-redux';

type TPersonalDetailsInput = Pick<TUsers_Set_Input, 'displayName'> &
	Pick<TUser_Address_Set_Input, 'country' | 'location'> &
	Pick<TUser_Profile_Set_Input, 'pronouns' | 'customPronouns'>;

const PersonalDetailsForm = () => {
	const auth = useCurrentUser();
	const dispatch = useDispatch();
	const { closeModalDrawer } = useModalDrawer();
	const [updatePersonalDetails] = useUpdateUserPersonalDetailsMutation();

	const defaultValues = { ...auth, ...auth?.address, ...auth?.profile };

	const onUpdatePersonalDetails = (
		personalDetails: TPersonalDetailsInput
	) => {
		const { displayName, country, location, pronouns, customPronouns } =
			personalDetails;

		updatePersonalDetails({
			variables: {
				id: auth.id,
				profileId: auth.profile?.id,
				userPersonalDetails: {
					displayName
				},
				userAddress: {
					country,
					location
				},
				userProfile: {
					pronouns,
					customPronouns:
						pronouns === 'Custom' ? customPronouns : null
				}
			},
			onCompleted: (data) => {
				const { updateUser, updateUserAddress, updateUserProfile } =
					data;
				data;

				dispatch(
					updateUserPersonalDetails({
						user: updateUser as TUsers,
						userAddress: updateUserAddress as TUser_Address,
						userProfile: updateUserProfile as TUser_Profile
					})
				);

				redirectTo(false, 'pd');
				closeModalDrawer();
			},
			onError: () => {
				redirectTo(true, 'pd');
			}
		});
	};

	return (
		<BaseForm<TPersonalDetailsInput>
			name="edit-personal-details-form"
			onSubmit={onUpdatePersonalDetails}
			defaultValues={defaultValues}
			stackProps={{
				alignItems: 'center'
			}}
		>
			{({
				register,
				control,
				resetField,
				watch,
				getValues,
				formState: { errors }
			}) => (
				<React.Fragment>
					<FormInput<TPersonalDetailsInput>
						id="displayName"
						name="displayName"
						label="Display name"
						register={register}
						control={control}
						fieldProps={{
							placeholder: 'Display name (max. 25 characters)'
						}}
						rules={{
							required: 'You must enter a display name',
							maxLength: {
								value: 25,
								message:
									'Your display name can not be more than 25 characters'
							}
						}}
						errors={errors}
						hideLimit={true}
						onClear={() =>
							resetField('displayName', { defaultValue: '' })
						}
					/>

					<FormSelect<TPersonalDetailsInput>
						id="pronouns"
						name="pronouns"
						label="Pronouns"
						placeholder="Pronouns"
						options={ALL_PRONOUNS as any}
						register={register}
						control={control}
						onClear={() =>
							resetField('pronouns', { defaultValue: '' })
						}
					/>

					{watch('pronouns', getValues('pronouns')) === 'Custom' && (
						<FormInput<TPersonalDetailsInput>
							id="customPronouns"
							name="customPronouns"
							label="Custom pronouns"
							register={register}
							control={control}
							fieldProps={{
								placeholder:
									'Custom pronouns (max. 20 characters)'
							}}
							rules={{
								required: 'You must input a custom pronoun',
								maxLength: {
									value: 15,
									message:
										'Your custom pronouns can not be more than 20 characters'
								}
							}}
							errors={errors}
							hideLimit={true}
							onClear={() =>
								resetField('customPronouns', {
									defaultValue: ''
								})
							}
						/>
					)}

					<FormSelect<TPersonalDetailsInput>
						id="country"
						name="country"
						label="Country"
						placeholder="country"
						options={ALL_COUNTRIES}
						register={register}
						control={control}
						onClear={() =>
							resetField('country', { defaultValue: '' })
						}
						selectProps={{
							menuPlacement: 'top'
						}}
					/>

					{watch('country', getValues('country')) && (
						<FormInput<TPersonalDetailsInput>
							id="location"
							name="location"
							label="Location"
							placeholder="Location"
							register={register}
							control={control}
							rules={{
								maxLength: {
									value: 20,
									message:
										'Your location can not be more than 20 characters'
								}
							}}
							errors={errors}
							hideLimit={true}
							onClear={() =>
								resetField('location', { defaultValue: '' })
							}
						/>
					)}
				</React.Fragment>
			)}
		</BaseForm>
	);
};

export default PersonalDetailsForm;
