import { Label } from 'components/labels';
import { CaptionLabel } from 'components/labels/Label';
import { FlexLayout, StackLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { Loading, PointSeparator } from 'components/shared';
import AppDivider from 'components/shared/AppDivider';
import { TIdeas, useGetUserIdeasQuery } from 'generated/api';
import InterestedTotal from 'pages/idea/components/InterestedTotal';
import PublishedLabel from 'pages/idea/components/PublishedLabel';
import React from 'react';
import { formatDate } from 'utils/validators';

const MyIdeasContainer = () => {
	const { data, loading } = useGetUserIdeasQuery({
		variables: {
			userId: '1673e41d-8319-4a41-bbf1-bbd7e52afbc0'
		}
	});

	if (loading) return <Loading small />;

	return (
		<StackLayout>
			{data.user_ideas?.map((idea: TIdeas, key: number) => (
				<>
					<StackLayout spacing={4}>
						<FlexLayout
							flexDirection={'column'}
							as={BaseLink}
							href={`/idea/${idea.id}`}
							alignItems={'flex-start'}
							_hover={{
								borderColor: 'gray.50',
								transition: 'ease-in .3s',
								bg: 'gray.50'
							}}
							p={2}
							mb={2}
							flex={1}
							rounded={'sm'}
						>
							<Label
								d={'flex'}
								w={'full'}
								overflow={'hidden'}
								fontWeight={'medium'}
								fontSize={{ base: 'smaller', sm: 'md' }}
								css={{ whiteSpace: 'normal' }}
								wordBreak={'break-word'}
								noOfLines={2}
								isTruncated
							>
								{idea.name}
							</Label>
							<CaptionLabel>
								{formatDate(idea.created_at, true)}
							</CaptionLabel>
							<StackLayout
								direction={'row'}
								spacing={2}
								pt={4}
								alignItems={'center'}
							>
								<PublishedLabel
									isPublished={idea?.is_published}
								/>
								{idea?.interested > 0 && (
									<>
										<PointSeparator small />
										<InterestedTotal
											total={idea.interested}
										/>
									</>
								)}
							</StackLayout>
						</FlexLayout>
						{data.user_ideas.length !== key && <AppDivider />}
					</StackLayout>
				</>
			))}
		</StackLayout>
	);
};

export default MyIdeasContainer;
