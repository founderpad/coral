import { Stack, StackProps } from '@chakra-ui/layout';
import React from 'react';

export const StackLayout = ({
	...props
}: StackProps & { full?: boolean }): JSX.Element => {
	const { children, spacing, ...rest } = props;

	return (
		<Stack {...rest} rounded={'md'} spacing={spacing ?? 6}>
			{children}
		</Stack>
	);
};
