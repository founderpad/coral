import { FlexLayout, PageLayout } from '@/components/layouts';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import { NoResults, PageHtmlHead } from '@/components/shared';
import { Button } from '@chakra-ui/react';
import useMatchModal from '@/components/shared/match/MatchModal';
import { MatchContainer, useMatchSettings } from '@/features/match';

const MatchPage: NextPage = () => {
	const { data } = useMatchSettings();
	const { onOpenModal } = useMatchModal(data ?? {}, true);

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
							<FlexLayout alignItems="center">
								Add your{' '}
								<Button
									variant="ghost"
									color="fpPrimary.500"
									onClick={onOpenModal}
								>
									Match
								</Button>{' '}
								preferences before you can see your matches
								here.
							</FlexLayout>
						}
					/>
				</PageLayout>
			)}
		</>
	);
};

export default AuthFilter(MatchPage);
