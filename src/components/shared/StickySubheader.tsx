import { Box } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';

const StickySubheader = ({
	children
}: {
	children: React.ReactNode;
	title?: string;
}): JSX.Element => {
	const [fixed, setIsFixed] = useState(false);

	useEffect(() => {
		function onScroll() {
			const currentPos = window.pageYOffset;
			if (currentPos >= 125) setIsFixed(true);
			else setIsFixed(false);
		}

		window.addEventListener('scroll', onScroll);
	}, [window.scrollY >= 125]);

	return (
		<Box
			position={fixed ? 'fixed' : 'static'}
			w={'full'}
			py={fixed && 2}
			px={fixed && 4}
			top={fixed && '40px'}
			left={0}
			bg={'white'}
			borderBottomWidth={fixed && 1}
			transition={fixed && 'ease .9'}
			mb={{ sm: 2 }}
			zIndex={1}
		>
			{/* {fixed && (
				<Text
					as={'header'}
					mb={1}
					fontWeight={'bold'}
					color={'fpGrey.900'}
				>
					{title}
				</Text>
			)} */}
			{children}
		</Box>
	);
};

export default memo(StickySubheader);
