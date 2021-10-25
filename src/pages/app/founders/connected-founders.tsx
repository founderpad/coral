import { Heading } from '@chakra-ui/layout';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const ConnectedFounders = (): JSX.Element => {
	return <Heading>Founders I&apos;ve connected with</Heading>;
};

export default AuthFilter(ConnectedFounders);
