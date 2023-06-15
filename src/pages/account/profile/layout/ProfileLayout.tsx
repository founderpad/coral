import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import UserPersonalDetails from '../components/UserPersonalDetails';
import UserProfileTabLayout from './UserProfileTabLayout';

const ProfileLayout = () => (
	<Grid
		templateRows="repeat(1, 1fr)"
		templateColumns="repeat(12, 1fr)"
		w="full"
		gridGap={6}
	>
		<GridItem
			colSpan={{ base: 12, md: 4 }}
			display={{ base: 'none', md: 'block' }}
		>
			<UserPersonalDetails mb={8} />
		</GridItem>
		<GridItem colSpan={{ base: 12, md: 8 }}>
			<UserProfileTabLayout />
		</GridItem>
	</Grid>
);

export default ProfileLayout;
