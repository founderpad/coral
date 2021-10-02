import { Grid } from '@chakra-ui/react';
import React from 'react';
import UserProfileDetails from '../components/UserProfileDetails';
import UserProfileOverview from '../components/UserProfileOverview';

const ProfileLayout = (): JSX.Element => {
	return (
		<Grid
			templateRows="repeat(1, 1fr)"
			templateColumns="repeat(12, 1fr)"
			template
			w={'full'}
		>
			<UserProfileOverview />
			<UserProfileDetails />
		</Grid>
	);
};

export default ProfileLayout;
