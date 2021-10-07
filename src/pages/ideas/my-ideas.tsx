import { Stack, Text } from '@chakra-ui/layout';
import DocumentTitle from 'components/shared/DocumentTitle';
import PageHeader from 'components/shared/PageHeader';
import { useCurrentUser } from 'hooks/auth';
import { useGetUserIdeas } from 'hooks/ideas';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const MyIdeas = (): JSX.Element => {
	const user = useCurrentUser();
	const { data } = useGetUserIdeas(user?.id);

	return (
		<React.Fragment>
			<DocumentTitle title="Your ideas" />
			<PageHeader
				title="My ideas"
				subtitle="Here are all the ideas below that you have published"
			/>
			<Text color={'fpGrey.700'}>
				You have published <b>{data?.length} ideas.</b>
			</Text>
			<Stack my={4} spacing={4}>
				{/* {loading ? (
					<Spinner
						display={'flex'}
						alignSelf={'center'}
						justifySelf={'center'}
					/>
				) : (
					data?.map((idea) => (
						// <IdeaCard key={idea.id} idea={idea} edit={true} />
						<IdeaCard key={idea.id} idea={idea} />
					))
				)} */}
			</Stack>
		</React.Fragment>
	);
};

export default AuthFilter(MyIdeas);
