import { HeadingProps } from '@chakra-ui/layout';
import { IconType } from 'react-icons/lib';

export type THeadingProps = HeadingProps & {
    label: string;
    icon?: IconType;
};