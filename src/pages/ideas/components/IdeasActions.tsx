import { Flex } from '@chakra-ui/layout';
import SearchResultsLabel from 'components/shared/SearchResultsLabel';
import StickySubheader from 'components/shared/StickySubheader';
import React from 'react';
import MobileFilterMenu from './MobileFilterMenu';

const IdeasActions = ({
    total,
    pageSize
}: {
    total: number;
    pageSize: number;
}): JSX.Element => {

    return (
        <>
            <Flex
                justifyContent={'space-between'}
                alignItems={'flex-end'}
                display={{ base: 'flex', lg: 'none' }}
            >
                <StickySubheader title="All ideas">
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'flex-end'}
                    >
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
                <SearchResultsLabel
                    pageSize={pageSize}
                    limit={10}
                    total={total}
                />
            </Flex>
        </>
    );
};

export default IdeasActions;