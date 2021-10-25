import { GridItem } from '@chakra-ui/react';
import UserProfileTabLayout from '../layout/UserProfileTabLayout';
import UserPersonalDetails from './UserPersonalDetails';

const UserProfileDetails = (): JSX.Element => {
	return (
		<GridItem colSpan={{ base: 12, md: 9 }}>
			<UserPersonalDetails
				mb={8}
				display={{ base: 'none', md: 'flex' }}
			/>

			<UserProfileTabLayout />
		</GridItem>
	);
};

export default UserProfileDetails;
