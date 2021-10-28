import { Button } from '@chakra-ui/button';
import { Menu, MenuButton, MenuDivider, MenuList } from '@chakra-ui/menu';
import { Icon, MenuGroup, MenuItem } from '@chakra-ui/react';
import { BaseLink } from 'components/links';
import LogoutModal from 'components/modal/LogoutModal';
import { CurrentUserAvatarDetails, UserAvatar } from 'components/shared';
import { useCurrentUser } from 'hooks/auth';
import React from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';

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
				_hover={{ bg: 'gray.100' }}
				_active={{ bg: 'transparent' }}
				ml={8}
				css={{
					'> *': {
						display: 'flex',
						alignItems: 'center'
					}
				}}
			>
				<UserAvatar size={'xs'} src={user} />
				<Icon as={IoEllipsisVertical} ml={1} color={'gray.500'} />
			</MenuButton>
			<MenuList rounded={'none'} textAlign={'start'} p={4}>
				<CurrentUserAvatarDetails />

				<MenuDivider my={4} />
				<MenuGroup>
					<MenuItem
						as={BaseLink}
						href={'/app/account/profile'}
						fontSize={'sm'}
						color={'gray.500'}
						_hover={{ color: 'black' }}
					>
						Profile
					</MenuItem>
					<MenuItem
						as={BaseLink}
						href={'/app/user/settings'}
						fontSize={'sm'}
						color={'gray.500'}
						_hover={{ color: 'black' }}
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
