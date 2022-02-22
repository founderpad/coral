import { Label } from '@components/labels';
import { StackLayout } from '@components/layouts';
import React from 'react';

interface Props {
	title?: string;
	value: any;
}

const ContentFieldAndValue = ({ title, value }: Props) => (
	<StackLayout spacing={1} wordBreak="break-all">
		{title && (
			<Label fontSize="small" as="h4" color="black" fontWeight="medium">
				{title}
			</Label>
		)}
		{typeof value === 'string' ? (
			<Label color="gray.500" fontSize="xs">
				{value}
			</Label>
		) : (
			value
		)}
	</StackLayout>
);

export default ContentFieldAndValue;
