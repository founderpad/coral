import { Box } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';

export const StickySubheader = memo(
	({ children }: { children: React.ReactNode; title?: string }) => {
		const [fixed, setIsFixed] = useState(false);

		useEffect(() => {
			function onScroll() {
				const currentPos = window.pageYOffset;
				if (currentPos >= 110) setIsFixed(true);
				else setIsFixed(false);
			}

			window.addEventListener('scroll', onScroll);
		}, [window.scrollY >= 110]);

		return (
			<Box
				position={fixed ? 'fixed' : 'static'}
				w={'full'}
				py={fixed ? 2 : undefined}
				px={fixed ? 4 : undefined}
				top={fixed ? 10 : undefined}
				left={0}
				bg={'white'}
				borderBottomWidth={fixed ? 1 : 0}
				transition={fixed ? 'ease .9' : undefined}
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
	}
);
