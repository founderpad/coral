import { ButtonProps } from "@chakra-ui/button";
import { LinkProps } from '@chakra-ui/layout';
import { TRequiredProps } from './../../types';

export type BaseButtonProps = ButtonProps & { full?: boolean } & TRequiredProps;
export type LinkButtonProps = BaseButtonProps & LinkProps;