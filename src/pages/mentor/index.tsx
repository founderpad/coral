import Icon from '@chakra-ui/icon';
import { Box, Heading } from '@chakra-ui/layout';
import { IoLockClosedSharp } from 'components/icons';
import MainMentorLayout from 'components/layouts/MainMentorLayout';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const Investor = () => {
	return (
		<MainMentorLayout>
			<Box
				d={'flex'}
				flex={1}
				justifyContent={'center'}
				alignItems={'center'}
				flexDirection={'column'}
			>
				<Icon
					as={IoLockClosedSharp}
					color={'goldenrod'}
					fontSize={'xxx-large'}
				/>
				<Heading color={'gray.400'} mt={6}>
					Mentor network coming soon
				</Heading>
			</Box>
		</MainMentorLayout>
	);
};

export default AuthFilter(Investor);
