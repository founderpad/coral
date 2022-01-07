import AuthLayout from 'components/layouts/AuthLayout';
import { useCheckLoggedIn } from 'hooks/auth';
import { NextPage } from 'next';
import React from 'react';
import LoginForm from './components/LoginForm';

const Login: NextPage = () => {
	useCheckLoggedIn();

	return (
		<AuthLayout header="Log in to founderpad" title="Log in">
			<LoginForm />
		</AuthLayout>
	);
};

export default Login;
