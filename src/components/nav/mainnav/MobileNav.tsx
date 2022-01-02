import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/react';
import { StackLayout } from 'components/layouts';
import React, { memo } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import NavItems, { NavItem } from './NavItems';
import { SubNav } from './SubNav';

const MobileNav = (): JSX.Element => {
	return (
		<StackLayout
			bg={useColorModeValue('white', 'gray.800')}
			display={{ md: 'none' }}
			spacing={1}
		>
			{NavItems.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</StackLayout>
	);
};

const MobileNavItem = ({ label, children }: NavItem): JSX.Element => {
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
