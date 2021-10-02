import { Box } from '@chakra-ui/layout';
import React, { memo } from 'react';

export const Footer = memo(() => {
	return (
		<Box
			as="footer"
			h="48px"
			p={3}
			borderTopWidth="1px"
			borderTopColor={'gray.200'}
		>
			footer
		</Box>
	);
});

export default Footer;
