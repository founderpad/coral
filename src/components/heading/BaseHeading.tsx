import Icon from '@chakra-ui/icon';
import { Heading, HeadingProps } from '@chakra-ui/layout';
import React from 'react';
import { IconType } from 'react-icons';

type BaseHeadingProps = HeadingProps & {
	icon?: IconType;
};

const BaseHeading = (props: BaseHeadingProps) => {
	const { children, color, size = 'md', icon } = props;

	return (
		<Heading
			{...props}
			size={size}
			color={color ?? 'black'}
			alignItems="center"
			mb={1}
		>
			{icon && <Icon as={icon} mr={2} />}
			{children}
		</Heading>
	);
};

export default BaseHeading;
