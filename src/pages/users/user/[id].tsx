import { Grid, GridItem } from '@chakra-ui/layout';
import { PageLayout, StackLayout } from '@/components/layouts';
import { PageHtmlHead } from '@/components/shared';
import { useUserProfileDetailsQuery } from '@/generated/api';
import { useQueryParam } from '@/hooks/util';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import Actions from './components/Actions';
import UserProfileExperience from './components/UserProfileExperience';
import UserDetails from './components/UserDetails';
// import AddFollower from './components/AddFollower';

const User: NextPage = () => {
	const { data } = useUserProfileDetailsQuery({
		variables: {
			userId: useQueryParam('id')
		}
	});

	return (
		<>
			<PageHtmlHead
				title="View user"
				pageSlug={`/user/${useQueryParam('id')}`}
				description="View user."
			/>
			<PageLayout
				title={`${data?.user?.displayName}'s profile`}
				action={<Actions />}
			>
				<Grid
					templateRows="repeat(1, 1fr)"
					templateColumns="repeat(12, 1fr)"
					w="full"
					gridGap={6}
				>
					<GridItem colSpan={{ base: 12, md: 4 }}>
						<UserDetails {...data?.user} />
					</GridItem>
					<GridItem
						colSpan={{ base: 12, md: 8 }}
						as={StackLayout}
						spacing={6}
					>
						<UserProfileExperience {...data?.user?.profile} />
					</GridItem>
				</Grid>
			</PageLayout>
		</>
	);
};

export default AuthFilter(User);
