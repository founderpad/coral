import { Stack, StackProps } from '@chakra-ui/layout';
import React from 'react';

const StackLayout = (props: StackProps): JSX.Element => {
	const { children, spacing, ...rest } = props;

	return (
		<Stack {...rest} rounded={'md'} bg={'white'} spacing={spacing ?? 6}>
			{children}
		</Stack>
	);
};

export default StackLayout;
