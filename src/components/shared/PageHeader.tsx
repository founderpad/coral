import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React, { memo } from 'react';

export const PageHeader = memo(
	({
		title,
		subtitle,
		fixedHeader,
		action
	}: {
		title: string;
		subtitle?: string;
		fixedHeader?: boolean;
		action?: React.ReactNode;
	}) => {
		return (
			<React.Fragment>
				<Box
					as={'header'}
					bg={'transparent'}
					p={{ base: 4 }}
					position={fixedHeader ? 'fixed' : 'inherit'}
					top={0}
					w={'full'}
				>
					<Flex
						justifyContent={'space-between'}
						alignItems={'center'}
					>
						<Heading as="h4" size="md" color={'gray.600'}>
							{title}
						</Heading>
						{action}
					</Flex>
					<Text as="h4" size="md" color={'gray.500'}>
						{subtitle}
					</Text>
				</Box>
			</React.Fragment>
		);
	}
);
