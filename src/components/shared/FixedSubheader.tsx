import { Box } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';

export const FixedSubheader = memo(
	({
		children,
		scrollOffset,
		topOffset
	}: {
		children: React.ReactNode;
		scrollOffset?: number;
		topOffset?: number;
	}) => {
		const [fixed, setIsFixed] = useState(false);
		const DEFAULT_OFFSET = 120;
		const isFixed = window.scrollY > DEFAULT_OFFSET;

		useEffect(() => {
			function onScroll() {
				if (window.pageYOffset >= (scrollOffset || DEFAULT_OFFSET))
					setIsFixed(true);
				else setIsFixed(false);
			}

			window.addEventListener('scroll', onScroll);
		}, [isFixed, scrollOffset]);

		return (
			<Box
				position={fixed ? 'fixed' : 'static'}
				w="full"
				py={fixed ? 2 : 0}
				px={fixed ? 4 : 0}
				top={fixed ? topOffset || 10 : 'initial'}
				left={0}
				bg="white"
				borderBottomWidth={fixed ? 1 : 0}
				transition="ease .9"
				zIndex={1}
			>
				{children}
			</Box>
		);
	}
);
