import { Label } from '@components/labels';
import { CaptionLabel } from '@components/labels/Label';
import { FlexLayout, StackLayout } from '@components/layouts';
import { BaseLink } from '@components/links';
import { Loading, NoResults, PointSeparator } from '@components/shared';
import AppDivider from '@components/shared/AppDivider';
import { useUserIdeasQuery } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import InterestedTotal from '@pages/ideas/idea/components/InterestedTotal';
import PublishedLabel from '@pages/ideas/idea/components/PublishedLabel';
import { formatDate } from '@utils/validators';
import React from 'react';

const MyIdeasContainer = () => {
	const user = useCurrentUser();
	const { data, loading } = useUserIdeasQuery({
		variables: {
			userId: user?.id
		},
		fetchPolicy: 'cache-and-network'
	});

	const hasResults = data?.user_ideas?.length ?? 0;

	if (loading) return <Loading small />;
	if (hasResults < 1) return <NoResults label="ideas yet" />;

	return (
		<StackLayout>
			{/* {data?.user_ideas?.map((idea: TIdeas, key: number) => ( */}
			{data?.user_ideas?.map((idea: any, key: number) => (
				<>
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
							mb={2}
							flex={1}
							rounded="sm"
						>
							<Label
								d="flex"
								w="full"
								overflow="hidden"
								fontWeight="medium"
								fontSize={{ base: 'smaller', sm: 'md' }}
								css={{ whiteSpace: 'normal' }}
								wordBreak="break-word"
								noOfLines={2}
								isTruncated
							>
								{idea?.name}
							</Label>
							<CaptionLabel>
								{formatDate(idea?.createdAt, true)}
							</CaptionLabel>
							<StackLayout
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
							</StackLayout>
						</FlexLayout>
						{data?.user_ideas?.length !== key && <AppDivider />}
					</StackLayout>
				</>
			))}
		</StackLayout>
	);
};

export default MyIdeasContainer;
