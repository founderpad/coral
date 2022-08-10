import { Loading, NoResults } from '@/components/shared';
import { useBoostedIdeasQuery } from '@/generated/api';
import { useQueryParam } from '@/hooks/util';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import BoostedIdeaCard from './BoostedIdeaCard';

const BoostedIdeasGridLayout = () => {
	// const arr = [...Array(20).keys()];

	const { data, loading } = useBoostedIdeasQuery({
		variables: {
			limit: 10,
			offset: (parseInt(useQueryParam('page')) - 1) * 10
		},
		fetchPolicy: 'network-only'
	});

	const hasResults = data?.boosted_ideas?.length ?? 0;

	if (loading) return <Loading small />;
	if (!loading && hasResults < 1) return <NoResults back />;

	return (
		<SimpleGrid
			columns={{ base: 1, md: 2 }}
			minH="full"
			rowGap={6}
			columnGap={6}
			position="relative"
			bg="white"
			p={{ base: 4, md: 0 }}
		>
			{data?.boosted_ideas?.map((bi) => (
				<GridItem
					borderWidth={1}
					rounded={{ base: 'none', lg: 'md' }}
					key={bi.ideaId}
				>
					<BoostedIdeaCard {...bi}></BoostedIdeaCard>
				</GridItem>
			))}
		</SimpleGrid>
	);
};

export default BoostedIdeasGridLayout;
