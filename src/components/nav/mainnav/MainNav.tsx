import { useColorModeValue } from '@chakra-ui/color-mode';
import { Container } from '@chakra-ui/layout';
import { FlexLayout } from '@/components/layouts';
import { FounderpadLogoWithBadge } from '@/components/shared/FounderpadLogo';
import React, { memo } from 'react';
import DesktopNav from './DesktopNav';
import UserMenu from './UserMenu';
import { mainNavContainerProps, mainNavProps } from './styles';
import { MobileMenu } from './MobileMenu';

const MainNav = memo(() => (
	<FlexLayout {...mainNavProps(useColorModeValue('white', 'gray.800'))}>
		<Container
			{...mainNavContainerProps(
				useColorModeValue('white', 'gray.800'),
				useColorModeValue('gray.600', 'white')
			)}
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

export default memo(MainNav);
