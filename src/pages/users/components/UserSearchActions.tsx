import { Flex } from '@chakra-ui/layout';
import { SearchResultsLabel, StickySubheader } from '@components/shared';
import MobileFilterMenu from '@pages/ideas/components/MobileFilterMenu';
import React from 'react';
import FounderSearchForm from './UsersSearchForm';

const UserSearchActions = ({
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
			<StickySubheader title="All users">
				<Flex justifyContent="space-between" alignItems="flex-end">
					<MobileFilterMenu title="users" form="users-filter-form">
						<FounderSearchForm />
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

export default UserSearchActions;
