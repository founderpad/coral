import { Divider, Flex, SimpleGrid, Stack } from '@chakra-ui/layout';
import { TitleHeading } from 'components/heading';
import { Loading } from 'components/shared';
import { UserAvatarDetails } from 'components/shared/UserAvatar';
import { useGetIdeaQuery } from 'generated/graphql';
import { useCurrentUser } from 'hooks/auth';
import { useQueryParam } from 'hooks/util';
import { useRouter } from 'next/router';
import React from 'react';
import {
	IoBulbSharp,
	IoBusinessSharp,
	IoDocumentsSharp,
	IoLocationSharp
} from 'react-icons/io5';
import { formatDate } from 'utils/validators';
import IdeaActions from './components/IdeaActions';
import IdeaHighlight from './components/IdeaHighlightBox';

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
		// description,
		// mission_statement,
		industry,
		competitors,
		// team,
		status,
		// additional_information,
		// is_published,
		idea_user,
		user_id,
		created_at
	} = idea;

	const { avatar_url, first_name, country } = idea_user;

	return (
		<Stack spacing={6}>
			<Flex
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
						<Divider orientation={'vertical'} mx={6} />
						<IdeaActions ideaId={idea?.id} />
					</React.Fragment>
				)}
			</Flex>

			{/* <UserAvatar
				size={'xl'}
				rounded={'full'}
				src={idea?.idea_user.avatar_url}
			/>
			<FormLabelWithValue label={'Idea name'} value={name} />
			<FormLabelWithValue
				label={'Mission statement'}
				value={mission_statement}
			/>
			<FormLabelWithValue label={'Description'} value={description} />
			<FormLabelWithValue label={'Idea stage'} value={status} />

			<FormLabelWithValue label={'Industry'} value={industry} />
			{competitors && (
				<FormLabelWithValue label={'Competitors'} value={competitors} />
			)}

			{team && <FormLabelWithValue label={'Team'} value={team} />}
			{additional_information && (
				<FormLabelWithValue
					label={'Additional information'}
					value={additional_information}
				/>
			)}
			<FormControl flexDirection={'row'}>
				<FormLabelText label={'Is published?'} />
				{is_published ? (
					<Icon
						as={IoCheckmarkCircleSharp}
						color={'green.500'}
						fontSize={'2xl'}
					/>
				) : (
					<Icon
						as={IoCloseCircleSharp}
						color={'red.500'}
						fontSize={'2xl'}
					/>
				)}
			</FormControl> */}

			<Stack>
				<TitleHeading label={name} />
				<SimpleGrid columns={{ base: 2, md: 4 }} pt={6} spacing={6}>
					<IdeaHighlight
						title={'Stage'}
						value={status}
						icon={IoBulbSharp}
					/>
					<IdeaHighlight
						title={'Field'}
						value={industry}
						icon={IoBusinessSharp}
					/>
					<IdeaHighlight
						title={'Location'}
						value={country}
						icon={IoLocationSharp}
					/>
					<IdeaHighlight
						title={'Documents'}
						value={'4 supporting documents'}
						icon={IoDocumentsSharp}
					/>
				</SimpleGrid>
				<SimpleGrid columns={2} spacing={6} pt={3}>
					{competitors && (
						<IdeaHighlight
							title={'Competitors'}
							value={competitors}
						/>
					)}
					<IdeaHighlight title={'Location'} value={country} />
				</SimpleGrid>
			</Stack>
		</Stack>
	);
};

export default IdeaTab;
