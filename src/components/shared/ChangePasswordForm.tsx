import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { PasswordField } from '@components/input';
import { useChangePassword } from '@hooks/auth';
import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
	showPasswordLabel?: boolean;
	showSubmit?: boolean;
}

const ChangePasswordForm = (props: Props) => {
	const { showPasswordLabel = false, showSubmit = false } = props;
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useForm({ mode: 'all' });
	const { onChangePassword, isChangeSuccess } = useChangePassword();

	return (
		<Form
			id={'edit-change-password'}
			name={'edit-change-password'}
			onSubmit={handleSubmit(onChangePassword)}
			stackProps={{
				alignItems: 'center'
			}}
		>
			<PasswordField
				id="newPassword"
				name="newPassword"
				error={errors['newPassword']}
				label={showPasswordLabel ? 'New password' : undefined}
				control={control}
				size={'md'}
				fontSize={'sm'}
				isRequired
			/>

			{showSubmit &&
				(isChangeSuccess ? (
					<AlertFeedback
						message={
							'Your password has been changed successfully. You can now log in with your new password.'
						}
					/>
				) : (
					<SubmitButton
						id={'submit-change-password'}
						name={'submit-change-password'}
						label="Change password"
						isLoading={isSubmitting}
						disabled={!isValid || isSubmitting}
						size={'md'}
						fontSize={'sm'}
						w={{ base: 'full', sm: '175px' }}
					/>
				))}
		</Form>
	);
};

export default ChangePasswordForm;
