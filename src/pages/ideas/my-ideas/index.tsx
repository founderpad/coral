import { PageLayout } from '@components/layouts';
import { DocumentTitle } from '@components/shared';
import AuthFilter from '@utils/AuthFilter';
import React from 'react';
import MyIdeasContainer from './MyIdeasContainer';

const MyIdeas = (): JSX.Element => {
	// const user = useCurrentUser();
	// const { data } = useGetUserIdeas(user?.id);
	return (
		<React.Fragment>
			<DocumentTitle title="My ideas" />
			<PageLayout
				title="My ideas"
				subtitle="Here are all the ideas below that you have created"
			>
				<MyIdeasContainer />
			</PageLayout>
		</React.Fragment>
	);
};

// export const getServerSideProps = async (): Promise<any> => {
// 	const data = await client.query({
// 		query: GET_USER_IDEAS,
// 		variables: {
// 			userId: useClaim()
// 		}
// 	});
// 	return {
// 		props: {
// 			data
// 		}
// 	};
// };

export default AuthFilter(MyIdeas);
