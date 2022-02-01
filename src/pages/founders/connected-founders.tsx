import { Heading } from '@chakra-ui/layout';
import AuthFilter from '@utils/AuthFilter';
import React from 'react';

const ConnectedFounders = () => {
	return <Heading>Founders I&apos;ve connected with</Heading>;
};

export default AuthFilter(ConnectedFounders);
