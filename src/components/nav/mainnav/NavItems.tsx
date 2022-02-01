import { Flex } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import {
	IoAddSharp,
	IoLockClosedSharp,
	IoPersonSharp,
	IoSearchSharp
} from '@components/icons';
import { IconType } from 'react-icons/lib';
import React from 'react';

export interface NavItem {
	label: string | React.ReactNode;
	subLabel?: string;
	items?: Pick<
		NavItem,
		'label' | 'subLabel' | 'href' | 'icon' | 'color' | 'divider'
	>[];
	href?: string;
	icon?: IconType;
	rightIcon?: IconType;
	divider?: boolean;
	color?: string;
}

const NavItems: Array<NavItem> = [
	{
		label: 'Ideas',
		href: '/ideas?page=1',
		items: [
			{
				label: 'Search ideas',
				subLabel: 'Search all ideas available for feedback',
				href: '/ideas?page=1',
				icon: IoSearchSharp
			},
			{
				label: 'My ideas',
				subLabel: 'See the ideas you have created',
				href: '/ideas/my-ideas',
				icon: IoPersonSharp
			},
			{
				label: 'Create idea',
				color: 'fpPrimary.500',
				subLabel: 'Post your new idea to the community',
				href: '/ideas/create',
				icon: IoAddSharp,
				divider: true
			}
		]
	},
	// {
	// 	label: 'Founders',
	// 	href: '/founders?page=1',
	// 	items: [
	// 		{
	// 			label: 'Search founders',
	// 			subLabel: 'Search for other founders',
	// 			href: '/founders?page=1',
	// 			icon: IoSearchSharp
	// 		}
	// 	]
	// },
	{
		label: 'Users',
		href: '/users?page=1',
		items: [
			{
				label: 'Search users',
				subLabel: 'Search other users',
				href: '/users?page=1',
				icon: IoSearchSharp
			}
		]
	},
	{
		label: (
			<Flex display={'inline-flex'} alignItems={'center'}>
				Messages{' '}
				<Icon as={IoLockClosedSharp} ml={2} color={'goldenrod'} />
			</Flex>
		),
		href: '/messages'
	},
	{
		label: (
			<Flex display={'inline-flex'} alignItems={'center'}>
				Mentor{' '}
				<Icon as={IoLockClosedSharp} ml={2} color={'goldenrod'} />
			</Flex>
		),
		href: '/mentor',
		divider: true
	}
];

export default NavItems;
