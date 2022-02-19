import { Flex } from '@chakra-ui/layout';
import { SubmitButton } from '@components/buttons';
import { SearchResultsLabel, StickySubheader } from '@components/shared';
import React from 'react';
import IdeasSearchForm from './IdeasSearchForm';
import MobileFilterMenu from './MobileFilterMenu';

const IdeasActions = ({
	total,
	pageSize,
	hasResults = false
}: {
	total: number;
	pageSize: number;
	hasResults?: boolean;
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
						<SubmitButton
							display={{ base: 'none', sm: 'flex' }}
							name="filter-search-button"
							// form="idea-filter-form"
							label="Show results"
							title="Filter ideas"
						/>
					</MobileFilterMenu>
					{hasResults && (
						<SearchResultsLabel
							pageSize={pageSize}
							limit={10}
							total={total}
						/>
					)}
				</Flex>
			</StickySubheader>
		</Flex>

		{hasResults && (
			<Flex display={{ base: 'none', lg: 'flex' }} bg="white">
				<SearchResultsLabel
					pageSize={pageSize}
					limit={10}
					total={total}
				/>
			</Flex>
		)}
	</React.Fragment>
);

export default IdeasActions;
