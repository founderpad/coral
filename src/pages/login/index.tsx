import AuthLayout from 'components/layouts/AuthLayout';
import React from 'react';
import LoginForm from './components/LoginForm';

const Login = (): JSX.Element => {
	// const { signedIn } = useAuth();
	// const router = useRouter();

	// if (signedIn) router.push('/ideas?page=1');

	return (
		<AuthLayout header="Log in to founderpad" title="Log in">
			<LoginForm />
		</AuthLayout>
	);
};

export default Login;
