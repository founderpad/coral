import { PageLayout } from '@/components/layouts';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import MatchContainer from './MatchContainer';
import { PageHtmlHead } from '@/components/shared';

const Match: NextPage = () => {
	return (
		<>
			<PageHtmlHead
				title="Match"
				pageSlug="match"
				description="View all your matches."
			/>
			<PageLayout
				title="Your matches"
				subtitle="Here are the matches we have found for you based on your preferences"
				spacing={0}
			>
				<MatchContainer />
			</PageLayout>
		</>
	);
};

export default AuthFilter(Match);
