import { FormErrorMessage } from '@chakra-ui/react';
import React, { memo } from 'react';

export const FormErrorText = memo(({ label }: { label: React.ReactNode }) => (
	<FormErrorMessage mt={2} fontSize="xs" name="form-error">
		{label}
	</FormErrorMessage>
));

export default FormErrorText;
