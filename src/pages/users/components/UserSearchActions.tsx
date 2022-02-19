import { Flex } from '@chakra-ui/layout';
import { SearchResultsLabel, StickySubheader } from '@components/shared';
import MobileFilterMenu from '@pages/ideas/components/MobileFilterMenu';
import React from 'react';
import FounderSearchForm from './FounderSearchForm';

const UserSearchActions = ({
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
					<MobileFilterMenu title="users" form="users-filter-form">
						<FounderSearchForm />
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

export default UserSearchActions;
