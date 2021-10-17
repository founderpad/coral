import { SubheadingText } from 'components/heading';
import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import React from 'react';

type Props = {
	title: string;
	value: string | number;
};

const ContentFieldAndValue = (props: Props): JSX.Element => {
	const { title, value } = props;
	return (
		<StackLayout spacing={2}>
			<SubheadingText label={title} color={'fpGrey.900'} size={'sm'} />
			<Label label={value} color={'fpGrey.300'} />
		</StackLayout>
	);
};

export default ContentFieldAndValue;
