import Icon from '@chakra-ui/icon';
import { Text } from '@chakra-ui/layout';
import React from 'react';
import { TLabelProps } from './types';

export const BaseLabel = ({
	color = 'black',
	fontSize = 'sm',
	children,
	icon,
	...rest
}: TLabelProps): JSX.Element => (
	<Text {...rest} color={color} fontSize={fontSize}>
		{icon && <Icon as={icon} mr={2} fontSize={'md'} color={'gray.900'} />}
		{children}
	</Text>
);
