import { Box, BoxProps } from '@chakra-ui/layout';
import React, { forwardRef } from 'react';

// export const BoxLayout = (props: BoxProps):  => (
// 	<Box {...props} d={'flex'} p={props.p ?? 4} rounded={'none'} />
// );

export const BoxLayout = forwardRef<HTMLDivElement, BoxProps>(
	(props: BoxProps, ref) => (
		<Box
			{...props}
			ref={ref}
			d={'flex'}
			p={props.p ?? 4}
			rounded={'none'}
		/>
	)
);
