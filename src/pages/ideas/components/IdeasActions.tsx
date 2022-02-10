import { Flex } from '@chakra-ui/layout';
// import { Label } from '@components/labels';
import { SearchResultsLabel, StickySubheader } from '@components/shared';
import React from 'react';
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
			justifyContent={'space-between'}
			alignItems={'flex-end'}
			display={{ base: 'flex', lg: 'none' }}
		>
			<StickySubheader title="All ideas">
				<Flex justifyContent={'space-between'} alignItems={'flex-end'}>
					<MobileFilterMenu />
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
			<Flex display={{ base: 'none', lg: 'flex' }} bg={'white'}>
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
