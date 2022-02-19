import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import { StackLayout } from './StackLayout';

const SearchContentGridLayout = ({
	children
}: {
	children: React.ReactChild[];
}) => (
	<Grid templateColumns="repeat(7, 1fr)" minH={'full'} rowGap={6} flex={1}>
		<GridItem
			display={{ base: 'none', md: 'block' }}
			colSpan={{ md: 3, lg: 2 }}
			position={'relative'}
			pr={0}
		>
			<StackLayout
				p={6}
				display={{ base: 'none', md: 'flex' }}
				h={'full'}
				bg={'white'}
				spacing={1}
				borderRightWidth={1}
				borderRightColor={'gray.100'}
				rounded={'none'}
			>
				{children[0]}
			</StackLayout>
		</GridItem>
		<GridItem
			colSpan={{ base: 7, md: 4, lg: 5 }}
			position={'relative'}
			display={'flex'}
			flexDirection={'column'}
		>
			{children[1]}
			{children?.[2]}
		</GridItem>
	</Grid>
);

export default SearchContentGridLayout;
