import Icon from '@chakra-ui/icon';
import { Divider } from '@chakra-ui/layout';
import { SubheadingText } from 'components/heading';
import { FlexLayout, StackLayout } from 'components/layouts';
import ContentHighlightsLayout from 'components/layouts/ContentHighlightsLayout';
import { LineSeparator, Loading } from 'components/shared';
import { UserAvatarDetails } from 'components/shared/UserAvatar';
import { useGetIdeaQuery } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import { useQueryParam } from 'hooks/util';
import { useRouter } from 'next/router';
import React from 'react';
import {
	IoBulbSharp,
	IoBusinessSharp,
	IoCheckmarkCircleSharp,
	IoLocationSharp
} from 'react-icons/io5';
import { formatDate } from 'utils/validators';
import IdeaActions from './components/IdeaMenu';

const IdeaTab = (): JSX.Element => {
	const router = useRouter();
	const user = useCurrentUser();

	const { data } = useGetIdeaQuery({
		variables: {
			id: useQueryParam('id')
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
		field
	} = idea;
	const { avatar_url, first_name } = idea_user;

	return (
		<StackLayout spacing={6}>
			<FlexLayout
				alignItems={'center'}
				justifyContent={{ base: 'space-between', sm: 'flex-end' }}
			>
				<UserAvatarDetails
					rounded={'full'}
					name={`Published by ${
						user.id === user_id ? 'you' : first_name
					}`}
					src={avatar_url}
					createdAt={formatDate(created_at, true)}
				/>

				{user?.id === user_id && (
					<React.Fragment>
						<Divider
							orientation={'vertical'}
							mx={3}
							display={{ base: 'none', sm: 'block' }}
						/>
						<IdeaActions ideaId={idea?.id} />
					</React.Fragment>
				)}
			</FlexLayout>

			<FlexLayout>
				<SubheadingText label={name} />
				{idea.is_published && (
					<Icon
						as={IoCheckmarkCircleSharp}
						ml={2}
						color={'green.500'}
						fontSize={'xl'}
					/>
				)}
			</FlexLayout>
			<LineSeparator display={{ base: 'none', md: 'block' }} />

			<ContentHighlightsLayout
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
			/>
		</StackLayout>
	);
};

export default IdeaTab;
