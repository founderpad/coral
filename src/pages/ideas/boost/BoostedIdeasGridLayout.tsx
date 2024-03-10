import { Loading, NoResults } from '@/components/shared';
import { useBoostedIdeasQuery } from '@/generated/api';
import { useQueryParam } from '@/hooks/util';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import OffsetPagination from '../../../components/shared/OffsetPagination';
import BoostedIdeaCard from './BoostedIdeaCard';

const BoostedIdeasGridLayout = () => {
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
		<>
			<SimpleGrid
				columns={{ base: 1, md: 4 }}
				minH="full"
				position="relative"
				bg="white"
				p={{ base: 4, md: 0 }}
				flex={{ md: 1 }}
			>
				{data?.boosted_ideas?.map((bi) => (
					<GridItem
						key={bi.ideaId}
						borderBottomWidth={{ base: 1, md: 0 }}
						display="block"
					>
						<BoostedIdeaCard {...bi}></BoostedIdeaCard>
					</GridItem>
				))}
			</SimpleGrid>
			{hasResults && (
				<OffsetPagination
					pagesCount={
						(data?.boosted_ideas_aggregate?.aggregate?.count || 0) /
						10
					}
					pathname="/ideas/boost"
				/>
			)}
		</>
	);
};

export default BoostedIdeasGridLayout;
