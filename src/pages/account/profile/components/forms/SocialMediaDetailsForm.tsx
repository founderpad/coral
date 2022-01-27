import Form from '@components/form/Form';
import { IoLogoLinkedin } from '@components/icons';
import { InputField } from '@components/input/InputField';
import ModalDrawerContext from '@context/ModalDrawerContext';
import {
	TUser_Profile,
	TUser_Profile_Set_Input,
	useUpdateUserProfileMutation
} from '@generated/api';
import { useSuccessNotification } from '@hooks/toast';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

const SocialMediaDetailsForm = (socials: TUser_Profile) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { __typename, userId, ...rest } = socials;

	const { setModalDrawer } = useContext(ModalDrawerContext);
	const showSuccessNotification = useSuccessNotification();
	const { handleSubmit, control, formState, getValues } =
		useForm<TUser_Profile_Set_Input>({
			mode: 'all',
			defaultValues: {
				...rest
			}
		});

	const [updateUserProfileMutation] = useUpdateUserProfileMutation({
		variables: {
			id: socials.id,
			user_profile: getValues()
		},
		onCompleted: (_data) => {
			setModalDrawer({
				isOpen: false
			});
			showSuccessNotification({
				title: 'Your socials have been updated'
			});
		}
	});

	const { isSubmitting, isValid } = formState;

	return (
		<Form
			id={'editSocialDetailsForm'}
			name={'editSocialDetailsForm'}
			onSubmit={handleSubmit(updateUserProfileMutation)}
			isSubmitting={isSubmitting}
			isValid={isValid}
		>
			{/* <InputFieldWithLabelAndIcon
                id="linkedin"
                label="LinkedIn"
                placeholder="Your LinkedIn profile"
                name="linkedin"
                control={control}
                leftIcon={IoLogoLinkedin}
            /> */}
			<InputField
				id="linkedin"
				label="LinkedIn"
				placeholder="Your LinkedIn profile"
				name="linkedin"
				control={control}
				leftIcon={IoLogoLinkedin}
			/>

			<InputField
				id="twitter"
				label="Twitter"
				placeholder="Your Twitter profile"
				name="twitter"
				control={control}
			/>

			<InputField
				id="instagram"
				label="Instagram"
				placeholder="Your Instagram profile"
				name="instagram"
				control={control}
			/>

			<InputField
				id="facebook"
				label="Facebook"
				placeholder="Your Facebook profile"
				name="facebook"
				control={control}
			/>

			<InputField
				id="website"
				label="Website"
				placeholder="Your Website"
				name="website"
				control={control}
			/>
		</Form>
	);
};

export default SocialMediaDetailsForm;
