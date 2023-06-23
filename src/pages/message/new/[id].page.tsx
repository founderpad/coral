import { PageLayout } from '@/components/layouts';
// import { DocumentTitle } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';

const NewMessage: NextPage = () => {
	// const response = useGet

	return (
		<>
			{/* <DocumentTitle title="New message" /> */}
			<PageLayout
				title="New message"
				p={{ base: 0, md: 4 }}
				borderWidth={{ base: 0, lg: 1 }}
				borderColor="fpLightGrey.900"
			>
				{/* <ProfileLayout /> */}
			</PageLayout>
		</>
	);
};

export default AuthFilter(NewMessage);
