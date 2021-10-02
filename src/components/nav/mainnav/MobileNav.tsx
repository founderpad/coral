import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/transition';
import CustomLink from 'components/input/Links';
import React, { memo } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import NavItems, { NavItem } from './NavItems';

const MobileNav = (): JSX.Element => {
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			display={{ md: 'none' }}
		>
			{NavItems.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children }: NavItem): JSX.Element => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
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
						color: useColorModeValue('gray.600', 'white')
					}}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={IoChevronDownSharp}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<Stack pl={2} align={'start'}>
					{children &&
						children.map((child) => (
							<CustomLink
								key={child.key}
								pb={2}
								href={child.href}
								bg={useColorModeValue('white', 'gray.600')}
								transition={'all .3s ease'}
								fontSize={'sm'}
								fontWeight={500}
							>
								{child.label}
							</CustomLink>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

export default memo(MobileNav);
