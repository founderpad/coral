import AuthLayout from 'components/layouts/AuthLayout';
import React from 'react';
import RegisterForm from './components/RegisterForm';

const Register = (): JSX.Element => {
	// const { signedIn } = useAuth();
	// const router = useRouter();

	// if (signedIn) router.push('/ideas?page=1');
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
