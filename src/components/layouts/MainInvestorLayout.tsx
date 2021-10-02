import MainContainer from 'components/containers/MainContainer';
import InvestorDesktopNav from 'components/nav/investornav/InvestorDesktopNav';
import React, { FC } from 'react';

export const MainInvestorLayout: FC<{ children: JSX.Element }> = ({
	children
}): JSX.Element => {
	return (
		<React.Fragment>
			<InvestorDesktopNav />
			<MainContainer>{children}</MainContainer>
		</React.Fragment>
	);
};

export default MainInvestorLayout;
