import React from 'react';
import BaseHeading from './BaseHeading';

export const TitleHeading = ({ label }: { label: string }) => (
	<BaseHeading size="md">{label}</BaseHeading>
);
