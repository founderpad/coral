import React from 'react';
import { BaseLabel } from './BaseLabel';
import { TLabelProps } from './types';

export const Label = ({
	fontSize = 'sm',
	color = 'black',
	...rest
}: TLabelProps): JSX.Element => (
	<BaseLabel {...rest} fontSize={fontSize} color={color} />
);

export const CaptionLabel = ({
	color = 'gray.400',
	...rest
}: TLabelProps): JSX.Element => (
	<BaseLabel {...rest} fontSize={'xs'} color={color} />
);
