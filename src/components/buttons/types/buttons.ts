import { TRequiredProps } from './../../types';
import { ButtonProps } from "@chakra-ui/button";
import { LinkProps } from "next/link";

export type BaseButtonProps = ButtonProps & { label: string; full?: boolean } & TRequiredProps;
export type LinkButtonProps = BaseButtonProps & Pick<LinkProps, 'href'>;