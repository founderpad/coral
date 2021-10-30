import { TextProps } from "@chakra-ui/layout";
import { IconType } from 'react-icons/lib';

export type TLabelProps = TextProps & {
	label: React.ReactNode;
	icon?: IconType;

};