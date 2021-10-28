import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import React from 'react';

interface Props {
	title: string;
	value: string | number;
}

const ContentFieldAndValue = (props: Props): JSX.Element => {
	const { title, value } = props;
	return (
		<StackLayout spacing={2}>
			<Label label={title} fontWeight={'medium'} fontSize={'sm'} />
			<Label label={value} color={'gray.400'} />
		</StackLayout>
	);
};

export default ContentFieldAndValue;
