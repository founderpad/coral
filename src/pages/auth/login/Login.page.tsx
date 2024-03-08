import AuthLayout from '@/components/layouts/AuthLayout';
import { useCheckLoggedIn } from '@/hooks/auth';
import { NextPage } from 'next';
import React from 'react';
import LoginContainer from './LoginContainer';

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
