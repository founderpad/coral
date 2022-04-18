import { Link } from '@chakra-ui/react';
import Router from 'next/router';
import React from 'react';

export const GoBackButton = ({ mb = 4 }) => (
	<Link onClick={Router.back} color="fpPrimary.500" fontSize="xs" mb={mb}>
		{`< Back`}
	</Link>
);
