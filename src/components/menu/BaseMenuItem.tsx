import Icon from '@chakra-ui/icon';
import { Divider } from '@chakra-ui/layout';
import { MenuItem, MenuItemProps } from '@chakra-ui/react';
import { Label } from '@components/labels';
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
}: BaseMenuItemProps) => (
	<React.Fragment>
		<MenuItem
			{...rest}
			alignItems="center"
			icon={icon && <Icon as={icon} mr="1px" color="fpGrey.500" />}
		>
			<Label fontWeight="medium" fontSize="xs" color={color}>
				{title}
			</Label>
			<Label fontSize="xs" color="fpGrey.300">
				{subTitle}
			</Label>
		</MenuItem>
		{divider && <Divider />}
	</React.Fragment>
);
