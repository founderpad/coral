import { Box, BoxProps } from '@chakra-ui/layout';
import React from 'react';

export const BoxLayout = (props: BoxProps): JSX.Element => (
	<Box {...props} d={'flex'} p={props.p ?? 4} rounded={'md'} />
);
