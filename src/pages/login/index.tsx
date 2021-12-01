import AuthLayout from 'components/layouts/AuthLayout';
import React from 'react';
import LoginForm from './components/LoginForm';

const Login = (): JSX.Element => (
	<AuthLayout header="Log in to founderpad" title="Log in">
		<LoginForm />
	</AuthLayout>
);

export default Login;
