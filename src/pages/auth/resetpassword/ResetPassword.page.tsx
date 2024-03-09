import AuthLayout from '@/components/layouts/AuthLayout';
import { ResetPasswordContainer } from '@/features/password';
import { useCheckLoggedIn } from '@/hooks/auth';
import { NextPage } from 'next';
import React from 'react';

const ResetPassword: NextPage = () => {
	useCheckLoggedIn();

	return (
		<AuthLayout
			header="Reset your password"
			headProps={{
				title: 'Reset password',
				pageSlug: '/resetpassword',
				description: 'Reset your password'
			}}
		>
			<ResetPasswordContainer />
		</AuthLayout>
	);
};

export default ResetPassword;
