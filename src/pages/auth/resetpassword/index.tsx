import AuthLayout from '@/components/layouts/AuthLayout';
import { useCheckLoggedIn } from '@/hooks/auth';
import { NextPage } from 'next';
import React from 'react';
import ResetPasswordForm from './components/ResetPasswordForm';

const ResetPassword: NextPage = () => {
	useCheckLoggedIn();
	return (
		<AuthLayout
			header="Reset your password"
			subheader="Enter your email address and we'll send you instructions to reset your password"
			title="Forgotten password"
		>
			<ResetPasswordForm />
		</AuthLayout>
	);
};

export default ResetPassword;
