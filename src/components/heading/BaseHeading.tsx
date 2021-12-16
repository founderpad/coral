import Icon from '@chakra-ui/icon';
import { Heading, HeadingProps } from '@chakra-ui/layout';
import React from 'react';
import { IconType } from 'react-icons';

type BaseHeadingProps = HeadingProps & {
	label: string | number;
	icon?: IconType;
};

const BaseHeading = (props: BaseHeadingProps): JSX.Element => {
	const { label, color, size, icon } = props;

	return (
		<Heading
			size={size ?? 'md'}
			color={color ?? 'black'}
			alignItems={'center'}
			d={'flex'}
		>
			{icon && <Icon as={icon} mr={2} />}
			{label}
		</Heading>
	);
};

export default BaseHeading;
