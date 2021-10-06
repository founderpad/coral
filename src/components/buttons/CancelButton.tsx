import { ButtonProps } from '@chakra-ui/button';
import React from 'react';
import { BaseButton } from '.';

const CancelButton = ({
	label,
	...props
}: ButtonProps & { label: string; form?: string }): JSX.Element => {
	// const { size } = props;

	return (
		<BaseButton
			{...props}
			name={'cancel-button'}
			colorScheme={'gray'}
			label={label ?? 'Cancel'}
			// size={size ?? 'sm'}
			rounded={'md'}
		/>
	);
};

export default CancelButton;
