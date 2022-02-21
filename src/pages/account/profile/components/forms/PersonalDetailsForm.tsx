import Form from '@components/form/Form';
import { FormInput, FormSelect } from '@components/form/inputs/FormField';
import ModalDrawerContext from '@context/ModalDrawerContext';
import {
	TUsers,
	TUsers_Set_Input,
	TUser_Address,
	TUser_Address_Set_Input,
	TUser_Profile,
	TUser_Profile_Set_Input,
	useUpdateUserPersonalDetailsMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { updatePersonalDetails } from '@slices/auth';
import { ALL_COUNTRIES, ALL_PRONOUNS } from '@utils/Constants';
import { redirectTo } from '@utils/validators';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

type TPersonalDetailsinput = Pick<TUsers_Set_Input, 'displayName'> &
	Pick<TUser_Address_Set_Input, 'country' | 'location'> &
	Pick<TUser_Profile_Set_Input, 'pronouns' | 'customPronouns'>;

const PersonalDetailsForm = () => {
	const auth = useCurrentUser();
	const dispatch = useDispatch();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const {
		handleSubmit,
		control,
		getValues,
		watch,
		resetField,
		register,
		formState: { errors, isSubmitting }
	} = useForm<TPersonalDetailsinput>({
		mode: 'all',
		defaultValues: {
			...auth,
			...auth?.address,
			...auth?.profile
		}
	});

	const watchCountry = watch('country', getValues('country'));
	const watchCustomPronouns = watch('pronouns', getValues('pronouns'));

	const [updateUserPersonalDetails] = useUpdateUserPersonalDetailsMutation({
		variables: {
			id: auth?.id,
			profileId: auth?.profile?.id,
			userPersonalDetails: {
				displayName: getValues('displayName')
			},
			userAddress: {
				country: getValues('country'),
				location: getValues('location')
			},
			userProfile: {
				pronouns: getValues('pronouns'),
				customPronouns:
					getValues('pronouns') === 'Custom'
						? getValues('customPronouns')
						: null
			}
		},
		onCompleted: (data) => {
			const { updateUser, updateUserAddress, updateUserProfile } = data;

			dispatch(
				updatePersonalDetails({
					user: updateUser as TUsers,
					userAddress: updateUserAddress as TUser_Address,
					userProfile: updateUserProfile as TUser_Profile
				})
			);

			redirectTo(false, 'pd');

			setModalDrawer({
				isOpen: false
			});
		},
		onError: () => {
			redirectTo(true, 'pd');
		}
	});

	return (
		<Form
			id={'editPersonalDetailsForm'}
			name={'editPersonalDetailsForm'}
			onSubmit={handleSubmit(updateUserPersonalDetails)}
			isSubmitting={isSubmitting}
		>
			<FormInput<TPersonalDetailsinput>
				id="displayName"
				name="displayName"
				label="Display name"
				placeholder="Display name"
				register={register}
				control={control}
				rules={{
					required: 'You must input a display name',
					maxLength: {
						value: 10,
						message:
							'Your display name can not be more than 50 characters'
					}
				}}
				errors={errors}
				onClear={() => resetField('displayName')}
			/>

			<FormSelect<TPersonalDetailsinput>
				id="pronouns"
				name="pronouns"
				label="Pronouns"
				placeholder="Pronouns"
				options={ALL_PRONOUNS as any}
				register={register}
				control={control}
				onClear={() => resetField('pronouns', { defaultValue: '' })}
			/>

			{watchCustomPronouns === 'Custom' && (
				<FormInput<TPersonalDetailsinput>
					id="customPronouns"
					name="customPronouns"
					label="Custom pronouns"
					placeholder="Custom pronouns"
					register={register}
					control={control}
					rules={{
						required: 'You must input a custom pronoun',
						maxLength: {
							value: 15,
							message:
								'Your custom pronouns can not be more than 20 characters'
						}
					}}
					errors={errors}
					onClear={() =>
						resetField('customPronouns', { defaultValue: '' })
					}
				/>
			)}

			<FormSelect<TPersonalDetailsinput>
				id="country"
				name="country"
				label="Country"
				placeholder="country"
				options={ALL_COUNTRIES}
				register={register}
				control={control}
				onClear={() => resetField('country', { defaultValue: '' })}
				selectProps={{
					menuPlacement: 'top'
				}}
			/>

			{watchCountry && (
				<FormInput<TPersonalDetailsinput>
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
					onClear={() => resetField('location', { defaultValue: '' })}
				/>
			)}
		</Form>
	);
};

export default PersonalDetailsForm;
