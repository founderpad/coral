import { Label } from '@components/labels';
import { StackLayout } from '@components/layouts';
import React from 'react';

interface Props {
	title?: string;
	value: any;
}

const ContentFieldAndValue = ({ title, value = 'Not set' }: Props) => (
	<StackLayout spacing={1} wordBreak={'break-all'}>
		{title && (
			<Label
				fontSize={'small'}
				as={'h4'}
				color={'black'}
				fontWeight={'medium'}
			>
				{title}
			</Label>
		)}
		<Label color={'gray.500'} fontSize={'xs'}>
			{value}
		</Label>
	</StackLayout>
);

export default ContentFieldAndValue;
