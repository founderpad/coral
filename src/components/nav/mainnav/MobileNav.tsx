import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/react';
import { IoChevronDownSharp } from 'components/icons';
import { StackLayout } from 'components/layouts';
import { useMobileNav } from 'hooks/util';
import React, { memo } from 'react';
import NavItems, { NavItem } from './NavItems';
import { SubNav } from './SubNav';

const MobileNav = () => {
	const { isOpen } = useMobileNav();

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
			{NavItems.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</StackLayout>
		// <StackLayout
		// 	bg={'whiteAlpha.900'}
		// 	filter={'blur(2px)'}
		// 	borderWidth={1}
		// 	boxShadow={'xl'}
		// 	rounded={'3xl'}
		// 	display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
		// 	spacing={1}
		// 	position={'absolute'}
		// 	top={14}
		// 	zIndex={999}
		// 	p={4}
		// 	flex={1}
		// 	left={4}
		// 	right={4}
		// 	bottom={4}
		// 	overflow={'hidden'}
		// 	h={'calc(100% - 72px)'}
		// 	w={'calc(100% - 32px)'}
		// >
		// 	<StackLayout spacing={2}>
		// 		{NavItems.map((navItem) => (
		// 			<MobileNavItem key={navItem.label} {...navItem} />
		// 		))}
		// 	</StackLayout>
		// </StackLayout>
	);
};

const MobileNavItem = ({ label, children }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<StackLayout spacing={4} onClick={children && onToggle}>
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
				{children && (
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
					{children?.map((child) => (
						<SubNav key={child.label} {...child} />
					))}
				</Stack>
			</Collapse>
		</StackLayout>
	);
};

export default memo(MobileNav);
