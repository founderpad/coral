import { TextProps } from "@chakra-ui/layout";
import { IconType } from 'react-icons/lib';

export type TLabelProps = Pick<TextProps, 'color' | 'fontSize' | 'fontWeight'> & {
	label: string;
	icon?: IconType
};