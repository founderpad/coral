import { useColorModeValue } from '@chakra-ui/color-mode';
import { Container } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { IoCloseOutline, IoMenuSharp } from '@/components/icons';
import { FlexLayout } from '@/components/layouts';
import { FounderpadLogoWithBadge } from '@/components/shared/FounderpadLogo';
import { useMobileNav } from '@/hooks/util';
import React, { memo } from 'react';
// import NotificationsPopover from '../components/NotificationsPopover';
import DesktopNav from './DesktopNav';
import UserMenu from './UserMenu';

const MainNav = memo(() => (
	<FlexLayout
		bg={useColorModeValue('white', 'gray.800')}
		borderBottomWidth={1}
		borderBottomColor="fpLightGrey.900"
		zIndex={1000}
		// position="sticky"
		position="fixed"
		top={0}
		h="56px"
		w="full"
	>
		<Container
			bg={useColorModeValue('white', 'gray.800')}
			color={useColorModeValue('gray.600', 'white')}
			py={{ base: 2 }}
			px={{ base: 4, sm: 6, lg: 0 }}
			display="flex"
			justifySelf="center"
			position="sticky"
			maxW={{ base: '100%', xl: '95ch' }}
			alignItems="center"
			justifyContent="space-between"
			flex={1}
		>
			<FlexLayout alignItems="center">
				<MobileMenu />
				<FounderpadLogoWithBadge
					w={100}
					display={{ base: 'none', sm: 'flex' }}
				/>
			</FlexLayout>

			<DesktopNav />
			<FlexLayout alignItems="center" ml={{ base: 0, md: 24 }}>
				{/* <NotificationsPopover /> */}
				<UserMenu />
			</FlexLayout>
		</Container>
	</FlexLayout>
));

const MobileMenu = () => {
	const { isOpen, onToggle } = useMobileNav();

	return (
		<Icon
			display={{ base: 'inline-flex', md: 'none' }}
			as={isOpen ? IoCloseOutline : IoMenuSharp}
			mr={4}
			fontSize="2xl"
			onClick={onToggle}
			color="gray.900"
		/>
	);
};

export default memo(MainNav);
