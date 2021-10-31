import { Flex } from '@chakra-ui/layout';
import { SearchResultsLabel, StickySubheader } from 'components/shared';
import React from 'react';
import MobileFilterMenu from './MobileFilterMenu';

const IdeasActions = ({
	total,
	pageSize
}: {
	total: number;
	pageSize: number;
}): JSX.Element => (
	<React.Fragment>
		<Flex
			justifyContent={'space-between'}
			alignItems={'flex-end'}
			display={{ base: 'flex', lg: 'none' }}
			mb={8}
		>
			<StickySubheader title="All ideas">
				<Flex justifyContent={'space-between'} alignItems={'flex-end'}>
					<MobileFilterMenu />
					<SearchResultsLabel
						pageSize={pageSize}
						limit={10}
						total={total}
					/>
				</Flex>
			</StickySubheader>
		</Flex>

		<Flex display={{ base: 'none', lg: 'flex' }}>
			<SearchResultsLabel pageSize={pageSize} limit={10} total={total} />
		</Flex>
	</React.Fragment>
);

export default IdeasActions;
