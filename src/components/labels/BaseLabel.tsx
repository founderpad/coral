import Icon from '@chakra-ui/icon';
import { Text } from '@chakra-ui/layout';
import React from 'react';
import { TLabelProps } from './types';

export const BaseLabel = (props: TLabelProps): JSX.Element => (
	<Text
		color={props.color ?? 'black'}
		fontSize={props.fontSize ?? 'sm'}
		fontWeight={props.fontWeight}
	>
		{props.icon && (
			<Icon as={props.icon} mr={2} fontSize={'md'} color={'fpGrey.900'} />
		)}
		{props.label}
	</Text>
);
