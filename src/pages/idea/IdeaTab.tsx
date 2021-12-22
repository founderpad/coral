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
	IoLocationSharp,
	IoTrendingUpSharp
} from 'react-icons/io5';
import { formatDate } from 'utils/validators';
import { CommentsList } from './components/comments/CommentsList';
import IdeaActions from './components/IdeaMenu';
import InterestedTotal from './components/InterestedTotal';
import PublishedLabel from './components/PublishedLabel';

const IdeaTab = ({ data }: { data: TGetIdeaQuery }): JSX.Element => {
	const router = useRouter();
	const user = useCurrentUser();
	const [showComments, setShowComments] = useState(false);

	const onShowCommentsClick = useCallback(() => {
		setShowComments(!showComments);

		document.getElementById('idea-comments').scrollIntoView({
			behavior: 'smooth'
		});
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
		number_of_interested,
		number_of_comments,
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

					{user?.id === user_id && <IdeaActions ideaId={id} />}
				</FlexLayout>

				<FlexLayout wordBreak={'break-all'} flexDirection={'column'}>
					<SubheadingText>{name}</SubheadingText>
					<FlexLayout
						justifyContent={'space-between'}
						alignItems={'center'}
					>
						<StackLayout
							direction={'row'}
							spacing={2}
							pt={2}
							alignItems={'center'}
						>
							<PublishedLabel isPublished={is_published} />
							{number_of_interested > 0 && (
								<>
									<PointSeparator small />
									<InterestedTotal
										total={number_of_interested}
									/>
								</>
							)}
						</StackLayout>
						<PrimaryButton
							name={'show-comments'}
							variant={'ghost'}
							onClick={onShowCommentsClick}
							display={{ base: 'none', md: 'block' }}
							alignContent={'center'}
						>
							{number_of_comments > 0
								? number_of_comments + ' comment(s)'
								: 'Comments'}
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
				<CommentsList display={{ base: 'none', md: 'flex' }} />
			</StackLayout>
			{/* <CommentsList display={{ base: 'none', md: 'flex' }} /> */}
		</StackLayout>
	);
};

export default IdeaTab;
