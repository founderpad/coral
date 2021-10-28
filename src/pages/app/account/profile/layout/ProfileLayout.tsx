import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import UserPersonalDetails from '../components/UserPersonalDetails';
import UserProfileTabLayout from './UserProfileTabLayout';

const ProfileLayout = (): JSX.Element => (
	<Grid
		templateRows="repeat(1, 1fr)"
		templateColumns="repeat(12, 1fr)"
		template
		w={'full'}
	>
		<GridItem colSpan={{ md: 3 }} display={{ base: 'none', md: 'block' }}>
			<UserPersonalDetails mb={8} />
		</GridItem>
		<GridItem colSpan={{ base: 12, md: 9 }}>
			<UserProfileTabLayout />
		</GridItem>
	</Grid>
);

export default ProfileLayout;
