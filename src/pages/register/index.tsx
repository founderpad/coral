import { useAuth } from '@nhost/react-auth';
import AuthLayout from 'components/layouts/AuthLayout';
import { useRouter } from 'next/router';
import React from 'react';
import RegisterForm from './components/RegisterForm';

const Register = (): JSX.Element => {
	const { signedIn } = useAuth();
	const router = useRouter();

	if (signedIn) router.back();
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
