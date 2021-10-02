import { Link } from '@chakra-ui/react';
import Router from 'next/router';
import React from 'react';

const GoBackButton = (): JSX.Element => {
	return (
		<Link
			onClick={() => Router.back()}
			color={'fpPrimary.500'}
			fontSize={'sm'}
		>
			Go back
		</Link>
	);
};

export default GoBackButton;
