import { Label } from '@components/labels';
import AuthLayout from '@components/layouts/AuthLayout';
import { PrimaryLink } from '@components/links';
import ChangePasswordForm from '@components/shared/ChangePasswordForm';
import { NextPage } from 'next';
import React from 'react';

const ChangePassword: NextPage = () => {
	return (
		<AuthLayout title="Change password" header="Change your password">
			<Label>Please enter your new password below.</Label>
			<ChangePasswordForm showSubmit={true} />

			<PrimaryLink
				href="/login"
				title={'Link to login'}
				fontSize={'xs'}
				textAlign={'end'}
			>
				Login here
			</PrimaryLink>
		</AuthLayout>
	);
};

export default ChangePassword;
