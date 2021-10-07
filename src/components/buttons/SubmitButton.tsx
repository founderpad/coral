import { BaseButton } from 'components/buttons';
import React from 'react';
import { BaseButtonProps } from './types/buttons';

export const SubmitButton = ({
	label = 'Submit',
	...props
}: BaseButtonProps & { form?: string }): JSX.Element => {
	const { colorScheme, full, isLoading } = props;

	return (
		<BaseButton
			{...props}
			isFullWidth={full}
			colorScheme={colorScheme ?? 'fpPrimary'}
			isLoading={isLoading}
			type={'submit'}
			rounded={'md'}
			label={label}
		/>
	);
};
