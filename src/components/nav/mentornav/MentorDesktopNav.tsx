import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, HStack } from '@chakra-ui/layout';
import CustomLink from '@components/input/Links';
import React from 'react';

const MentorDesktopNav = () => {
	return (
		<Box>
			<Flex
				bg={'gray.50'}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				minH={'40px'}
				align={'center'}
				background={'white'}
			>
				<Heading fontSize={'md'}>Mentor network</Heading>
				<HStack ml={'auto'}>
					<CustomLink
						px={2}
						href={'/investor/network'}
						fontSize={'sm'}
						fontWeight={500}
						_hover={{
							textDecoration: 'none',
							color: useColorModeValue('gray.800', 'white')
						}}
					>
						Network
					</CustomLink>
					<CustomLink
						px={2}
						href={'/investor/promoted-ideas'}
						fontSize={'sm'}
						fontWeight={500}
						_hover={{
							textDecoration: 'none',
							color: useColorModeValue('gray.800', 'white')
						}}
					>
						Promoted ideas
					</CustomLink>
				</HStack>
			</Flex>
		</Box>
	);
};

export default MentorDesktopNav;
