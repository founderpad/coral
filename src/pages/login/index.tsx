import { useNhostAuth } from '@nhost/react-auth';
import AuthLayout from 'components/layouts/AuthLayout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import LoginForm from './components/LoginForm';

const Login: NextPage = () => {
	const { isAuthenticated } = useNhostAuth();
	const router = useRouter();

	if (isAuthenticated) router.push('/ideas?page=1');

	return (
		<AuthLayout header="Log in to founderpad" title="Log in">
			<LoginForm />
		</AuthLayout>
	);
};

export default Login;
