import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import React from 'react';

interface Props {
	title: string;
	value: string | number;
}

const ContentFieldAndValue = (props: Props): JSX.Element => (
	<StackLayout spacing={1}>
		<Label label={props.title} fontWeight={'medium'} fontSize={'sm'} />
		<Label label={props.value} color={'gray.400'} />
	</StackLayout>
);

export default ContentFieldAndValue;
