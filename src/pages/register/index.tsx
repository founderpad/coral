import { useNhostAuth } from '@nhost/react-auth';
import AuthLayout from 'components/layouts/AuthLayout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import RegisterForm from './components/RegisterForm';

const Register: NextPage = () => {
	const { isAuthenticated } = useNhostAuth();
	const router = useRouter();

	if (isAuthenticated) router.push('/ideas?page=1');
	return (
		<AuthLayout
			header="Register an account to get started"
			subheader="Get started by creating an account below"
			title="Register "
		>
			<RegisterForm />
		</AuthLayout>
	);
};

export default Register;
