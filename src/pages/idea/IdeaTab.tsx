import { Stack } from '@chakra-ui/layout';
import { FormControl, Icon, Text } from '@chakra-ui/react';
import { FormLabelText } from 'components/form';
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

	return (
		<Stack spacing={6}>
			{user?.id === idea?.user_id && <IdeaActions ideaId={idea?.id} />}
			<UserAvatar
				size={'xl'}
				rounded={'full'}
				src={idea?.idea_user.avatar_url}
			/>
			<FormControl>
				<FormLabelText label={'Idea name'} />
				<Text>{idea?.name}</Text>
			</FormControl>
			<FormControl>
				<FormLabelText label={'Mission statement'} />
				<Text>{idea?.mission_statement}</Text>
			</FormControl>
			<FormControl>
				<FormLabelText label={'Description'} />
				<Text>{idea?.description}</Text>
			</FormControl>
			<FormControl>
				<FormLabelText label={'Idea stage'} />
				<Text>{idea?.status}</Text>
			</FormControl>
			<FormControl>
				<FormLabelText label={'Industry'} />
				<Text>{idea?.industry}</Text>
			</FormControl>
			<FormControl>
				<FormLabelText label={'Competitors'} />
				<Text>{idea?.competitors ?? 'Empty'}</Text>
			</FormControl>
			<FormControl>
				<FormLabelText label={'Team'} />
				<Text>{idea?.team ?? 'Empty'}</Text>
			</FormControl>
			<FormControl>
				<FormLabelText label={'Additional information'} />
				<Text>{idea?.additional_information ?? 'Empty'}</Text>
			</FormControl>
			<FormControl flexDirection={'row'}>
				<FormLabelText label={'Is published?'} />
				{idea?.is_published ? (
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
