import { FormErrorMessage } from '@chakra-ui/react';
import React, { memo } from 'react';

export const FormErrorText = memo(({ label }: { label: React.ReactNode }) => (
    <FormErrorMessage
        alignItems={'flex-start'} mt={'1px'}
    >
        {label}
    </FormErrorMessage>
));

export default FormErrorText;