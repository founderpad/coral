import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { PasswordField } from '@components/input';
import { useChangePassword } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
	showPasswordLabel?: boolean;
	showSubmit?: boolean;
	isSuccess?: boolean;
	isError?: boolean;
}

const ChangePasswordForm = (props: Props) => {
	const { showPasswordLabel = false, showSubmit = false } = props;
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useForm({ mode: 'all' });

	const onChangePassword = useChangePassword();

	const isChangeSuccess = useQueryParam('cp_success');
	const isChangeError = useQueryParam('cp_error');

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

			{isChangeSuccess && (
				<AlertFeedback
					status={'success'}
					message={'Your password has been updated successfully.'}
				/>
			)}

			{isChangeError && (
				<AlertFeedback
					status={'error'}
					message={
						'Failed to change password. Please try again later.'
					}
				/>
			)}

			{!isChangeSuccess && showSubmit && (
				<SubmitButton
					id={'submitresetpassword'}
					name={'submitresetpassword'}
					label="Reset password"
					isLoading={isSubmitting}
					disabled={!isValid || isSubmitting}
					size={'md'}
					fontSize={'sm'}
					w={{ base: 'full', sm: '175px' }}
				/>
			)}
		</Form>
	);
};

export default ChangePasswordForm;
