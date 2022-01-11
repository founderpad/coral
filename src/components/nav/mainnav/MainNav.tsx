import { useColorModeValue } from '@chakra-ui/color-mode';
import { Container, Flex } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { IoCloseOutline, IoMenuSharp } from 'components/icons';
import { FlexLayout } from 'components/layouts';
import { FounderpadLogoWithBadge } from 'components/shared/FounderpadLogo';
import { useMobileNav } from 'hooks/util';
import React, { memo } from 'react';
import NotificationsPopover from '../components/NotificationsPopover';
import DesktopNav from './DesktopNav';
import UserMenu from './UserMenu';

const MainNav = memo(() => {
	// const { isOpen, onToggle } = useDisclosure();
	// const firstField = React.useRef();

	return (
		<React.Fragment>
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
				>
					<Flex
						alignItems={'center'}
						justifyContent={'space-between'}
						flex={1}
					>
						<Flex alignItems={'center'}>
							<MobileMenu />
							<FounderpadLogoWithBadge w={100} />
						</Flex>
						<DesktopNav />
						<FlexLayout alignItems={'center'} ml={8}>
							<NotificationsPopover />
							<UserMenu />
						</FlexLayout>
					</Flex>
				</Container>
			</Flex>

			{/* <Drawer
				isOpen={isOpen}
				placement="left"
				initialFocusRef={firstField}
				onClose={onToggle}
			>
				<DrawerOverlay />
				<DrawerContent position={'absolute'} top={'48px'}>
					<DrawerHeader>
						<FlexLayout mx={'auto'} alignItems={'center'}>
							<FounderpadLogo w={'100px'} />
							<Tag
								bg={'fpPrimary.700'}
								color={'white'}
								textTransform={'capitalize'}
								fontWeight={'medium'}
								textAlign={'center'}
								verticalAlign={'center'}
								fontSize={'x-small'}
								rounded={'sm'}
								ml={2}
							>
								Beta
							</Tag>
						</FlexLayout>
						<DrawerCloseButton />
					</DrawerHeader>
					<MenuDivider />
					<DrawerBody p={6}>
						<MobileNav />
					</DrawerBody>
				</DrawerContent>
			</Drawer> */}
		</React.Fragment>
	);
});

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
