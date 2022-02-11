import React from 'react';
import { BaseLabel } from './BaseLabel';
import { TLabelProps } from './types';

export const CaptionLabel = (props: TLabelProps) => (
	<BaseLabel
		{...props}
		fontSize={'x-small'}
		color={props.color ?? 'fpGrey.400'}
	/>
);
