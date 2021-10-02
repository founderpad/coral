import { Box, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

// const PointSeparator = (): any => (
// 	<Box as={'span'} px={2} color={'fpGrey.700'}>
// 		&middot;
// 	</Box>
// );

const PointSeparator = ({
	color,
	display,
	small
}: {
	color?: string;
	display?: ResponsiveValue<string>;
	small?: boolean;
}): JSX.Element => (
	// <Box
	// 	rounded={'full'}
	// 	height={1}
	// 	width={1}
	// 	background={color ?? 'fpGrey.200'}
	// 	display={display ?? 'block'}
	// 	mx={'6px'}
	// />
	// <Box
	// 	as={'span'}
	// 	mx={1}
	// 	display={display ?? 'block'}
	// 	color={color ?? 'fpGrey.200'}
	// >
	// 	&middot;
	// </Box>
	<Box
		as={'span'}
		mx={'3px'}
		display={display ?? 'block'}
		color={color ?? 'fpGrey.100'}
	>
		{small ? <>&middot;</> : <>&bull;</>}
	</Box>
);

export { PointSeparator };
