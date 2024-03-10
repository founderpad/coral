import { AuthLayout } from '@/components/layouts';
import { RegisterContainer } from '@/features/register';
import { useCheckLoggedIn } from '@/hooks/auth';
import { NextPage } from 'next';
import React from 'react';

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
