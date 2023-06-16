import { PageLayout } from '@/components/layouts';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import MatchContainer from './MatchContainer';
import { PageHtmlHead } from '@/components/shared';
import { useMatchSettingsQuery } from '@/generated/api';
import { useUserData } from '@nhost/react';

const Match: NextPage = () => {
	const user = useUserData();

	const { data } = useMatchSettingsQuery({
		variables: {
			id: user?.id
		}
	});

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
				<MatchContainer {...data?.settings} />
			</PageLayout>
		</>
	);
};

export default AuthFilter(Match);
