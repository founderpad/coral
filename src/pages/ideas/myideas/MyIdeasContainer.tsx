import { Label } from '@/components/labels';
import { CaptionLabel } from '@/components/labels/Label';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { BaseLink } from '@/components/links';
import { Loading, NoResults, PointSeparator } from '@/components/shared';
import AppDivider from '@/components/shared/AppDivider';
import { TIdeaPreviewFieldsFragment, useUserIdeasQuery } from '@/generated/api';
import { useClaim } from '@/hooks/auth';
import InterestedTotal from '@/pages/ideas/idea/components/InterestedTotal';
import PublishedLabel from '@/pages/ideas/idea/components/PublishedLabel';
import { formatDate } from '@/utils/validators';
import React from 'react';
// import BoostIdea from '../idea/components/BoostIdea';

const MyIdeasContainer = () => {
	const { data, loading } = useUserIdeasQuery({
		variables: {
			userId: useClaim()
		},
		fetchPolicy: 'cache-and-network'
	});

	const hasResults = data?.user_ideas?.length ?? 0;

	if (loading) return <Loading small />;
	if (hasResults < 1) return <NoResults label="ideas yet" />;

	return (
		<StackLayout>
			{data?.user_ideas?.map(
				(idea: TIdeaPreviewFieldsFragment, key: number) => (
					<React.Fragment key={idea.id}>
						<StackLayout spacing={4}>
							<FlexLayout
								flexDirection="column"
								as={BaseLink}
								href={`/idea/${idea?.id}`}
								alignItems="flex-start"
								_hover={{
									borderColor: 'gray.50',
									transition: 'ease-in .3s',
									bg: 'gray.50'
								}}
								p={2}
								py={4}
								mb={2}
								flex={1}
								rounded="sm"
							>
								<Label
									display="flex"
									w="full"
									overflow="hidden"
									fontWeight="medium"
									fontSize={{ base: 'smaller', sm: 'md' }}
									css={{ whiteSpace: 'normal' }}
									wordBreak="break-word"
									noOfLines={2}
									// isTruncated
								>
									{idea?.name}
								</Label>
								<CaptionLabel>
									{formatDate(idea?.createdAt, true)}
								</CaptionLabel>
								{/* <StackLayout
								direction="row"
								spacing={2}
								pt={4}
								alignItems="center"
							>
								<PublishedLabel
									isPublished={idea?.isPublished}
								/>
								{idea?.totalInterested > 0 && (
									<React.Fragment>
										<PointSeparator small />
										<InterestedTotal
											total={idea?.totalInterested}
										/>
									</React.Fragment>
								)}
								<BoostButton />
							</StackLayout> */}
							</FlexLayout>
							<StackLayout
								direction="row"
								spacing={2}
								alignItems="center"
								justifyContent="space-between"
							>
								<PublishedLabel
									isPublished={idea?.isPublished!}
								/>
								{idea?.interested_aggregate.aggregate?.count! >
									0 && (
									<React.Fragment>
										<PointSeparator small />
										<InterestedTotal
											total={
												idea?.interested_aggregate
													.aggregate?.count!
											}
										/>
									</React.Fragment>
								)}
								{/* <BoostIdea {...idea} /> */}
							</StackLayout>
							{data?.user_ideas?.length !== key && <AppDivider />}
						</StackLayout>
					</React.Fragment>
				)
			)}
		</StackLayout>
	);
};

export default MyIdeasContainer;
