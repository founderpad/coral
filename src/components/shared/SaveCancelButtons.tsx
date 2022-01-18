import { ButtonGroup } from '@chakra-ui/react';
import { CancelButton, SubmitButton } from '@components/buttons';
import React from 'react';

const SaveCancelButtons = ({
	onCancel,
	form
}: {
	onCancel?: () => void;
	form?: string;
}) => {
	return (
		<ButtonGroup ml={'auto'} spacing={4}>
			<CancelButton label={'Cancel'} onClick={onCancel} />
			<SubmitButton name={`submit-button`} form={form} />
		</ButtonGroup>
	);
};

export default SaveCancelButtons;
