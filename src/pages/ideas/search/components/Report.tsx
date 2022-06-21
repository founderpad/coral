import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { IoFlagSharp } from '@/components/icons';
import React from 'react';

const Report = () => {
	return (
		<IconButton aria-label="report-button">
			<Icon as={IoFlagSharp} />
		</IconButton>
	);
};

export default Report;
