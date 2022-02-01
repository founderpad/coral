import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { BoxProps } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { IoEllipsisVertical } from '@components/icons';
import { BoxLayout } from '@components/layouts';
import React from 'react';
import { BaseMenuItemProps } from './BaseMenuItem';

export const BaseMenu = ({
	children,
	boxProps
}: {
	children:
		| React.ReactElement<BaseMenuItemProps>
		| React.ReactElement<BaseMenuItemProps>[];
	boxProps?: BoxProps;
}) => (
	<BoxLayout {...boxProps} p={0} ml={'auto'}>
		<Menu>
			<MenuButton
				p={1}
				id={'menu-button'}
				as={Button}
				cursor={'pointer'}
				bg={'transparent'}
				rounded={'full'}
				size={'sm'}
				alignSelf={'normal'}
			>
				<Icon as={IoEllipsisVertical} color={'gray.500'} />
			</MenuButton>
			<MenuList rounded={'none'} textAlign={'start'} minW={'auto'} p={0}>
				{children}
			</MenuList>
		</Menu>
	</BoxLayout>
);

export default BaseMenu;
