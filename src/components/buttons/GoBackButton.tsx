import { Link } from '@chakra-ui/react';
import Router from 'next/router';
import React from 'react';

export const GoBackButton = () => (
	<Link
		onClick={() => Router.back()}
		color={'fpPrimary.500'}
		fontSize={'xs'}
		mb={4}
	>
		{`< Back`}
	</Link>
);
