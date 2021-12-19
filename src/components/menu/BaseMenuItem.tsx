import Icon from '@chakra-ui/icon';
import { Divider } from '@chakra-ui/layout';
import { MenuItem, MenuItemProps } from '@chakra-ui/react';
import { Label } from 'components/labels';
import React from 'react';
import { IconType } from 'react-icons';

export type BaseMenuItemProps = Pick<MenuItemProps, 'color' | 'onClick'> & {
	title: string;
	subTitle?: string;
	divider?: boolean;
	icon?: IconType;
};

export const BaseMenuItem = ({
	title,
	subTitle,
	color = 'black',
	icon,
	divider = false,
	...rest
}: BaseMenuItemProps): JSX.Element => (
	<React.Fragment>
		<MenuItem
			{...rest}
			alignItems={'center'}
			icon={icon && <Icon as={icon} />}
		>
			<Label fontWeight={'medium'} fontSize={'small'} color={color}>
				{title}
			</Label>
			<Label fontSize={'xs'} color={'gray.400'}>
				{subTitle}
			</Label>
		</MenuItem>
		{divider && <Divider />}
	</React.Fragment>
);
