import { BaseButton } from '@components/buttons';
import React from 'react';
import { BaseButtonProps } from './types/buttons';

export const SubmitButton = ({
	label = 'Submit',
	...props
}: BaseButtonProps & { form?: string; label?: string }) => {
	const { colorScheme, full, isLoading } = props;

	return (
		<BaseButton
			{...props}
			isFullWidth={full}
			colorScheme={colorScheme ?? 'fpPrimary'}
			isLoading={isLoading}
			type={'submit'}
		>
			{label}
		</BaseButton>
	);
};
