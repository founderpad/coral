import AuthLayout from '@/components/layouts/AuthLayout';
import { useCheckLoggedIn } from '@/hooks/auth';
import { NextPage } from 'next';
import React from 'react';
import RegisterForm from './components/RegisterForm';

const Register: NextPage = () => {
	useCheckLoggedIn();

	return (
		<AuthLayout
			header="Register an account to get started"
			subheader="Get started by creating an account below"
			title="Register"
		>
			<RegisterForm />
		</AuthLayout>
	);
};

export default Register;
