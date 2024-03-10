import {
	Box,
	BoxProps,
	Divider,
	DividerProps,
	ResponsiveValue
} from '@chakra-ui/react';
import React from 'react';

export const PointSeparator = ({
	color = 'fpGrey.700',
	display = 'block',
	small,
	px
}: {
	color?: string;
	display?: ResponsiveValue<string>;
	small?: boolean;
	px?: BoxProps['px'];
}) => (
	<Box as="span" px={px ?? 1} display={display} color={color}>
		{small ? <>&middot;</> : <>&bull;</>}
	</Box>
);

export const LineSeparator = (props?: DividerProps) => (
	<Divider {...props} orientation="vertical" />
);
