import AuthLayout from '@components/layouts/AuthLayout';
import { NextPage } from 'next';
import Router from 'next/router';
import React, { useEffect } from 'react';
import LoginForm from './components/LoginForm';

const Login: NextPage = () => {
	const changePasswordHash = Router.asPath.split('#')[1] ?? '';

	useEffect(() => {
		if (changePasswordHash.search('type=passwordReset') !== -1) {
			Router.replace(
				{
					pathname: '/changepassword',
					hash: changePasswordHash
				},
				undefined,
				{ shallow: true }
			);
		}
	}, []);

	return (
		<AuthLayout header="Log in to founderpad" title="Log in">
			<LoginForm />
		</AuthLayout>
	);
};

export default Login;
