import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { BoxProps } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuDivider, MenuList } from '@chakra-ui/menu';
import { BoxLayout } from 'components/layouts';
import React from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BaseMenuItemProps, MenuItemButton } from './MenuItemButton';

export const BaseMenu = ({
	options,
	onMenuClick,
	boxProps
}: {
	options: BaseMenuItemProps[];
	boxProps?: BoxProps;
	onMenuClick?: (e) => void;
}): JSX.Element => (
	<BoxLayout {...boxProps} p={0} className={'menu'}>
		<Menu>
			<MenuButton
				p={1}
				id={'menu-button'}
				as={Button}
				cursor={'pointer'}
				bg={'transparent'}
				rounded={'full'}
				size={'sm'}
				onClick={onMenuClick}
				alignSelf={'normal'}
			>
				<Icon as={IoEllipsisVertical} color={'gray.500'} />
			</MenuButton>
			<MenuList rounded={'none'} textAlign={'start'} minW={'auto'} p={1}>
				{options?.map((option, key) => (
					<React.Fragment key={key}>
						<MenuItemButton {...option} />
						{option.divider && <MenuDivider my={0} />}
					</React.Fragment>
				))}
			</MenuList>
		</Menu>
	</BoxLayout>
);

export default BaseMenu;
