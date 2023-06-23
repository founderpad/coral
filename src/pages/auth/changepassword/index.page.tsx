import { Label } from '@/components/labels';
import AuthLayout from '@/components/layouts/AuthLayout';
import ChangePasswordForm from '@/components/shared/ChangePasswordForm';
import { NextPage } from 'next';
import React from 'react';

const ChangePassword: NextPage = () => (
	<AuthLayout
		header="Change your password"
		headProps={{
			title: 'Change password',
			pageSlug: '/changepassword',
			description: 'Change your password.'
		}}
	>
		<Label fontSize="small">Please enter your new password below.</Label>
		<ChangePasswordForm showSubmit={true} />
	</AuthLayout>
);

export default ChangePassword;
