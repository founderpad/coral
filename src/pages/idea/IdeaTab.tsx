import { Stack } from '@chakra-ui/layout';
import { FormControl, Icon } from '@chakra-ui/react';
import { FormLabelText, FormLabelWithValue } from 'components/form';
import Loading from 'components/shared/Loading';
import UserAvatar from 'components/shared/UserAvatar';
import { useGetIdeaQuery } from 'generated/graphql';
import { useCurrentUser } from 'hooks/auth';
import { useRouter } from 'next/router';
import React from 'react';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';
import IdeaActions from './components/IdeaActions';

const IdeaTab = (): JSX.Element => {
	const router = useRouter();
	const user = useCurrentUser();
	// const data = useGetIdea(router.query.id as string);

	const { data } = useGetIdeaQuery({
		variables: {
			id: router.query.id as string
		}
	});

	const idea = data?.idea;

	if (!data) return <Loading small />;
	if (!idea) router.replace('/404');

	const {
		name,
		description,
		mission_statement,
		industry,
		competitors,
		team,
		status,
		additional_information,
		is_published
	} = idea;

	return (
		<Stack spacing={6}>
			{user?.id === idea?.user_id && <IdeaActions ideaId={idea?.id} />}
			<UserAvatar
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
			</FormControl>
		</Stack>
	);
};

export default IdeaTab;
