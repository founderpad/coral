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
import { BiCoinStack, IoLockClosedOutline } from '@/components/icons';
import { Label } from '@/components/labels';
import { FlexLayout } from '@/components/layouts';
import { BaseLink } from '@/components/links';
import LogoutModal from '@/components/modal/LogoutModal';
import {
	AppDivider,
	CurrentUserAvatarDetails,
	UserAvatar
} from '@/components/shared';
import { useCurrentUser } from '@/hooks/auth';
import React from 'react';
import { BiMoney } from 'react-icons/bi';
import { CaptionLabel } from '@/components/labels/Label';

const UserMenu = () => {
	const avatarUrl = useCurrentUser().avatarUrl;
	const esteemPoints = useCurrentUser().esteemPointsCurrency?.points;
	const currency: string = useCurrentUser().esteemPointsCurrency?.currency;

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
			<MenuList rounded="md" textAlign="start" p={4} maxW={250}>
				<CurrentUserAvatarDetails size="md" direction="column" />
				<FlexLayout p={3} mt={6} flexDirection="column" borderWidth={1}>
					<FlexLayout justifyContent="space-between" mb={2} py={2}>
						<FlexLayout alignItems="center">
							<Icon
								as={BiCoinStack}
								fontSize="lg"
								color="yellow.500"
								mr={2}
							/>
							<Label
								fontSize="sm"
								textAlign="center"
								color="yellow.500"
							>
								{esteemPoints}
							</Label>
						</FlexLayout>
					</FlexLayout>
					<AppDivider />
					<FlexLayout justifyContent="space-between" py={2}>
						<FlexLayout alignItems="center">
							<Icon
								as={BiMoney}
								fontSize="lg"
								color="green.500"
								mr={2}
							/>
							<Label
								fontSize="sm"
								textAlign="center"
								color="green.500"
							>
								{currency}
							</Label>
						</FlexLayout>
						<Button
							size="xs"
							colorScheme="green"
							fontSize="x-small"
							disabled={parseFloat(currency.substring(1)) < 10}
						>
							Withdraw
						</Button>
					</FlexLayout>
					<CaptionLabel>
						A minimimum of $10.00 must be earned before you can
						withdraw
					</CaptionLabel>
				</FlexLayout>

				{/* <FlexLayout mt={6} px={3} py={2} bg="gray.50">
					<FlexLayout alignItems="center">
						<Icon
							as={BiCoinStack}
							fontSize="lg"
							color="yellow.600"
							mr={1}
						/>
						<Label
							fontSize="sm"
							textAlign="center"
							color="yellow.500"
						>
							{esteemPoints}
						</Label>
					</FlexLayout>
				</FlexLayout> */}

				<MenuDivider my={6} />
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
				<MenuDivider my={6} />
				<LogoutModal />
			</MenuList>
		</Menu>
	);
};

export default UserMenu;
