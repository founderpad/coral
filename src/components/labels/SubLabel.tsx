import React from 'react';
import { BaseLabel } from './BaseLabel';
import { TLabelProps } from './types';

export const SubLabel = (props: TLabelProps): JSX.Element => (
	<BaseLabel {...props} fontSize={'sm'} />
);
