import AuthLayout from '@components/layouts/AuthLayout';
import { TUsers, useUserLazyQuery } from '@generated/api';
import { useCheckLoggedIn } from '@hooks/auth';
import { setUser } from '@slices/auth';
import { nhost } from '@utils/nhost';
import { NextPage } from 'next';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from './components/LoginForm';

const Login: NextPage = () => {
	const changePasswordHash = Router.asPath.split('#')[1] ?? '';
	const [fetchAuthUser] = useUserLazyQuery();
	const dispatch = useDispatch();

	useCheckLoggedIn();

	useEffect(() => {
		nhost.auth.onAuthStateChanged((event, session) => {
			if (event === 'SIGNED_IN') {
				fetchAuthUser({
					variables: {
						userId: session?.user?.id
					}
				}).then((result) => {
					dispatch(setUser(result.data?.user as TUsers));
				});
			}
		});
	}, []);

	useEffect(() => {
		if (changePasswordHash.search('type=passwordReset') !== -1) {
			Router.replace(
				{
					pathname: '/changepassword',
					hash: changePasswordHash
				},
				undefined,
				{ shallow: true }
			);
		}
	}, [changePasswordHash]);

	return (
		<AuthLayout header="Log in to founderpad" title="Log in">
			<LoginForm />
		</AuthLayout>
	);
};

export default Login;
