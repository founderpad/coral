import { SubheadingText } from 'components/heading';
import { FlexLayout, StackLayout } from 'components/layouts';
import { Loading, UserAvatarDetails } from 'components/shared';
import AppDivider from 'components/shared/AppDivider';
import ContentFieldAndValue from 'components/shared/ContentFieldAndValue';
import OverviewTags from 'components/shared/OverviewTags';
import BaseTag from 'components/tags/BaseTag';
import { useGetIdeaQuery } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import { useQueryParam } from 'hooks/util';
import { useRouter } from 'next/router';
import React from 'react';
import {
	IoBulbSharp,
	IoLocationSharp,
	IoTrendingUpSharp
} from 'react-icons/io5';
import { formatDate } from 'utils/validators';
import IdeaActions from './components/IdeaMenu';
import InterestedIdea from './components/InterestedIdea';

const IdeaTab = (): JSX.Element => {
	const router = useRouter();
	const user = useCurrentUser();

	const { data } = useGetIdeaQuery({
		variables: {
			id: useQueryParam('id'),
			userId: user?.id
		}
	});

	const idea = data?.idea;

	if (!data) return <Loading small />;
	if (!idea || !idea.is_published) router.replace('/404');

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
		interested
	} = idea;
	const { avatar_url, first_name } = idea_user;

	return (
		<StackLayout>
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

			<FlexLayout
				flex={1}
				wordBreak={'break-all'}
				flexDirection={'column'}
			>
				<SubheadingText label={name} />
				<StackLayout
					direction={'row'}
					spacing={2}
					pt={2}
					alignItems={'center'}
				>
					<BaseTag bg={'green.500'} borderWidth={0} color={'white'}>
						Published
					</BaseTag>

					{interested > 0 && (
						<BaseTag bg={'gold'} borderWidth={0}>
							{interested} interested
						</BaseTag>
					)}
				</StackLayout>
			</FlexLayout>

			<AppDivider />

			{idea.user_id !== user.id && (
				<React.Fragment>
					<InterestedIdea
						ideaId={id}
						hasInterest={!!data.has_interest?.id}
					/>
					<AppDivider />
				</React.Fragment>
			)}

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

			<StackLayout>
				<ContentFieldAndValue
					title={'Description'}
					value={description}
				/>
				{team && <ContentFieldAndValue title={'Team'} value={team} />}
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

			{/* <ContentHighlightsLayout
				content={[
					{ title: 'Description', value: description },
					{ ...(team && { title: 'Team', value: team }) },
					{
						...(competitors && {
							title: 'Competitors',
							value: competitors
						})
					},
					{
						...(additional_information && {
							title: 'Additional information',
							value: additional_information
						})
					}
				]}
				highlights={[
					{ title: 'Stage', value: status, icon: IoBulbSharp },
					{ title: 'Field', value: field, icon: IoBusinessSharp },
					{
						title: 'Location',
						value: idea_user.country,
						icon: IoLocationSharp
					}
				]}
			/> */}
		</StackLayout>
	);
};

export default IdeaTab;
