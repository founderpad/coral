import BaseHeading from 'components/heading/BaseHeading';
import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import React from 'react';

interface Props {
	title: string;
	value: string | number;
}

const ContentFieldAndValue = (props: Props): JSX.Element => (
	<StackLayout spacing={0} wordBreak={'break-all'}>
		<BaseHeading fontSize={'sm'} as={'h4'} color={'gray.900'}>
			{props.title}
		</BaseHeading>
		<Label color={'gray.600'} fontSize={'sm'}>
			{props.value}
		</Label>
	</StackLayout>
);

export default ContentFieldAndValue;
