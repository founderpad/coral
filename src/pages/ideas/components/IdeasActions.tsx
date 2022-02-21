import { Flex } from '@chakra-ui/layout';
import { SearchResultsLabel, StickySubheader } from '@components/shared';
import React from 'react';
import IdeasSearchForm from './IdeasSearchForm';
import MobileFilterMenu from './MobileFilterMenu';

const IdeasActions = ({
	total,
	pageSize
}: // hasResults = false
{
	total: number;
	pageSize: number;
	// hasResults?: boolean;
}) => (
	<React.Fragment>
		<Flex
			justifyContent="space-between"
			alignItems="flex-end"
			display={{ base: 'flex', lg: 'none' }}
		>
			<StickySubheader title="All ideas">
				<Flex justifyContent="space-between" alignItems="flex-end">
					<MobileFilterMenu title="ideas" form="idea-filter-form">
						<IdeasSearchForm />
					</MobileFilterMenu>

					<SearchResultsLabel
						labelProps={{
							display: { base: 'flex', lg: 'none' }
						}}
						pageSize={pageSize}
						limit={10}
						total={total}
					/>
				</Flex>
			</StickySubheader>
		</Flex>

		<SearchResultsLabel
			labelProps={{
				display: { base: 'none', lg: 'flex' }
			}}
			pageSize={pageSize}
			limit={10}
			total={total}
		/>
	</React.Fragment>
);

export default IdeasActions;
