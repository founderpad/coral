import { Button } from '@chakra-ui/button';
import React from 'react';
import { BaseButtonProps } from './types/buttons';

const BaseButton = (props: BaseButtonProps): JSX.Element => {
	const { label, size, ...rest } = props;

	return (
		<Button
			{...rest}
			size={size ?? 'sm'}
			rounded={'md'}
			aria-label={props.name}
		>
			{label}
		</Button>
	);
};

export default BaseButton;
