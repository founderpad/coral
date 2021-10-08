import React from 'react';
import { BaseLabel } from './BaseLabel';
import { TLabelProps } from './types';

export const Label = (props: TLabelProps): JSX.Element => (
	<BaseLabel
		{...props}
		fontSize={props.fontSize ?? 'sm'}
		color={props.color ?? 'fpGrey.900'}
	/>
);

export const CaptionLabel = (props: TLabelProps): JSX.Element => (
	<BaseLabel {...props} fontSize={'xs'} color={props.color ?? 'fpGrey.300'} />
);
