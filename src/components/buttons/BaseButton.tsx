import { Button } from '@chakra-ui/button';
import { BaseLink } from 'components/links';
import React from 'react';
import { BaseButtonProps, LinkButtonProps } from './types/buttons';

export const BaseButton = (props: BaseButtonProps): JSX.Element => {
	const { label, size, name, ...rest } = props;

	return (
		<Button {...rest} size={size ?? 'sm'} rounded={'md'} aria-label={name}>
			{label}
		</Button>
	);
};

export const LinkButton = (props: LinkButtonProps): JSX.Element => {
	const { label, size, name, href, ...rest } = props;

	return (
		<Button
			{...rest}
			as={BaseLink}
			size={size ?? 'sm'}
			rounded={'md'}
			aria-label={name}
			href={href}
		>
			{label}
		</Button>
	);
};
