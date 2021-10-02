import { LinkProps } from '@chakra-ui/react';
import React from 'react';
import { BaseLink } from '.';

export const PrimaryLink = (props: LinkProps & { title: string }): JSX.Element => (
    <BaseLink
        {...props}
        color={'fpPrimary.500'}
        _hover={{ color: 'fpPrimary.900' }}
    />
);

export default PrimaryLink;