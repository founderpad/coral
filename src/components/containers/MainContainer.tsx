import { Box } from '@chakra-ui/layout';
import React, { FC } from 'react';

const MainContainer: FC<{ children: React.ReactNode }> = ({
	children
}): JSX.Element => (
	<Box
		as={'main'}
		mx={{ base: 0, md: 'auto' }}
		w={{ base: 'full', xl: '120ch' }}
		bg={'white'}
		display={'flex'}
		flexDirection={'column'}
		flex={1}
		borderWidth={{ base: 0, lg: 1 }}
		borderColor={'gray.100'}
		marginY={{ base: 0, lg: 6 }}
		overflowY={'hidden'}
		position={'relative'}
	>
		{children}
	</Box>
);

export default MainContainer;
