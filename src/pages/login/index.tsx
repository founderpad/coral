import AuthLayout from 'components/layouts/AuthLayout';
import React from 'react';
import LoginForm from './components/LoginForm';

const Login = (): JSX.Element => {
	return (
		<AuthLayout
			header="Login"
			subheader="Pick up where you left off"
			title="Login"
		>
			<LoginForm />
		</AuthLayout>
	);
};

export default Login;
