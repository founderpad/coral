import AuthLayout from '@components/layouts/AuthLayout';
import { useQueryParam } from '@hooks/util';
import { NextPage } from 'next';
import Router from 'next/router';
import React, { useEffect } from 'react';
import LoginForm from './components/LoginForm';

const Login: NextPage = () => {
	const isPasswordReset = useQueryParam('type') === 'passwordReset';
	// const queryParams = Router.query;

	useEffect(() => {
		if (isPasswordReset) {
			console.log('login change owddddd');

			Router.replace(
				{
					pathname: '/changepassword',
					search: '?type=passwordReset',
					hash: 'refreshToken=1234567788'
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
