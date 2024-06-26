import { FormLabel } from '@chakra-ui/react';
import React, { memo } from 'react';

export const FormLabelText = memo(({ label }: { label: string }) => (
	<FormLabel as="label" fontSize="xs" mb={1} color="black">
		{label}
	</FormLabel>
));

export default FormLabelText;
