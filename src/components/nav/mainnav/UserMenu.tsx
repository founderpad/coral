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
import { BiCoinStack, IoLockClosedOutline } from '@components/icons';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { BaseLink } from '@components/links';
import LogoutModal from '@components/modal/LogoutModal';
import { CurrentUserAvatarDetails, UserAvatar } from '@components/shared';
import { useCurrentUser } from '@hooks/auth';
import React from 'react';

const UserMenu = () => {
	const avatarUrl = useCurrentUser().avatarUrl;
	const esteemPoints = useCurrentUser().esteemPoints?.points;

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
				<UserAvatar size="xs" src={avatarUrl || undefined} />
			</MenuButton>
			<MenuList rounded="md" textAlign="start" p={4} maxW={200}>
				<CurrentUserAvatarDetails size="md" direction="column" />

				{/* <Label
					fontSize="xs"
					textAlign="center"
					color="yellow.500"
					mt={4}
				>
					Esteem Points: {esteemPoints}
				</Label> */}

				<FlexLayout justifyContent="center" mt={4}>
					{/* <Label fontSize="xs" textAlign="center" color="yellow.500">
						Esteem Points:
					</Label>
					{esteemPoints} */}

					{/* <Label
						fontSize="xs"
						textAlign="center"
						color="yellow.500"
						mr={2}
					>
						Esteem Points:
					</Label> */}
					<Icon as={BiCoinStack} color="yellow.500" mr={1} />
					<Label fontSize="xs" textAlign="center" color="yellow.500">
						{esteemPoints}
					</Label>
				</FlexLayout>

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
