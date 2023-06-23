import Icon from '@chakra-ui/icon';
import { Box, Heading } from '@chakra-ui/layout';
import { IoLockClosedSharp } from '@/components/icons';
import MainMentorLayout from '@/components/layouts/MainMentorLayout';
import AuthFilter from '@/utils/AuthFilter';
import React from 'react';

const Investor = () => {
	return (
		<MainMentorLayout>
			<Box
				display="flex"
				flex={1}
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Box
					display="flex"
					flex={1}
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
				>
					<Icon
						as={IoLockClosedSharp}
						fontSize="xx-large"
						color="gray.500"
						mb={4}
					/>
					<Heading color="gray.500" fontSize="lg">
						Mentor network coming soon
					</Heading>
				</Box>
			</Box>
		</MainMentorLayout>
	);
};

export default AuthFilter(Investor);
