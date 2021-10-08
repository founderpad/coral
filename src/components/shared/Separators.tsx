import { Box, BoxProps, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

// const PointSeparator = (): any => (
// 	<Box as={'span'} px={2} color={'fpGrey.700'}>
// 		&middot;
// 	</Box>
// );

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
		mx={'3px'}
		display={display ?? 'block'}
		color={color ?? 'fpGrey.200'}
	>
		{small ? <>&middot;</> : <>&bull;</>}
	</Box>
);

export const LineSeparator = (props: BoxProps): JSX.Element => (
	<Box {...props} as={'hr'} />
);
