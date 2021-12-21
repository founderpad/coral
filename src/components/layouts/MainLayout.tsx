import { Box } from '@chakra-ui/layout';
import MainNav from 'components/nav/mainnav/MainNav';
import { usePushNotifications } from 'hooks/notifications';
import React, { FC } from 'react';

export const MainLayout: FC<{ children: JSX.Element }> = ({
	children
}): JSX.Element => {
	usePushNotifications();
	return (
		<>
			<MainNav />
			<Box
				as={'main'}
				mx={{ base: 0, md: 'auto' }}
				w={{ base: 'full', xl: '120ch' }}
				bg={'white'}
				display={'flex'}
				flexDirection={'column'}
				flex={1}
				borderWidth={{ base: 0, lg: 1 }}
				borderColor={'gray.100'}
				marginY={{ base: 0, lg: 6 }}
				overflowY={'auto'}
				position={'relative'}
			>
				{children}
			</Box>
		</>
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
