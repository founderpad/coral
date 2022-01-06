import React from 'react';
import { BaseLabel } from './BaseLabel';
import { TLabelProps } from './types';

export const Label = ({
	fontSize = 'sm',
	...rest
}: TLabelProps): JSX.Element => <BaseLabel {...rest} fontSize={fontSize} />;

export const CaptionLabel = ({
	color = 'gray.400',
	...rest
}: TLabelProps): JSX.Element => (
	<BaseLabel {...rest} fontSize={'x-small'} color={color} />
);
