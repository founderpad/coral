import React, { memo } from 'react';
import { FormLabel } from '@chakra-ui/react'

export const FormLabelText = memo(({ label }: { label: string }) => (
    <FormLabel
        as={'label'}
        fontSize={'sm'}
        color={'gray.600'}
        mb={'1px'}
    >
        {label}
    </FormLabel>
));

export default FormLabelText;
