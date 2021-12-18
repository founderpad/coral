import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { Container, Flex } from '@chakra-ui/layout';
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Icon,
	MenuDivider,
	Tag
} from '@chakra-ui/react';
import { FlexLayout } from 'components/layouts';
import FounderpadLogo from 'components/shared/FounderpadLogo';
import React, { memo } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import UserMenu from './UserMenu';

const MainNav = (): JSX.Element => {
	const { isOpen, onToggle } = useDisclosure();
	const firstField = React.useRef();

	return (
		<React.Fragment>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				borderBottom={'1px solid'}
				borderBottomColor={'gray.100'}
				zIndex={1100}
				position={'sticky'}
				top={0}
				h={'40px'}
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
					maxW={{ lg: '120ch' }}
				>
					<Flex
						alignItems={'center'}
						justifyContent={'space-between'}
						flex={1}
					>
						<Flex alignItems={'center'}>
							<Icon
								display={{ base: 'inline-flex', md: 'none' }}
								as={IoMenuSharp}
								mr={4}
								fontSize={'2xl'}
								onClick={onToggle}
							/>
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
						</Flex>
						<DesktopNav />
						<UserMenu />
					</Flex>
				</Container>
			</Flex>

			<Drawer
				isOpen={isOpen}
				placement="left"
				initialFocusRef={firstField}
				onClose={onToggle}
			>
				<DrawerOverlay />
				<DrawerContent>
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
			</Drawer>
		</React.Fragment>
	);
};

export default memo(MainNav);
