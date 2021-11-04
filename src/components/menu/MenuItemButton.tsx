import Icon from '@chakra-ui/icon';
import { MenuItem, MenuItemProps } from '@chakra-ui/menu';
import { Label } from 'components/labels';
import React from 'react';
import { IconType } from 'react-icons';

export type BaseMenuItemProps = Pick<MenuItemProps, 'color' | 'onClick'> & {
	title: string;
	subTitle?: string;
	divider?: boolean;
	icon?: IconType;
};

export const MenuItemButton = ({
	title,
	subTitle,
	color = 'black',
	icon,
	...rest
}: BaseMenuItemProps): JSX.Element => (
	<MenuItem {...rest} alignItems={'center'} icon={icon && <Icon as={icon} />}>
		<Label fontWeight={'medium'} fontSize={'smaller'} color={color}>
			{title}
		</Label>
		<Label fontSize={'smaller'} color={'gray.400'}>
			{subTitle}
		</Label>
	</MenuItem>
);
