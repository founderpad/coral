import React, { memo } from 'react';
import { FormHelperText as HelperText } from '@chakra-ui/react';

export const FormHelperText = memo(({ label }: { label: string }) => (
    <HelperText
        textAlign={'end'}
        color={'gray.400'}
        mt={'1px'}
    >
        {label}
    </HelperText>
));

export default FormHelperText;
