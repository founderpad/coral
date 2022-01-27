import React from 'react';
import UserPersonalDetails from './UserPersonalDetails';

const AboutTab = () => {
	return (
		<UserPersonalDetails mb={8} display={{ base: 'flex', md: 'none' }} />
	);
};

export default AboutTab;
