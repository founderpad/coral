import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import React from 'react';
import { IoFlagSharp } from 'react-icons/io5';

const Report = () => {
	return (
		<IconButton aria-label={'report-button'}>
			<Icon as={IoFlagSharp} />
		</IconButton>
	);
};

export default Report;
