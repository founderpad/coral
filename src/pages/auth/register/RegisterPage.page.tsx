import AuthLayout from '@/components/layouts/AuthLayout';
import { useCheckLoggedIn } from '@/hooks/auth';
import { NextPage } from 'next';
import React from 'react';
import RegisterContainer from '../../../features/register/RegisterContainer';

const RegisterPage: NextPage = () => {
	useCheckLoggedIn();

	// TODO
	// Create translations to support different languages (React i18next)
	return (
		<AuthLayout
			header="Register an account to get started"
			headProps={{
				title: 'Register',
				pageSlug: '/register',
				description: 'Register an account and get started!'
			}}
		>
			<RegisterContainer />
		</AuthLayout>
	);
};

export default RegisterPage;
