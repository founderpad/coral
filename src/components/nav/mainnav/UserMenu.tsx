import { Button } from '@chakra-ui/button';
import { Menu, MenuButton, MenuDivider, MenuList } from '@chakra-ui/menu';
import { Icon, MenuGroup, MenuItem } from '@chakra-ui/react';
import { BaseLink } from 'components/links';
import LogoutModal from 'components/modal/LogoutModal';
import { CurrentUserAvatarDetails, UserAvatar } from 'components/shared';
import { useCurrentUser } from 'hooks/auth';
import React from 'react';
import {
	IoEllipsisVertical,
	IoPersonCircleSharp,
	IoSettingsSharp
} from 'react-icons/io5';

const UserMenu = (): JSX.Element => {
	const user = useCurrentUser().avatar_url;
	return (
		<Menu>
			<MenuButton
				p={1}
				as={Button}
				rounded={'full'}
				cursor={'pointer'}
				bg={'transparent'}
				ml={8}
			>
				<UserAvatar size={'xs'} src={user} />
				<Icon as={IoEllipsisVertical} ml={1} color={'fpGrey.700'} />
			</MenuButton>
			<MenuList rounded={'none'} textAlign={'start'} p={4}>
				<CurrentUserAvatarDetails />

				<MenuDivider my={4} />
				<MenuGroup>
					<MenuItem
						as={BaseLink}
						href={'/account/profile'}
						_hover={{ bg: 'fpLightGrey.100' }}
						fontSize={'sm'}
						color={'fpGrey.500'}
						fontWeight={'medium'}
						icon={
							<Icon
								as={IoPersonCircleSharp}
								fontSize={'large'}
								color={'fpGrey.500'}
							/>
						}
					>
						Profile
					</MenuItem>
					<MenuItem
						as={BaseLink}
						href={'/user/settings'}
						_hover={{ bg: 'fpLightGrey.100' }}
						fontSize={'sm'}
						color={'fpGrey.500'}
						fontWeight={'medium'}
						icon={
							<Icon
								as={IoSettingsSharp}
								fontSize={'large'}
								color={'fpGrey.500'}
							/>
						}
					>
						Settings
					</MenuItem>
				</MenuGroup>
				<MenuDivider my={4} />
				<LogoutModal />
			</MenuList>
		</Menu>
	);
};

export default UserMenu;
