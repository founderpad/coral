import { Button } from '@chakra-ui/button';
import {
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList
} from '@chakra-ui/react';
import { IoLockClosedOutline } from '@components/icons';
import { BaseLink } from '@components/links';
import LogoutModal from '@components/modal/LogoutModal';
import { CurrentUserAvatarDetails, UserAvatar } from '@components/shared';
import { useCurrentUser } from '@hooks/auth';
import React from 'react';

const UserMenu = () => {
	const avatarUrl = useCurrentUser().avatarUrl;

	return (
		<Menu>
			<MenuButton
				as={Button}
				pr={0}
				rounded="full"
				cursor="pointer"
				bg="transparent"
				_hover={{ bg: 'transparent' }}
				_active={{ bg: 'transparent' }}
				css={{
					'> *': {
						display: 'flex',
						alignItems: 'center'
					}
				}}
			>
				<UserAvatar
					size="xs"
					src={avatarUrl || undefined}
					// badge={
					// 	!isProfileComplete && (
					// 		<AvatarBadge bg="red.500" boxSize="1em" />
					// 	)
					// }
				/>
			</MenuButton>
			<MenuList rounded="md" textAlign="start" p={4} maxW={200}>
				<CurrentUserAvatarDetails size="md" direction="column" />

				<MenuDivider my={4} />
				<MenuGroup>
					<MenuItem
						as={BaseLink}
						href="/account/profile"
						fontSize="small"
						color="fpGrey.500"
						_hover={{ color: 'fpGrey.900' }}
					>
						Profile
					</MenuItem>
					<MenuItem
						// as={BaseLink}
						// href="/account/profile"
						fontSize="small"
						color="fpGrey.500"
						_hover={{ color: 'fpGrey.900' }}
						isDisabled={true}
					>
						Settings
						<IoLockClosedOutline style={{ marginLeft: 4 }} />
					</MenuItem>
				</MenuGroup>
				<MenuDivider my={4} />
				<LogoutModal />
			</MenuList>
		</Menu>
	);
};

export default UserMenu;
