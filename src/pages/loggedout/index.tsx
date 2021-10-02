import AuthLayout from 'components/layouts/AuthLayout';
import BaseLink from 'components/links';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from 'slices/auth';

const LoggedOut = (): JSX.Element => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(clearUser());
	}, []);

	return (
		<AuthLayout header="You've logged out successfully" title="Logged out">
			<BaseLink href={'/login'} textAlign={'center'}>
				Click here to log in
			</BaseLink>
		</AuthLayout>
	);
};

export default LoggedOut;
