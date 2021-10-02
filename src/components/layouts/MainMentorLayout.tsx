import MainContainer from 'components/containers/MainContainer';
import MentorDesktopNav from 'components/nav/mentornav/MentorDesktopNav';
import React from 'react';

export const MainMentorLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	return (
		<React.Fragment>
			<MentorDesktopNav />
			<MainContainer>{children}</MainContainer>
		</React.Fragment>
	);
};

export default MainMentorLayout;
