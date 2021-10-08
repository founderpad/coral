import React from 'react';
import BaseHeading from './BaseHeading';

export const TitleHeading = ({ label }: { label: string }): JSX.Element => (
	<BaseHeading label={label} size={'md'} />
);
