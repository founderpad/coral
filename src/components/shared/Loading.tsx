import { Flex } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

export const Loading = ({ small }: { small?: boolean }): JSX.Element => (
	<Flex flex={1} h={'full'} justifyContent={'center'}>
		<Spinner
			display={'flex'}
			alignSelf={'center'}
			justifySelf={'center'}
			color={'fpPrimary.500'}
			size={small ? 'md' : 'xl'}
		/>
	</Flex>
);
