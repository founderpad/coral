import React from 'react';
import { BaseLabel } from './BaseLabel';
import { TLabelProps } from './types';

export const Label = (props: TLabelProps): JSX.Element => (
	<BaseLabel {...props} fontSize={'sm'} color={'fpGrey.900'} />
);
