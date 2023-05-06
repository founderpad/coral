import { BaseButton } from '@/components/buttons';
import React from 'react';
import { BaseButtonProps } from './types/buttons';

export const SubmitButton = ({
	label = 'Submit',
	...props
}: BaseButtonProps & { form?: string; label?: string }) => {
	const {
		colorScheme = 'fpPrimary',
		// full = false,
		isLoading = false
	} = props;

	return (
		<BaseButton
			{...props}
			// full={full}
			colorScheme={colorScheme}
			isLoading={isLoading}
			type="submit"
		>
			{label}
		</BaseButton>
	);
};
