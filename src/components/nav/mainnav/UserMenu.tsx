import { Button } from '@chakra-ui/button';
import {
	AvatarBadge,
	Icon,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList
} from '@chakra-ui/react';
import { IoAlertCircleSharp, IoEllipsisVertical } from '@components/icons';
import { Label } from '@components/labels';
import { BaseLink } from '@components/links';
import LogoutModal from '@components/modal/LogoutModal';
import { CurrentUserAvatarDetails, UserAvatar } from '@components/shared';
import { useCurrentUser } from '@hooks/auth';
import useUserProfile from '@hooks/user';
import React, { memo } from 'react';

const UserMenu = () => {
	const avatarUrl = useCurrentUser()?.avatarUrl;
	const isProfileComplete = useUserProfile()?.isComplete;

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
				css={{
					'> *': {
						display: 'flex',
						alignItems: 'center'
					}
				}}
			>
				<UserAvatar
					size={'xs'}
					src={avatarUrl || undefined}
					badge={
						!isProfileComplete && (
							<AvatarBadge bg={'red.500'} boxSize={'1em'} />
						)
					}
				/>
				<Icon as={IoEllipsisVertical} ml={1} color={'gray.500'} />
			</MenuButton>
			<MenuList rounded={'none'} textAlign={'start'} p={4} maxW={200}>
				<CurrentUserAvatarDetails size={'md'} direction={'column'} />
				{!isProfileComplete && <ProfileNotSet />}
				<MenuDivider my={4} />
				<MenuGroup>
					<MenuItem
						as={BaseLink}
						href={'/account/profile'}
						fontSize={'small'}
						color={'fpGrey.500'}
						_hover={{ color: 'fpGrey.900' }}
					>
						Profile
					</MenuItem>
					{/* <MenuItem
						as={BaseLink}
						href={'/user/settings'}
						fontSize={'small'}
						color={'gray.500'}
						_hover={{ color: 'black' }}
					>
						Settings
					</MenuItem> */}
				</MenuGroup>
				<MenuDivider my={4} />
				<LogoutModal />
			</MenuList>
		</Menu>
	);
};

const ProfileNotSet = memo(() => (
	<Label
		py={3}
		color={'red.500'}
		fontSize={'xs'}
		icon={IoAlertCircleSharp}
		iconColor={'red.500'}
		alignItems={'center'}
		d={'flex'}
	>
		Profile not set
	</Label>
));

export default UserMenu;
