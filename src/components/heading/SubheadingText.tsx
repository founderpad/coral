import React from 'react';
import BaseHeading from './BaseHeading';
import { THeadingProps } from './types';

export const SubheadingText = (props: THeadingProps): JSX.Element => (
	<BaseHeading {...props} size={'md'} color={'fpGrey.500'} />
);
