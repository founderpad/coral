import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { BoxProps } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { BoxLayout } from 'components/layouts';
import React from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BaseMenuItemProps } from './BaseMenuItem';

export const BaseMenu = ({
	children,
	boxProps
}: {
	children:
		| React.ReactElement<BaseMenuItemProps>
		| React.ReactElement<BaseMenuItemProps>[];
	boxProps?: BoxProps;
}): JSX.Element => (
	<BoxLayout {...boxProps} p={0}>
		{/* <Divider orientation={'vertical'} /> */}
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
				{/* {options?.map((option, key) => (
					<React.Fragment key={key}>
						<MenuItemButton {...option} />
						{option.divider && <MenuDivider my={0} />}
					</React.Fragment>
				))} */}
				{children}
			</MenuList>
		</Menu>
	</BoxLayout>
);

export default BaseMenu;
