import { Box, BoxProps } from '@chakra-ui/layout';
import React, { forwardRef } from 'react';

const BoxLayout = forwardRef<HTMLDivElement, BoxProps>(
	({ rounded = 'md', display = 'block', p = 4, ...rest }: BoxProps, ref) => (
		<Box ref={ref} display={display} p={p} rounded={rounded} {...rest} />
	)
);

export default BoxLayout;
