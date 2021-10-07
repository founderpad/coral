import { TRequiredProps } from './../../types';
import { ButtonProps } from "@chakra-ui/button";
import { LinkProps } from '@chakra-ui/layout';

export type BaseButtonProps = ButtonProps & { label: React.ReactNode; full?: boolean } & TRequiredProps;
export type LinkButtonProps = BaseButtonProps & LinkProps;