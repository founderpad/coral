import { Flex } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { IoChevronDownSharp, IoLockClosedSharp } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

export interface NavItem {
	label: string | React.ReactNode;
	key: string;
	subLabel?: string;
	children?: NavItem[];
	href?: string;
	icon?: IconType;
	rightIcon?: IconType;
	divider?: boolean;
}

const NavItems: Array<NavItem> = [
	// {
	// 	label: 'Home',
	// 	key: 'home',
	// 	href: '/home'
	// },
	// {
	// 	label: 'Dashboard',
	// 	key: 'dashboard',
	// 	href: '/dashboard'
	// },
	{
		label: 'Ideas',
		key: 'ideas',
		href: '/ideas?page=1',
		rightIcon: IoChevronDownSharp,
		children: [
			{
				label: 'All ideas',
				key: 'all-ideas',
				subLabel: 'View all ideas',
				href: '/ideas?page=1'
			},
			{
				label: 'My ideas',
				key: 'my-ideas',
				subLabel: 'View your ideas',
				href: '/ideas/my-ideas'
			},
			// {
			// 	label: 'Your ideas',
			// 	key: 'your-ideas',
			// 	subLabel: 'View the ideas you have posted',
			// 	href: '/ideas/my-ideas'
			// },
			{
				label: 'Create idea',
				key: 'create',
				subLabel: 'Post a new idea to the community',
				href: '/ideas/create',
				// icon: IoAddSharp
				divider: true
			}
		]
	},
	// {
	// 	label: 'Founders',
	// 	key: 'founders',
	// 	href: '/founders',
	// 	children: [
	// 		{
	// 			label: 'Search founders',
	// 			key: 'search-founders',
	// 			subLabel: 'Search for other founders',
	// 			href: '/founders'
	// 		},
	// 		{
	// 			label: 'Your co-founders',
	// 			key: 'your-cofounders',
	// 			subLabel: 'The founders you have connected with',
	// 			href: '/founders/connected-founders'
	// 		}
	// 	]
	// },
	// {
	// 	label: (
	// 		<Flex display="inline-flex" alignItems="center">
	// 			Investor{' '}
	// 			<Icon as={IoLockClosedSharp} ml={2} color="goldenrod" />
	// 		</Flex>
	// 	),
	// 	key: 'investor-network',
	// 	href: '/investor',
	// 	divider: true
	// },
	{
		label: 'Messages',
		key: 'messages',
		href: '/messages'
	},
	{
		label: (
			<Flex display={'inline-flex'} alignItems={'center'}>
				Coming soon{' '}
				<Icon as={IoLockClosedSharp} ml={2} color={'goldenrod'} />
			</Flex>
		),
		key: 'mentor-network',
		href: '/mentor',
		divider: true
	}
];

export default NavItems;
