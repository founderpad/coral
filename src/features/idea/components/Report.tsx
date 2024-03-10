import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { IoFlagSharp } from '@/components/icons';
import React, { memo } from 'react';

const Report = memo(() => {
	return (
		<IconButton aria-label="report-button">
			<Icon as={IoFlagSharp} />
		</IconButton>
	);
});

export default Report;
