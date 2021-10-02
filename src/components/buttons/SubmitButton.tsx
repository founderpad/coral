import { ButtonProps } from '@chakra-ui/button';
import { BaseButton } from 'components/buttons';
import React from 'react';

const SubmitButton = ({
	label = 'Submit',
	...props
}: ButtonProps & { label: string, form?: string }): JSX.Element => {
	const { colorScheme, isLoading } = props;

	return (
		<BaseButton
			{...props}
			colorScheme={colorScheme ?? 'fpPrimary'}
			isLoading={isLoading}
			type='submit'
			rounded={'md'}
			label={label}
			name='submit'
		/>
	);
};

export default SubmitButton;
