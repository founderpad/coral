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
			{/* <SubheadingText label={title} size={'sm'} /> */}
			<Label label={title} fontWeight={'semibold'} />
			<Label label={value} color={'gray.400'} />
		</StackLayout>
	);
};

export default ContentFieldAndValue;
