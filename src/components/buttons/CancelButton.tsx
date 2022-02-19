import { ButtonProps } from '@chakra-ui/button';
import React from 'react';
import { BaseButton } from '.';

export const CancelButton = ({
	label,
	...props
}: ButtonProps & { label: string; form?: string }) => {
	return (
		<BaseButton
			{...props}
			name={'cancel-button'}
			variant={'ghost'}
			color={'fpGrey.700'}
		>
			{label ?? 'Cancel'}
		</BaseButton>
	);
};
