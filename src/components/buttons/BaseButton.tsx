import { Button } from '@chakra-ui/button';
import { BaseLink } from '@components/links';
import React from 'react';
import { BaseButtonProps, LinkButtonProps } from './types/buttons';

export const BaseButton = (props: BaseButtonProps) => {
	const { children, size = 'sm', fontSize = 'small', name, ...rest } = props;

	return (
		<Button
			{...rest}
			size={size}
			aria-label={name}
			rounded={'md'}
			fontSize={fontSize}
			p={2}
			minW={'75px'}
		>
			{children}
		</Button>
	);
};

export const LinkButton = (props: LinkButtonProps) => {
	const { size, name, href, ...rest } = props;

	return (
		<Button
			{...rest}
			as={BaseLink}
			size={size}
			aria-label={name}
			href={href}
		/>
	);
};
