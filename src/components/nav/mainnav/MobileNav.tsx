import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import { Collapse, useBreakpointValue } from '@chakra-ui/react';
import { IoChevronDownSharp } from '@components/icons';
import { StackLayout } from '@components/layouts';
import { useMobileNav } from '@hooks/util';
import React, { memo } from 'react';
import NavItems, { NavItem } from './NavItems';
import { SubNav } from './SubNav';

const MobileNav = () => {
	const { isOpen } = useMobileNav();

	const isMobile = useBreakpointValue({ base: true, md: false });

	if (!isMobile) return null;
	return (
		<StackLayout
			style={{
				backgroundColor: 'rgba(255,255,255,0.95)'
			}}
			display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
			position={'absolute'}
			top={10}
			zIndex={999}
			p={4}
			flex={1}
			w={'full'}
			overflow={'hidden'}
			spacing={2}
			h={'calc(100% - 40px)'}
			// w={'calc(100% - 16px)'}
		>
			{NavItems.map((navItem, i) => (
				<MobileNavItem {...navItem} key={i} />
			))}
		</StackLayout>
	);
};

const MobileNavItem = (navItem: NavItem) => {
	const { items, label } = navItem;
	const { isOpen, onToggle } = useDisclosure();

	return (
		<StackLayout spacing={4} onClick={navItem && onToggle}>
			<Flex
				pb={2}
				justify={'space-between'}
				align={'center'}
				_hover={{ textDecoration: 'none' }}
			>
				<Text
					py={2}
					fontSize={'sm'}
					fontWeight={500}
					_hover={{
						textDecoration: 'none',
						color: useColorModeValue('fpGrey.900', 'white')
					}}
				>
					{label}
				</Text>
				{navItem.items?.length && (
					<Icon
						as={IoChevronDownSharp}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={4}
						h={4}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<Stack pl={2} align={'start'}>
					{items?.map((item, i) => (
						<SubNav {...item} key={i} />
					))}
				</Stack>
			</Collapse>
		</StackLayout>
	);
};

export default memo(MobileNav);
