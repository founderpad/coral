import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import UserPersonalDetails from '../components/UserPersonalDetails';
import UserProfileTabLayout from './UserProfileTabLayout';

const ProfileLayout = () => (
	<Grid
		templateRows="repeat(1, 1fr)"
		templateColumns="repeat(12, 1fr)"
		template
		w={'full'}
		gridGap={6}
	>
		{/* <GridItem colSpan={{ md: 3 }} display={{ base: 'none', md: 'block' }}> */}
		<GridItem
			colSpan={{ base: 12, md: 4 }}
			display={{ base: 'none', md: 'block' }}
		>
			<UserPersonalDetails mb={8} />
		</GridItem>
		{/* <GridItem colSpan={{ base: 12, md: 9 }}> */}
		<GridItem colSpan={{ base: 12, md: 8 }}>
			<UserProfileTabLayout />
		</GridItem>
	</Grid>
);

export default ProfileLayout;
