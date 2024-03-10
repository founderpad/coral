import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import { StackLayout } from '.';

interface SearchContentGridLayoutProps {
	search: React.ReactNode;
	children: React.ReactNode;
}

const SearchContentGridLayout = ({
	search,
	children
}: SearchContentGridLayoutProps) => (
	<Grid
		templateColumns="repeat(7, 1fr)"
		minH="full"
		rowGap={6}
		flex={1}
		bg="#f9f8f8"
		position="relative"
	>
		<GridItem
			display={{ base: 'none', md: 'block' }}
			colSpan={{ md: 3, lg: 2 }}
			mr={4}
		>
			<StackLayout
				p={6}
				display={{ base: 'none', md: 'flex' }}
				h="full"
				spacing={1}
				bg="white"
				rounded={{ base: 'none', lg: 'md' }}
				borderWidth={{ base: 0, lg: 1 }}
				borderColor="fpLightGrey.900"
				position="sticky"
				top={0}
			>
				{search}
			</StackLayout>
		</GridItem>
		<GridItem
			colSpan={{ base: 7, md: 4, lg: 5 }}
			display="flex"
			flexDirection="column"
			bg="white"
			rounded={{ base: 'none', lg: 'md' }}
			borderWidth={{ base: 0, lg: 1 }}
			borderColor="fpLightGrey.900"
		>
			{children}
		</GridItem>
	</Grid>
);

export default SearchContentGridLayout;
