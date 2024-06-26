import { Label } from '@/components/labels';
import { CaptionLabel } from '@/components/labels/Label';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { BaseLink } from '@/components/links';
import {
	AppDivider,
	Loading,
	NoResults,
	PointSeparator
} from '@/components/shared';
import { TIdeaPreviewFieldsFragment } from '@/generated/api';
import InterestedTotal from '@/pages/ideas/idea/components/InterestedTotal';
import PublishedLabel from '@/pages/ideas/idea/components/PublishedLabel';
import { formatDate } from '@/utils/validators';
import React from 'react';
import { useUserIdeas } from './hooks/useUserIdeas.page';

const MyIdeasContainer = () => {
	const { data, loading } = useUserIdeas();

	const hasResults = data?.length ?? 0;

	if (loading) return <Loading small />;
	if (hasResults < 1) return <NoResults label="ideas yet" />;

	return (
		<StackLayout>
			{data?.map((idea: TIdeaPreviewFieldsFragment, key: number) => (
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
							<PublishedLabel isPublished={idea?.isPublished!} />
							{idea?.interested_aggregate.aggregate?.count! >
								0 && (
								<React.Fragment>
									<PointSeparator small />
									<InterestedTotal
										total={
											idea?.interested_aggregate.aggregate
												?.count!
										}
									/>
								</React.Fragment>
							)}
							{/* <BoostIdea {...idea} /> */}
						</StackLayout>
						{data?.length !== key && <AppDivider />}
					</StackLayout>
				</React.Fragment>
			))}
		</StackLayout>
	);
};

export default MyIdeasContainer;
