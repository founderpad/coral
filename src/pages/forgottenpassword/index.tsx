import AuthLayout from 'components/layouts/AuthLayout';
import React from 'react';
import ForgottenPasswordForm from './components/ForgottenPasswordForm';

const ForgottenPassword = (): JSX.Element => {
	return (
		<AuthLayout
			header="Reset your password"
			subheader="Enter your email address and we'll send you instructions to reset your password"
			title="Forgotten password"
		>
			<ForgottenPasswordForm />
		</AuthLayout>
	);
};

export default ForgottenPassword;
