import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { PasswordField } from '@components/input';
import { Label } from '@components/labels';
import AuthLayout from '@components/layouts/AuthLayout';
import { useChangePassword } from '@hooks/auth';
import { NextPage } from 'next';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ChangePasswordForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid } // isValid
	} = useForm({ mode: 'all' });
	const { onChangePassword, isChangeSuccess } = useChangePassword();

	useEffect(() => {
		if (isChangeSuccess) Router.replace('/login');
	}, [isChangeSuccess]);

	return (
		<Form
			id={'edit-change-password'}
			name={'edit-change-password'}
			onSubmit={handleSubmit(onChangePassword)}
			stackProps={{
				alignItems: 'center'
			}}
		>
			<Label>Please enter your new password below.</Label>

			<PasswordField
				id="newPassword"
				name="newPassword"
				error={errors['newPassword']}
				control={control}
				size={'md'}
				fontSize={'sm'}
				isRequired
			/>

			{isChangeSuccess && (
				<AlertFeedback
					message={
						'Your password has been changed successfully. You can now log in with your new password.'
					}
				/>
			)}
			<SubmitButton
				id={'submit-change-password'}
				name={'submit-change-password'}
				label="Change password"
				isLoading={isSubmitting}
				disabled={!isValid || isSubmitting}
				// disabled={isSubmitting}
				size={'md'}
				fontSize={'sm'}
				w={{ base: 'full', sm: '175px' }}
			/>
		</Form>
	);
};

const ChangePassword: NextPage = () => {
	return (
		<AuthLayout title="Change password" header="Change your password">
			<ChangePasswordForm />
		</AuthLayout>
	);
};

export default ChangePassword;
