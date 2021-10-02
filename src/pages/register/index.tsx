import AuthLayout from 'components/layouts/AuthLayout';
import React from 'react';
import RegisterForm from './components/RegisterForm';

const Register = (): JSX.Element => {
	return (
		<AuthLayout
			header="Register"
			subheader="Get started by creating an account below"
			title="Register"
		>
			<RegisterForm />
		</AuthLayout>
	);
};

export default Register;
