import { PageLayout } from '@/components/layouts';
import { PageHtmlHead } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import { useUserData } from '@nhost/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useChangePasswordModal from '../account/profile/hooks/useChangePasswordModal';

const Home: NextPage = () => {
	const user = useUserData();
	const router = useRouter();
	const { onOpenModal } = useChangePasswordModal();

	useEffect(() => {
		if (router.query['resetpassword'] !== undefined) {
			onOpenModal();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<PageHtmlHead
				title="Home"
				pageSlug="/home"
				description={`Welcome back, ${user?.displayName}`}
			/>
			<PageLayout title={`Welcome back, ${user?.displayName}`} />
		</>
	);
};

export default AuthFilter(Home);
