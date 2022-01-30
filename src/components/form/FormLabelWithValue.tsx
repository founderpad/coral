import { FormControl } from '@chakra-ui/form-control';
import { Text } from '@chakra-ui/layout';
import React from 'react';
import FormLabelText from './FormLabelText';

export const FormLabelWithValue = ({
	label,
	value
}: {
	label: string;
	value: string;
}) => (
	<FormControl>
		<FormLabelText label={label} />
		<Text>{value}</Text>
	</FormControl>
);

export default FormLabelWithValue;
