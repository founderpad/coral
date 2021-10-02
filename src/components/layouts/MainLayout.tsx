import MainNav from 'components/nav/mainnav/MainNav';
import React, { FC } from 'react';
import MainContainer from '../containers/MainContainer';

export const MainLayout: FC<{ children: JSX.Element }> = ({
	children
}): JSX.Element => (
	<React.Fragment>
		<MainNav />
		<MainContainer>{children}</MainContainer>
		{/* <Flex
			p={4}
			bg={'white'}
			borderTopWidth={1}
			borderTopColor={'fpLightGrey.300'}
		>
			<Flex
				w={'120ch'}
				mx={'auto'}
				justifyContent={'space-between'}
				flexDirection={{ base: 'column', md: 'row' }}
			>
				<Flex
					flexDirection={{ base: 'column', md: 'row' }}
					justifyContent={'flex-start'}
				>
					<Text fontSize={'sm'} color={'fpGrey.700'}>
						&copy; 2021 founderpad ltd
					</Text>
					<Flex
						alignItems={'center'}
						justifyContent={'flex-start'}
						my={{ base: 1, md: 0 }}
					>
						<PointSeparator
							display={{ base: 'none', xl: 'block' }}
						/>
						<FooterLink
							href={'https://founderpad.com/legal/privacy-policy'}
							label={'Privacy'}
						/>
						<PointSeparator />
						<FooterLink
							href={'https://founderpad.com/legal/terms'}
							label={'Terms'}
						/>
						<PointSeparator />
						<FooterLink
							href={'https://founderpad.com/legal/cookie-policy'}
							label={'Cookies'}
						/>
					</Flex>
				</Flex>
				<Flex
					alignItems={'center'}
					justifyContent={{ base: 'flex-start', md: 'flex-end' }}
				>
					<FooterLink
						href={'https://founderpad.com/legal/cookie-policy'}
						label={'Facebook'}
					/>
					<PointSeparator />
					<FooterLink
						href={'https://founderpad.com/legal/cookie-policy'}
						label={'Instagram'}
					/>
					<PointSeparator />
					<FooterLink
						href={'https://founderpad.com/legal/cookie-policy'}
						label={'Twitter'}
					/>
				</Flex>
			</Flex>
		</Flex> */}
	</React.Fragment>
);

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
