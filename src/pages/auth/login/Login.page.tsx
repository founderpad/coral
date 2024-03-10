import { AuthLayout } from '@/components/layouts';
import { LoginContainer } from '@/features/login/components';
import { useCheckLoggedIn } from '@/hooks/auth';
import { NextPage } from 'next';
import React from 'react';

const Login: NextPage = () => {
	useCheckLoggedIn();

	return (
		<AuthLayout
			header="Sign in to founderpad"
			headProps={{
				title: 'Login',
				pageSlug: '/login',
				description: 'Login to your account.'
			}}
		>
			<LoginContainer />
		</AuthLayout>
	);
};

export default Login;
