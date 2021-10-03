import { Heading, HeadingProps } from '@chakra-ui/layout';
import React from 'react';

type BaseHeadingProps = HeadingProps & { label: string };

const BaseHeading = (props: BaseHeadingProps): JSX.Element => {
	const { label, color, size } = props;

	props.size;
	return (
		<Heading size={size ?? 'sm'} color={color ?? 'fpGrey.900'}>
			{label}
		</Heading>
	);
};

export default BaseHeading;
