import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import React from 'react';

interface Props {
	title: string;
	value: string | number;
}

const ContentFieldAndValue = (props: Props): JSX.Element => (
	<StackLayout spacing={1}>
		<Label fontWeight={'medium'} fontSize={'sm'}>
			{props.title}
		</Label>
		<Label color={'gray.500'}>{props.value}</Label>
	</StackLayout>
);

export default ContentFieldAndValue;
