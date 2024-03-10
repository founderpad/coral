import { PageLayout } from '@/components/layouts';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import { PageHtmlHead } from '@/components/shared';
import MyIdeasContainer from '@/features/idea/myideas/MyIdeasContainer';

const MyIdeas: NextPage = () => {
	return (
		<>
			<PageHtmlHead
				title="My ideas"
				pageSlug="ideas/myideas"
				description="Here are all the ideas below that you have created."
			/>
			<PageLayout
				title="My ideas"
				subtitle="Here are all the ideas below that you have created"
			>
				<MyIdeasContainer />
			</PageLayout>
		</>
	);
};

export default AuthFilter(MyIdeas);
