import { Text } from '@chakra-ui/layout';
import { FlexLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import React, { memo } from 'react';

const NoAccountFooter = memo(() => (
	<FlexLayout justifyContent="center" w="full" mt="auto" mx="auto">
		<Text color="gray.500" fontSize="xs">
			Don&apos;t have an account?
		</Text>
		&nbsp;
		<PrimaryLink
			href="/register"
			fontSize="xs"
			title="Link to register an account"
		>
			Create one here
		</PrimaryLink>
	</FlexLayout>
));

export default NoAccountFooter;
