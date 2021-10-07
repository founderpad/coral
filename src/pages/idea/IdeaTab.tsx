import { Divider, GridItem, SimpleGrid } from '@chakra-ui/layout';
import { TitleHeading } from 'components/heading';
import { FlexLayout, StackLayout } from 'components/layouts';
import { Loading } from 'components/shared';
import { UserAvatarDetails } from 'components/shared/UserAvatar';
import { useGetIdeaQuery } from 'generated/graphql';
import { useCurrentUser } from 'hooks/auth';
import { useQueryParam } from 'hooks/util';
import { useRouter } from 'next/router';
import React from 'react';
import { formatDate } from 'utils/validators';
import IdeaActions from './components/IdeaActions';
import IdeaHighlights from './components/IdeaHighlights';
import IdeaMainContent from './components/IdeaMainContent';

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

	const { name, idea_user, user_id, created_at } = idea;
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
						<Divider orientation={'vertical'} mx={6} />
						<IdeaActions ideaId={idea?.id} />
					</React.Fragment>
				)}
			</FlexLayout>

			<TitleHeading label={name} />
			<Divider />
			<SimpleGrid columns={{ base: 1, md: 12 }} gap={4}>
				<GridItem
					colSpan={{ md: 8 }}
					gridRowGap={4}
					order={{ base: 2, md: 1 }}
				>
					<IdeaMainContent {...idea} />
				</GridItem>
				<GridItem colSpan={{ md: 4 }} order={{ base: 1, md: 2 }}>
					<IdeaHighlights {...idea} />
				</GridItem>
			</SimpleGrid>
		</StackLayout>
	);
};

export default IdeaTab;
