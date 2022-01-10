import {
	Box,
	BoxProps,
	Divider,
	DividerProps,
	ResponsiveValue
} from '@chakra-ui/react';
import React from 'react';

export const PointSeparator = ({
	color,
	display,
	small,
	px
}: {
	color?: string;
	display?: ResponsiveValue<string>;
	small?: boolean;
	px?: BoxProps['px'];
}) => (
	<Box
		as={'span'}
		px={px ?? 1}
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
