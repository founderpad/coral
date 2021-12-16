import React from 'react';
import { BaseLabel } from './BaseLabel';
import { TLabelProps } from './types';

export const CaptionLabel = (props: TLabelProps): JSX.Element => (
	<BaseLabel {...props} fontSize={'x-small'} color={'gray.400'} />
);
