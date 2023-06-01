import MainNav from '@/components/nav/mainnav/MainNav';
import MobileNav from '@/components/nav/mainnav/MobileNav';
import { usePushNotifications } from '@/hooks/notifications';
import MobileNavigationProvider from '@/provider/MobileNavigationProvider';
import React, { useContext } from 'react';
import { BoxLayout } from './BoxLayout';
import { AlertFeedback } from '../alert';
import NotificationContext from '@/context/NotificationContext';

export const MainLayout = ({ children }: { children: JSX.Element }) => {
	usePushNotifications();
	const { notification } = useContext(NotificationContext);

	return (
		<MobileNavigationProvider>
			<MainNav />
			<BoxLayout
				p={0}
				as="main"
				mx={{ base: 0, md: 'auto' }}
				w={{ base: 'full', xl: '95ch' }}
				// bg="white"
				display="flex"
				flexDirection="column"
				flex={1}
				mt={{ base: 14, lg: '72px' }}
				mb={{ base: 0, lg: 4 }}
				id="main-container"
				rounded="md"
				css={{
					'> *': {
						background: 'white'
					}
				}}
			>
				{notification && (
					<AlertFeedback
						message={notification.message}
						status={notification.status}
						mb={4}
						px={6}
						bg="white"
						rounded={{ lg: 'md' }}
						borderColor="fpLightGrey.900"
						borderBottomWidth={{ xs: '1px', lg: 0 }}
						borderWidth={{ lg: '1px' }}
					/>
				)}
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
// 		<Link fontSize="sm" href={href} color="fpGrey.700" isExternal>
// 			{label}
// 		</Link>
// 	);
// };

export default MainLayout;
