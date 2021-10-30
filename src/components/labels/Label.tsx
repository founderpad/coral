import React from 'react';
import { BaseLabel } from './BaseLabel';
import { TLabelProps } from './types';

export const Label = (props: TLabelProps): JSX.Element => (
	<BaseLabel
		{...props}
		fontSize={props.fontSize ?? 'sm'}
		color={props.color ?? 'black'}
	/>
);

export const CaptionLabel = (props: TLabelProps): JSX.Element => (
	<BaseLabel {...props} fontSize={'xs'} color={props.color ?? 'gray.400'} />
);
