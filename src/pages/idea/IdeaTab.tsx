import { Divider } from '@chakra-ui/layout';
import { SubheadingText } from 'components/heading';
import { FlexLayout, StackLayout } from 'components/layouts';
import { Loading, UserAvatarDetails } from 'components/shared';
import ContentFieldAndValue from 'components/shared/ContentFieldAndValue';
import KeyInformationBox from 'components/shared/KeyInformationBox';
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
	if (!idea) router.replace('/404');

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
				<StackLayout direction={'row'} spacing={2} mt={1}>
					{idea.is_published && (
						<BaseTag
							bg={'green.500'}
							borderWidth={0}
							color={'white'}
						>
							Published
						</BaseTag>
					)}
					{interested > 0 && (
						<BaseTag bg={'gold'} borderWidth={0}>
							{interested} interested
						</BaseTag>
					)}
				</StackLayout>
			</FlexLayout>

			<Divider />

			<StackLayout
				direction={{ base: 'column', md: 'row' }}
				spacing={{ base: 0, md: 12 }}
				alignItems={{ base: 'flex-start', md: 'center' }}
			>
				<KeyInformationBox
					title={'Stage'}
					value={idea?.status}
					icon={{
						type: IoTrendingUpSharp,
						color: 'fpPrimary.500'
					}}
				/>
				<KeyInformationBox
					title={'Field'}
					value={idea?.field}
					icon={{
						type: IoBulbSharp,
						color: 'fpPrimary.500'
					}}
				/>
				{idea_user?.country && (
					<KeyInformationBox
						title={'Location'}
						value={idea_user?.country}
						icon={{
							type: IoLocationSharp,
							color: 'fpPrimary.500'
						}}
					/>
				)}
			</StackLayout>

			<Divider />

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
