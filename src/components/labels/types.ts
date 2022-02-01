import { TextProps } from '@chakra-ui/layout';
import { ColorProps } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

export type TLabelProps = TextProps & {
	// label: React.ReactNode;
	icon?: IconType;
	iconColor?: ColorProps['color'];
};
