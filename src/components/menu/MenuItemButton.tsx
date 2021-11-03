import { MenuItem, MenuItemProps } from '@chakra-ui/menu';
import { Label } from 'components/labels';
import React from 'react';

export type BaseMenuItemProps = Pick<MenuItemProps, 'color' | 'onClick'> & {
	title: string;
	subTitle?: string;
	divider?: boolean;
};

export const MenuItemButton = ({
	title,
	subTitle,
	color = 'black',
	...rest
}: BaseMenuItemProps): JSX.Element => (
	<MenuItem
		{...rest}
		flexDirection={'column'}
		alignItems={'flex-start'}
		p={1}
	>
		<Label fontWeight={'medium'} fontSize={'smaller'} color={color}>
			{title}
		</Label>
		<Label fontSize={'smaller'} color={'gray.400'}>
			{subTitle}
		</Label>
	</MenuItem>
);
