import { Box, GridItem, Stack } from '@chakra-ui/react';
import SocialMediaDetails from './SocialMediaDetails';
import UserImageUploader from './UserImageUploader';

const UserProfileOverview = () => (
	<GridItem display={{ base: 'none', md: 'block' }} colSpan={3}>
		<Stack spacing={6}>
			<Box boxSize="145px" mb={6}>
				<UserImageUploader />
			</Box>

			<SocialMediaDetails />
		</Stack>
	</GridItem>
);

export default UserProfileOverview;
