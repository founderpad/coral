import { Icon } from '@chakra-ui/react';
import { PrimaryButton } from 'components/buttons';
import { SubheadingText } from 'components/heading';
import { FlexLayout, StackLayout } from 'components/layouts';
import { Loading, PointSeparator, UserAvatarDetails } from 'components/shared';
import AppDivider from 'components/shared/AppDivider';
import ContentFieldAndValue from 'components/shared/ContentFieldAndValue';
import OverviewTags from 'components/shared/OverviewTags';
import { TGetIdeaQuery } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import {
	IoBulbSharp,
	IoChatbubbleEllipsesSharp,
	IoLocationSharp,
	IoTrendingUpSharp
} from 'react-icons/io5';
import { formatDate } from 'utils/validators';
import { CommentsList } from './CommentsTab';
import IdeaActions from './components/IdeaMenu';
import InterestedTotal from './components/InterestedTotal';
import PublishedLabel from './components/PublishedLabel';

const IdeaTab = ({ data }: { data: TGetIdeaQuery }): JSX.Element => {
	const router = useRouter();
	const user = useCurrentUser();
	const [showComments, setShowComments] = useState(false);

	const onShowCommentsClick = useCallback(() => {
		setShowComments(!showComments);
	}, [showComments]);

	const idea = data?.idea;

	if (!data) return <Loading small />;

	// const onShowCommentsClick = () => {
	// 	setShowComments(!showComments);
	// };

	// Only enable the id creator to view their own idea if it's unpublished
	if (!idea || (!idea.is_published && idea.user_id !== user.id))
		router.replace('/404');

	const {
		name,
		idea_user,
		user_id,
		created_at,
		description,
		team,
		competitors,
		additional_information,
		status,
		field,
		id,
		interested,
		is_published
	} = idea;
	const { avatar_url, first_name } = idea_user;

	return (
		<StackLayout
			direction={'row'}
			flex={1}
			rounded={'none'}
			overflowY={'hidden'}
			spacing={0}
		>
			<StackLayout p={4} flex={1} overflowY={'auto'}>
				<FlexLayout
					alignItems={'center'}
					justifyContent={'space-between'}
					mb={4}
				>
					<UserAvatarDetails
						rounded={'full'}
						name={`Published by ${
							user.id === user_id ? 'you' : first_name
						}`}
						src={avatar_url}
						createdAt={formatDate(created_at, true)}
					/>

					{user?.id === user_id && <IdeaActions ideaId={idea?.id} />}
				</FlexLayout>

				<FlexLayout wordBreak={'break-all'} flexDirection={'column'}>
					<SubheadingText label={name} />
					<FlexLayout justifyContent={'space-between'}>
						<StackLayout
							direction={'row'}
							spacing={2}
							pt={2}
							alignItems={'center'}
						>
							<PublishedLabel isPublished={is_published} />
							{interested > 0 && (
								<>
									<PointSeparator small />
									<InterestedTotal total={interested} />
								</>
							)}
						</StackLayout>
						<PrimaryButton
							name={'show-comments'}
							variant={'ghost'}
							leftIcon={<Icon as={IoChatbubbleEllipsesSharp} />}
							onClick={onShowCommentsClick}
						>
							{showComments ? 'Hide comments' : 'Comments'}
						</PrimaryButton>
					</FlexLayout>
				</FlexLayout>
				<AppDivider />
				<OverviewTags
					tags={[
						{
							title: 'Stage',
							value: status,
							icon: IoTrendingUpSharp
						},
						{
							title: 'Field',
							value: field,
							icon: IoBulbSharp
						},
						{
							title: 'Location',
							value: idea_user?.country,
							icon: IoLocationSharp
						}
					]}
				/>

				<AppDivider />

				<StackLayout flex={1}>
					<ContentFieldAndValue
						title={'Description'}
						value={description}
					/>
					{team && (
						<ContentFieldAndValue title={'Team'} value={team} />
					)}
					{competitors && (
						<ContentFieldAndValue
							title={'Competitors'}
							value={competitors}
						/>
					)}
					{additional_information && (
						<ContentFieldAndValue
							title={'Additional information'}
							value={additional_information}
						/>
					)}
				</StackLayout>
			</StackLayout>
			{showComments && <CommentsList />}
		</StackLayout>

		// <StackLayout
		// 	bg={'red.100'}
		// 	p={2}
		// 	spacing={12}
		// 	flex={1}
		// 	overflowY={'auto'}
		// 	rounded={'none'}
		// 	h={'full'}
		// 	minH={'1px'}
		// >
		// 	<Heading>Test</Heading>
		// 	<Heading>Test</Heading>
		// 	<Heading>Test</Heading>
		// 	<Heading>Test</Heading>
		// 	<Heading>Test</Heading>
		// 	<Heading>Test</Heading>
		// 	<Heading>Test</Heading>
		// 	<Heading>Test</Heading>
		// 	<Heading>Test</Heading>
		// 	<Heading>Test</Heading>
		// 	<Heading>Test</Heading>
		// </StackLayout>
	);
};

const CommentsGrid = (): JSX.Element => (
	<CommentsList />

	// <Drawer isOpen={true} placement={'right'} onClose={() => {}}>
	// 	<DrawerContent position={'relative'}>
	// 		<DrawerCloseButton />
	// 		<DrawerHeader>All comments</DrawerHeader>

	// 		<DrawerBody>
	// 			<CommentsTab />
	// 		</DrawerBody>

	// 		<DrawerFooter></DrawerFooter>
	// 	</DrawerContent>
	// </Drawer>
);

export default IdeaTab;
