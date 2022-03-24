import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Link, Text } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/react';
import { IoChevronDownSharp } from '@components/icons';
import { FlexLayout, StackLayout } from '@components/layouts';
import { useMobile, useMobileNav } from '@hooks/util';
import Router from 'next/router';
import React, { memo } from 'react';
import NavItems, { NavItem } from './NavItems';
import { SubNav } from './SubNav';

const MobileNav = () => {
	const { isOpen } = useMobileNav();
	const isMobile = useMobile();

	if (!isMobile) return null;

	return (
		<StackLayout
			style={{
				backgroundColor: 'rgba(255, 255, 255, 0.97)'
			}}
			display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
			position="fixed"
			top={10}
			zIndex={999}
			p={4}
			flex={1}
			w="full"
			overflow="hidden"
			spacing={2}
			h={'calc(100% - 40px)'}
		>
			{NavItems.map((navItem, i) => (
				<MobileNavItem {...navItem} key={i} />
			))}
		</StackLayout>
	);
};

const MobileNavItem = (navItem: NavItem) => {
	const { items, label, isLink } = navItem;
	const { isOpen, onToggle } = useDisclosure();
	const colorModeValue = useColorModeValue('fpGrey.900', 'white');

	const getCurrentPath = (href: string) =>
		href.includes(Router.pathname) ?? '';

	return (
		<StackLayout spacing={4} onClick={navItem && onToggle}>
			<FlexLayout
				pb={2}
				justify="space-between"
				align="center"
				_hover={{ textDecoration: 'none' }}
			>
				{isLink ? (
					<Link
						d="flex"
						href={navItem.href ?? '#'}
						fontSize="sm"
						fontWeight={
							getCurrentPath(navItem.href ?? '')
								? 'medium'
								: 'normal'
						}
						alignItems="center"
						color={
							getCurrentPath(navItem.href ?? '')
								? 'fpGrey.900'
								: 'fpGrey.500'
						}
						_hover={{
							textDecoration: 'none',
							color: colorModeValue
						}}
					>
						{navItem.label}
						{navItem.rightIcon && (
							<Icon
								color="inherit"
								ml={1}
								as={navItem.rightIcon}
							/>
						)}
					</Link>
				) : (
					<Text
						py={2}
						fontSize="sm"
						fontWeight={500}
						_hover={{
							textDecoration: 'none',
							color: colorModeValue
						}}
					>
						{label}
					</Text>
				)}
				{navItem.items?.length && (
					<Icon
						as={IoChevronDownSharp}
						transition="all .25s ease-in-out"
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={4}
						h={4}
					/>
				)}
			</FlexLayout>

			<Collapse in={isOpen} animateOpacity>
				<StackLayout pl={2} align="start" spacing={2}>
					{items?.map((item, i) => (
						<SubNav {...item} key={i} />
					))}
				</StackLayout>
			</Collapse>
		</StackLayout>
	);
};

export default memo(MobileNav);
