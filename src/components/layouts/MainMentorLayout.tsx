import React from 'react';

export const MainMentorLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<React.Fragment>
			{/* <MentorDesktopNav /> */}
			{children}
		</React.Fragment>
	);
};

export default MainMentorLayout;
