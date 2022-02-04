import Form from '@components/form/Form';
import { PasswordField } from '@components/input/InputField';
import { useChangePassword } from '@hooks/auth';
import { useForm } from 'react-hook-form';

const ChangePasswordForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useForm({
		mode: 'all'
	});

	const onChangePassword = useChangePassword();

	return (
		<Form
			id={'editPasswordForm'}
			name={'editPasswordForm'}
			onSubmit={handleSubmit(onChangePassword)}
			isSubmitting={isSubmitting}
			isValid={isValid}
		>
			<PasswordField
				name={'newPassword'}
				control={control}
				label={'New password'}
				id={'newpassword'}
				placeholder={'New password'}
				error={errors['newPassword']}
				errorText="You must provider a new password"
				isRequired
			/>
		</Form>
	);
};

export default ChangePasswordForm;
