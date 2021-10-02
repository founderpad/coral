import { Box } from '@chakra-ui/layout';
import React, { FC } from 'react';

const MainContainer: FC<{ children: React.ReactNode }> = ({
	children
}): JSX.Element => {
	return (
		<Box
			as={'main'}
			mx={{ base: 0, md: 'auto' }}
			w={{ base: 'full', xl: '120ch' }}
			bg={'white'}
			display={'flex'}
			flexDirection={'column'}
			flex={1}
			borderWidth={{ base: 0, lg: 1 }}
			borderColor={'fpLightGrey.300'}
			marginY={{ base: 0, lg: 6 }}
		>
			{children}
		</Box>
	);
};

export default MainContainer;
