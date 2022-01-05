import { Box } from '@chakra-ui/layout';
import MainNav from 'components/nav/mainnav/MainNav';
import { usePushNotifications } from 'hooks/notifications';
import React, { FC } from 'react';

export const MainLayout: FC<{ children: JSX.Element }> = ({
	children
}): JSX.Element => {
	usePushNotifications();
	return (
		<React.Fragment>
			<MainNav />
			<Box
				as={'main'}
				mx={{ base: 0, md: 'auto' }}
				w={{ base: 'full', xl: '95ch' }}
				bg={'white'}
				display={'flex'}
				flexDirection={'column'}
				flex={1}
				borderWidth={{ base: 0, lg: 1 }}
				borderColor={'gray.100'}
				mt={{ base: 0, lg: 14 }}
				mb={{ base: 0, lg: 4 }}
				// p={{ base: 0, sm: 4 }}
				// overflowY={'auto'}
				position={'relative'}
			>
				{children}
			</Box>
		</React.Fragment>
	);
};

// const FooterLink = ({
// 	href,
// 	label
// }: {
// 	href: string;
// 	label: string;
// }): JSX.Element => {
// 	return (
// 		<Link fontSize={'sm'} href={href} color={'fpGrey.700'} isExternal>
// 			{label}
// 		</Link>
// 	);
// };

export default MainLayout;
