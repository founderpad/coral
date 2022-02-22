import React from 'react';
import { BaseLabel } from './BaseLabel';
import { TLabelProps } from './types';

export const CaptionLabel = ({
	color = 'fpGrey.400',
	...rest
}: TLabelProps) => <BaseLabel {...rest} fontSize="x-small" color={color} />;
