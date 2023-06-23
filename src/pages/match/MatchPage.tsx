import { PageLayout } from '@/components/layouts';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import MatchContainer from './MatchContainer';
import { NoResults, PageHtmlHead } from '@/components/shared';
import { Text } from '@chakra-ui/react';
import { BaseLink } from '@/components/links';
import { useMatchSettings } from './hooks/useMatchSettings';

const MatchPage: NextPage = () => {
	const { data } = useMatchSettings();

	return (
		<>
			<PageHtmlHead
				title="Match"
				pageSlug="match"
				description="View all your matches."
			/>
			{data?.settings?.lookingFor ? (
				<PageLayout
					title="Your matches"
					subtitle="Here are the matches we have found for you based on your preferences"
					spacing={0}
				>
					<MatchContainer {...data?.settings} />
				</PageLayout>
			) : (
				<PageLayout>
					<NoResults
						label={
							<Text>
								Add your{' '}
								<BaseLink
									title="/account/profile"
									href="/account/profile"
								>
									Match
								</BaseLink>{' '}
								preferences before you can see your matches
								here.
							</Text>
						}
					/>
				</PageLayout>
			)}
		</>
	);
};

export default AuthFilter(MatchPage);