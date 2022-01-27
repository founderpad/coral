import { Flex, Text } from '@chakra-ui/layout';
import { PrimaryLink } from '@components/links';
import React, { memo } from 'react';

const NoAccountFooter = memo(() => (
	<Flex
		spacing={6}
		justifyContent={'center'}
		w={'full'}
		mt={'auto'}
		mx={'auto'}
	>
		<Text color={'gray.500'} fontSize={'xs'}>
			Don&apos;t have an account?
		</Text>
		&nbsp;
		<PrimaryLink
			href="/register"
			fontSize={'xs'}
			title={'Link to register an account'}
		>
			Create one here
		</PrimaryLink>
	</Flex>
));

export default NoAccountFooter;
