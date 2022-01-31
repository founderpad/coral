import { useColorModeValue } from '@chakra-ui/color-mode';
import { Container, Flex } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { IoCloseOutline, IoMenuSharp } from '@components/icons';
import { FlexLayout } from '@components/layouts';
import { FounderpadLogoWithBadge } from '@components/shared/FounderpadLogo';
import { useMobileNav } from '@hooks/util';
import React, { memo } from 'react';
import NotificationsPopover from '../components/NotificationsPopover';
import DesktopNav from './DesktopNav';
import UserMenu from './UserMenu';

const MainNav = memo(() => (
	<Flex
		bg={useColorModeValue('white', 'gray.800')}
		borderBottom={'1px solid'}
		borderBottomColor={'gray.100'}
		zIndex={1000}
		// position={'sticky'}
		position={'fixed'}
		top={0}
		h={'40px'}
		w={'full'}
	>
		<Container
			bg={useColorModeValue('white', 'gray.800')}
			color={useColorModeValue('gray.600', 'white')}
			py={{ base: 2 }}
			px={{ base: 4 }}
			display={'flex'}
			align={'center'}
			justifySelf={'center'}
			position={'sticky'}
			maxW={{ lg: '95ch' }}
			alignItems={'center'}
			justifyContent={'space-between'}
			flex={1}
		>
			{/* <Flex
				alignItems={'center'}
				justifyContent={'space-between'}
				flex={1}
			> */}
			<Flex alignItems={'center'}>
				<MobileMenu />
				<FounderpadLogoWithBadge w={100} />
			</Flex>
			<DesktopNav />
			<FlexLayout alignItems={'center'} ml={8}>
				<NotificationsPopover />
				<UserMenu />
			</FlexLayout>
			{/* </Flex> */}
		</Container>
	</Flex>
));

const MobileMenu = () => {
	const { isOpen, onToggle } = useMobileNav();

	return (
		<Icon
			display={{ base: 'inline-flex', md: 'none' }}
			as={isOpen ? IoCloseOutline : IoMenuSharp}
			mr={4}
			fontSize={'2xl'}
			onClick={onToggle}
			color={'gray.900'}
		/>
	);
};

export default memo(MainNav);
