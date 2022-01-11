import { Flex } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import {
	IoAddSharp,
	IoLockClosedSharp,
	IoPersonSharp,
	IoSearchSharp
} from 'components/icons';
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
	color?: string;
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
		children: [
			{
				label: 'Search ideas',
				key: 'search-ideas',
				subLabel: 'Search all ideas available for feedback',
				href: '/ideas?page=1',
				icon: IoSearchSharp
			},
			{
				label: 'My ideas',
				key: 'my-ideas',
				subLabel: 'See the ideas you have created',
				href: '/ideas/my-ideas',
				icon: IoPersonSharp
			},
			{
				label: 'Create idea',
				key: 'create',
				color: 'fpPrimary.500',
				subLabel: 'Post your new idea to the community',
				href: '/ideas/create',
				icon: IoAddSharp,
				divider: true
			}
		]
	},
	{
		label: 'Founders',
		key: 'founders',
		href: '/founders?page=1',
		// rightIcon: IoChevronDownSharp,
		children: [
			{
				label: 'Search founders',
				key: 'search-founders',
				subLabel: 'Search for other founders',
				href: '/founders?page=1',
				icon: IoSearchSharp
			}
		]
	},
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
