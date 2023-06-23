import { Grid, GridItem } from '@chakra-ui/layout';
import { PageLayout, StackLayout } from '@/components/layouts';
import { Loading, PageHtmlHead } from '@/components/shared';
import { useQueryParam } from '@/hooks/util';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import Actions from './components/Actions';
import UserProfileExperience from './components/UserProfileExperience';
import UserDetails from './components/UserDetails';
import { useUser } from './hooks/useUser';
// import AddFollower from './components/AddFollower';

const User: NextPage = () => {
	const { data, loading } = useUser();
	const userId = useQueryParam('id');

	if (!data && loading) return <Loading />;

	return (
		<>
			<PageHtmlHead
				title="View user"
				pageSlug={`/user/${userId}`}
				description="View user."
			/>
			<PageLayout
				title={`${data?.displayName}'s profile`}
				action={<Actions />}
			>
				<Grid
					templateRows="repeat(1, 1fr)"
					templateColumns="repeat(12, 1fr)"
					w="full"
					gridGap={6}
				>
					<GridItem colSpan={{ base: 12, md: 4 }}>
						<UserDetails {...data} />
					</GridItem>
					<GridItem
						colSpan={{ base: 12, md: 8 }}
						as={StackLayout}
						spacing={6}
					>
						<UserProfileExperience {...data?.profile} />
					</GridItem>
				</Grid>
			</PageLayout>
		</>
	);
};

export default AuthFilter(User);
