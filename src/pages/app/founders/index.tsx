import { Heading } from '@chakra-ui/layout';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const Founders = (): JSX.Element => {
	return <Heading>Search founders</Heading>;
};

export default AuthFilter(Founders);
