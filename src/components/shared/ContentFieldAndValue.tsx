import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import React from 'react';

interface Props {
	title: string;
	value: string | number;
}

const ContentFieldAndValue = (props: Props): JSX.Element => (
	<StackLayout spacing={0} wordBreak={'break-all'}>
		<Label mb={1}>{props.title}</Label>
		<Label color={'gray.400'}>{props.value}</Label>
	</StackLayout>
);

export default ContentFieldAndValue;
