import MainNav from '@components/nav/mainnav/MainNav';
import MobileNav from '@components/nav/mainnav/MobileNav';
import { usePushNotifications } from '@hooks/notifications';
import MobileNavigationProvider from '@provider/MobileNavigationProvider';
import React from 'react';
import { BoxLayout } from './BoxLayout';

export const MainLayout = ({ children }: { children: JSX.Element }) => {
	usePushNotifications();

	return (
		<MobileNavigationProvider>
			<MainNav />
			<BoxLayout
				p={0}
				as={'main'}
				mx={{ base: 0, md: 'auto' }}
				w={{ base: 'full', xl: '95ch' }}
				bg={'white'}
				display={'flex'}
				flexDirection={'column'}
				flex={1}
				// borderWidth={{ base: 0, lg: 1 }}
				borderColor={'gray.100'}
				// mt={{ base: 0, lg: 4 }}
				// mb={{ base: 0, lg: 4 }}
				mt={{ base: 10, lg: 14 }}
				mb={{ base: 0, lg: 4 }}
				// p={{ base: 0, sm: 4 }}
				// overflowY={'auto'}
				position={'relative'}
				id={'main-container'}
			>
				{children}
			</BoxLayout>

			<MobileNav />
		</MobileNavigationProvider>
	);
};

// const FooterLink = ({
// 	href,
// 	label
// }: {
// 	href: string;
// 	label: string;
// }):  => {
// 	return (
// 		<Link fontSize={'sm'} href={href} color={'fpGrey.700'} isExternal>
// 			{label}
// 		</Link>
// 	);
// };

export default MainLayout;
