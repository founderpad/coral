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
	...rest
}: BaseMenuItemProps): JSX.Element => (
	<MenuItem {...rest} flexDirection={'column'} alignItems={'flex-start'}>
		<Label label={title} fontWeight={'medium'} fontSize={'sm'} />
		<Label
			fontSize={'smaller'}
			color={rest.color ?? 'gray.400'}
			label={subTitle}
		/>
	</MenuItem>
);
