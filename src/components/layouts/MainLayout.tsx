import MainNav from '@/components/nav/mainnav/MainNav';
import MobileNav from '@/components/nav/mainnav/MobileNav';
import { usePushNotifications } from '@/hooks/notifications';
import MobileNavigationProvider from '@/provider/MobileNavigationProvider';
import React from 'react';
import { BoxLayout } from './BoxLayout';
import { AlertFeedback } from '../alert';
import { useNotification } from '@/hooks/util';

export const MainLayout = ({ children }: { children: JSX.Element }) => {
	usePushNotifications();
	const { notification } = useNotification();

	return (
		<MobileNavigationProvider>
			<MainNav />
			<BoxLayout
				p={0}
				as="main"
				mx={{ base: 0, md: 'auto' }}
				w={{ base: 'full', xl: '95ch' }}
				display="flex"
				flexDirection="column"
				flex={1}
				mt={{ base: 14, xl: '72px' }}
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
					<BoxLayout
						px={6}
						p={2}
						mb={{ base: 0, xl: 4 }}
						bg="white"
						rounded={{ base: 0, xl: 'md' }}
						borderColor="fpLightGrey.900"
						borderWidth={{ base: 0, xl: '1px' }}
						borderTopWidth={{ xl: '1px' }}
						borderBottomWidth="1px"
					>
						<AlertFeedback
							message={notification.message}
							status={notification.status}
							showIcon
							showClose
							auto
						/>
					</BoxLayout>
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
