import { Box, Divider, DividerProps, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

export const PointSeparator = ({
	color,
	display,
	small
}: {
	color?: string;
	display?: ResponsiveValue<string>;
	small?: boolean;
}): JSX.Element => (
	<Box
		as={'span'}
		mx={1}
		display={display ?? 'block'}
		color={color ?? 'gray.400'}
	>
		{small ? <>&middot;</> : <>&bull;</>}
	</Box>
);

export const LineSeparator = (props?: DividerProps): JSX.Element => (
	// <Box {...props} as={'hr'} />
	<Divider {...props} orientation={'vertical'} />
);
