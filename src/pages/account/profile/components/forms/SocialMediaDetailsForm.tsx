import BaseForm from '@components/form/BaseForm';
import { FormInput } from '@components/form/inputs/FormField';
import {
	TUser_Profile,
	TUser_Profile_Set_Input,
	useUpdateUserProfileMutation
} from '@generated/api';
import React from 'react';
import { useModalDrawer } from '@hooks/util';
import { redirectTo } from '@utils/validators';

const SocialMediaDetailsForm = (socials: TUser_Profile) => {
	const { __typename, userId, ...rest } = socials;
	const defaultValues = { ...rest };

	const { setModalDrawer } = useModalDrawer();
	const [updateUserProfileMutation] = useUpdateUserProfileMutation();

	const onUpdateUserProfile = (values: TUser_Profile_Set_Input) => {
		updateUserProfileMutation({
			variables: {
				id: socials.id,
				user_profile: values
			},
			onCompleted: () => {
				setModalDrawer({
					isOpen: false
				});

				redirectTo(false, 'soc');
			}
		});
	};

	return (
		<BaseForm<TUser_Profile_Set_Input>
			name="idea-search-form"
			onSubmit={onUpdateUserProfile}
			defaultValues={defaultValues}
		>
			{({ register, control, resetField, formState: { errors } }) => (
				<React.Fragment>
					<FormInput<TUser_Profile_Set_Input>
						name="linkedin"
						register={register}
						control={control}
						fieldProps={{
							placeholder: 'Your LinkedIn profile'
						}}
						hideLimit={true}
						errors={errors}
						onClear={() => resetField('linkedin')}
					/>

					<FormInput<TUser_Profile_Set_Input>
						name="twitter"
						register={register}
						control={control}
						fieldProps={{
							placeholder: 'Your Twitter profile'
						}}
						hideLimit={true}
						errors={errors}
						onClear={() => resetField('twitter')}
					/>

					<FormInput<TUser_Profile_Set_Input>
						name="instagram"
						register={register}
						control={control}
						fieldProps={{
							placeholder: 'Your Instagram profile'
						}}
						hideLimit={true}
						errors={errors}
						onClear={() => resetField('instagram')}
					/>

					<FormInput<TUser_Profile_Set_Input>
						name="facebook"
						register={register}
						control={control}
						fieldProps={{
							placeholder: 'Your Facebook profile'
						}}
						hideLimit={true}
						errors={errors}
						onClear={() => resetField('facebook')}
					/>
				</React.Fragment>
			)}
		</BaseForm>
	);
};

export default SocialMediaDetailsForm;
