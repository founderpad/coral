import { Text } from '@chakra-ui/layout';
import { MenuItem, MenuItemProps } from '@chakra-ui/menu';
import React from 'react';

export type BaseMenuItemProps = Pick<MenuItemProps, 'color' | 'onClick'> & {
	title: string;
	subTitle?: string;
	divider?: boolean;
};

export const MenuItemButton = ({
	title,
	subTitle,
	...rest
}: BaseMenuItemProps): JSX.Element => (
	<MenuItem {...rest} flexDirection={'column'} alignItems={'flex-start'}>
		<Text>{title}</Text>
		<Text fontSize={'sm'} color={'fpGrey.300'}>
			{subTitle}
		</Text>
	</MenuItem>
);
