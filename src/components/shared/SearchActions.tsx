import { Flex } from '@chakra-ui/layout';
import { FlexLayout } from '@/components/layouts';
import { SearchResultsLabel, StickySubheader } from '@/components/shared';
import React from 'react';

type TSearchActions = {
	total?: number;
	pageSize?: number;
	children: React.ReactNode;
};

const SearchActions = ({
	total = 0,
	pageSize = 0,
	children
}: TSearchActions) => (
	<React.Fragment>
		<FlexLayout
			justifyContent="space-between"
			alignItems="flex-end"
			display={{ base: 'flex', md: 'none' }}
		>
			<StickySubheader title="All users">
				<Flex justifyContent="space-between" alignItems="flex-end">
					{children}

					<SearchResultsLabel
						labelProps={{
							display: { base: 'flex', lg: 'none' },
							px: 2
						}}
						pageSize={pageSize}
						limit={10}
						total={total}
					/>
				</Flex>
			</StickySubheader>
		</FlexLayout>

		<SearchResultsLabel
			labelProps={{
				display: { base: 'none', md: 'flex' }
			}}
			pageSize={pageSize}
			limit={10}
			total={total}
		/>
	</React.Fragment>
);

export default SearchActions;
