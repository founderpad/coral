import { PageLayout } from '@components/layouts';
import { DocumentTitle } from '@components/shared';
import { useIdeaQuery } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import AuthFilter from '@utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import MessagesContainer from './MessagesContainer';

const Messages: NextPage = () => {
	const user = useCurrentUser();

	useIdeaQuery({
		variables: {
			id: useQueryParam('id'),
			userId: user?.id
		}
	});

	return (
		<React.Fragment>
			<DocumentTitle title="Messages" />
			<PageLayout
				title="Your messages"
				p={4}
				borderWidth={{ base: 0, lg: 1 }}
				borderColor="fpLightGrey.900"
			>
				<MessagesContainer />
			</PageLayout>
		</React.Fragment>
	);
};

export default AuthFilter(Messages);
