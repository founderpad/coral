import { Button } from '@chakra-ui/button';
import { LinkProps } from '@chakra-ui/layout';
import React from 'react';
import { BaseButtonProps } from 'types/buttons';

type Props = BaseButtonProps & Pick<LinkProps, 'href'>;

const BaseButton = (props: Props): JSX.Element => {
    const { label, size, rounded, ...rest } = props;

    return (
        <Button {...rest} size={size ?? 'sm'} rounded={rounded ?? 'sm'} aria-label={props.name}>
            {label}
        </Button>
    );
};

export default BaseButton;