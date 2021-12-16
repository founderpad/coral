import { Label, SubLabel } from 'components/labels';
import { StackLayout } from 'components/layouts';
import React from 'react';

interface Props {
	title: string;
	value: string | number;
}

const ContentFieldAndValue = (props: Props): JSX.Element => (
	<StackLayout spacing={0}>
		<Label>{props.title}</Label>
		<SubLabel color={'gray.400'}>{props.value}</SubLabel>
	</StackLayout>
);

export default ContentFieldAndValue;
