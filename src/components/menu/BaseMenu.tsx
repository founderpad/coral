import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Menu, MenuButton, MenuDivider, MenuList } from '@chakra-ui/menu';
import React from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BaseMenuItemProps, MenuItemButton } from './MenuItemButton';

export const BaseMenu = ({
	options
}: {
	options: BaseMenuItemProps[];
}): JSX.Element => (
	<Menu>
		<MenuButton
			p={1}
			as={Button}
			cursor={'pointer'}
			bg={'transparent'}
			rounded={'full'}
			size={'sm'}
		>
			<Icon as={IoEllipsisVertical} color={'gray.500'} />
		</MenuButton>
		<MenuList rounded={'none'} textAlign={'start'}>
			{options?.map((option, key) => (
				<React.Fragment key={key}>
					<MenuItemButton {...option} />
					{option.divider && <MenuDivider my={0} />}
				</React.Fragment>
			))}
		</MenuList>
	</Menu>
);

export default BaseMenu;
