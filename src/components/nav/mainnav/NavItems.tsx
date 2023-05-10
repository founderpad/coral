import {
	// AiTwotoneThunderbolt,
	IoAdd,
	IoPersonSharp,
	IoSearchSharp
} from '@/components/icons';
import { IconType } from 'react-icons/lib';
import React from 'react';
import { ColorProps } from '@chakra-ui/react';

export interface NavItem {
	// label: string | React.ReactNode;
	// subLabel?: string;
	// items?: Pick<
	// 	NavItem,
	// 	'label' | 'subLabel' | 'href' | 'icon' | 'color' | 'divider'
	// >[];
	// href?: string;
	// isLink?: boolean;
	// icon?: IconType;
	// rightIcon?: IconType;
	// divider?: boolean;
	// color?: string;
	label: string | React.ReactNode;
	subLabel?: string;
	// items?: Pick<
	// 	NavItem,
	// 	'label' | 'subLabel' | 'href' | 'icon' | 'color' | 'divider'
	// >[];
	items?: Array<{ title?: string } & { items?: Array<NavItem> }>;
	href?: string;
	isLink?: boolean;
	icon?: IconType;
	rightIcon?: IconType;
	divider?: boolean;
	color?: ColorProps['color'];
}

const NavItems: Array<NavItem> = [
	{
		label: 'Ideas',
		// href: '/ideas/search?page=1',
		items: [
			{
				title: 'All ideas',
				items: [
					{
						label: 'Search ideas',
						subLabel: 'View all ideas',
						href: '/ideas/search?page=1',
						icon: IoSearchSharp
					},
					{
						label: 'My ideas',
						subLabel: 'View your ideas',
						href: '/ideas/myideas',
						icon: IoPersonSharp
					},
					{
						label: 'Create idea',
						color: 'fpPrimary.500',
						subLabel: 'Post a new idea to the community',
						href: '/ideas/create',
						icon: IoAdd,
						divider: true
					}
				]
			}
			// {
			// 	title: 'Boost',
			// 	items: [
			// 		{
			// 			label: 'All Boosted ideas',
			// 			subLabel: 'See all currently boosted ideas',
			// 			href: '/ideas/boost?page=1',
			// 			icon: AiTwotoneThunderbolt,
			// 			color: 'purple.500'
			// 		}
			// 		// {
			// 		// 	label: 'Boost your idea',
			// 		// 	subLabel: 'Boost your idea to get more feedback',
			// 		// 	href: '/ideas/boosted?page=1',
			// 		// 	icon: IoRocketSharp,
			// 		// 	color: 'purple.500',
			// 		// 	divider: true
			// 		// }
			// 	]
			// }
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
		// href: '/users/search?page=1',
		items: [
			{
				items: [
					{
						label: 'Search users',
						subLabel: 'Search other users',
						href: '/users/search?page=1',
						icon: IoSearchSharp
					}
				]
			}
		]
	},
	{
		label: 'Match',
		href: '/match'
	},
	{
		label: 'Messages',
		href: '/messages',
		isLink: true
	}
	// {
	// label: (
	// 	<Flex display="inline-flex" alignItems="center">
	// 		Mentor
	// 		<Icon as={IoLockClosedOutline} ml={2} color="goldenrod" />
	// 	</Flex>
	// ),
	// label: (
	// 	<Button
	// 		px={2}
	// 		fontSize="xs"
	// 		variant="unstyled"
	// 		rightIcon={<IoLockClosedOutline color="goldenrod" />}
	// 		isDisabled
	// 	>
	// 		Mentor
	// 	</Button>
	// ),

	// href: '/mentor',
	// divider: true
	// }
];

export default NavItems;
