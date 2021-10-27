import MainNav from 'components/nav/mainnav/MainNav';
import React, { FC } from 'react';
import MainContainer from '../containers/MainContainer';

export const MainLayout: FC<{ children: JSX.Element }> = ({
	children
}): JSX.Element => (
	<React.Fragment>
		<MainNav />
		<MainContainer>{children}</MainContainer>
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
