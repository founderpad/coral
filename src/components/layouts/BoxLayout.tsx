import { Box, BoxProps } from '@chakra-ui/layout';
import React, { forwardRef } from 'react';

// export const BoxLayout = (props: BoxProps):  => (
// 	<Box {...props} display="flex"" p={props.p ?? 4} rounded="none" />
// );

export const BoxLayout = forwardRef<HTMLDivElement, BoxProps>(
	({ rounded = 'md', p = 4, ...rest }: BoxProps, ref) => (
		<Box {...rest} ref={ref} display="flex" p={p} rounded={rounded} />
	)
);
