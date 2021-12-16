import { useBreakpointValue } from '@chakra-ui/media-query';
import React from 'react';
import BaseHeading from './BaseHeading';
import { THeadingProps } from './types';

export const SubheadingText = (props: THeadingProps): JSX.Element => {
	const size = useBreakpointValue({ base: 'sm', md: 'md' });

	return (
		<BaseHeading
			{...props}
			as={'h1'}
			size={props.size ?? size}
			color={props.color ?? 'gray.700'}
		/>
	);
};
