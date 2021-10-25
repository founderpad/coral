import { Stack } from '@chakra-ui/layout';
import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import SocialMediaDetails from './SocialMediaDetails';
import UserImageUploader from './UserImageUploader';
import UserPersonalDetails from './UserPersonalDetails';

const AboutTab = (): JSX.Element => {
	return (
		<Stack spacing={6} display={{ base: 'block', md: 'none' }} flex={1}>
			<Stack
				spacing={{ base: 4, sm: 6 }}
				direction={{ base: 'column', sm: 'row' }}
				alignItems={'flex-start'}
			>
				<Box boxSize={'150px'} mb={6}>
					<UserImageUploader />
				</Box>
				<UserPersonalDetails
					mb={8}
					display={{ base: 'flex', md: 'none' }}
				/>
			</Stack>

			<Divider />

			<SocialMediaDetails />
		</Stack>
	);
};

export default AboutTab;
