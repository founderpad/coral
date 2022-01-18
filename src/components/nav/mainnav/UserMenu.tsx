import { Button } from '@chakra-ui/button';
import {
	Icon,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList
} from '@chakra-ui/react';
import { IoEllipsisVertical } from '@components/icons';
import { BaseLink } from '@components/links';
import LogoutModal from '@components/modal/LogoutModal';
import { CurrentUserAvatarDetails, UserAvatar } from '@components/shared';
import { useCurrentUser } from '@hooks/auth';
import React from 'react';

const UserMenu = () => {
	const avatarUrl = useCurrentUser()?.avatarUrl;
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
				// ml={8}
				css={{
					'> *': {
						display: 'flex',
						alignItems: 'center'
					}
				}}
			>
				<UserAvatar size={'xs'} src={avatarUrl || undefined} />
				<Icon as={IoEllipsisVertical} ml={1} color={'gray.500'} />
			</MenuButton>
			<MenuList rounded={'none'} textAlign={'start'} p={4} maxW={200}>
				<CurrentUserAvatarDetails size={'md'} direction={'column'} />

				<MenuDivider my={4} />
				<MenuGroup>
					<MenuItem
						as={BaseLink}
						href={'/account/profile'}
						fontSize={'small'}
						color={'gray.500'}
						_hover={{ color: 'black' }}
					>
						Profile
					</MenuItem>
					<MenuItem
						as={BaseLink}
						href={'/user/settings'}
						fontSize={'small'}
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
