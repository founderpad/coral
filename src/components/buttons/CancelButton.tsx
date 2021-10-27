import { ButtonProps } from '@chakra-ui/button';
import React from 'react';
import { BaseButton } from '.';

export const CancelButton = ({
	label,
	...props
}: ButtonProps & { label: string; form?: string }): JSX.Element => {
	return (
		<BaseButton
			{...props}
			name={'cancel-button'}
			variant={'outline'}
			color={'black'}
		>
			{label ?? 'Cancel'}
		</BaseButton>
	);
};
