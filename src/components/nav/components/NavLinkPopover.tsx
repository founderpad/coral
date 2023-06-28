import { StackLayout } from '@/components/layouts';
import BasePopover from '@/components/popover/BasePopover';
import { Icon } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IoChevronDownSharp } from 'react-icons/io5';
import SubNavMenu from '../mainnav/SubNavMenu';
import { Link } from '@chakra-ui/layout';
import Router from 'next/router';
import { NavItem } from '../mainnav/NavItems';

const getCurrentPath = (href: string) => href.includes(Router.pathname) ?? '';

export const NavLinkPopover = (navItem: NavItem) => {
	return (
		<BasePopover
			triggerEl={
				<NextLink href={navItem.href ?? ''} passHref>
					<Link
						px={2}
						display="flex"
						fontSize="xs"
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
							color: 'gray.900'
						}}
						css={{
							':hover > svg': {
								transform: 'rotate(-180deg)',
								transition: 'transform .1s linear'
							}
						}}
					>
						{navItem.label}
						{navItem.items?.length && (
							<Icon
								color="inherit"
								ml={1}
								as={IoChevronDownSharp}
								transition="transform .1s linear"
								top={10}
							/>
						)}
					</Link>
				</NextLink>
			}
			w={{ base: '100vw', sm: 'auto' }}
		>
			{navItem.items && (
				<StackLayout
					direction={{ base: 'column', md: 'row' }}
					p={2}
					display="flex"
				>
					<SubNavMenu {...navItem} />
				</StackLayout>
			)}
		</BasePopover>
	);
};
