import { GridItem, SimpleGrid, StackProps } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React, { memo } from 'react';
import { IconType } from 'react-icons/lib';
import KeyInformationBox from './KeyInformationBox';

interface IOverviewTag {
	title: string;
	value: string;
	icon?: IconType;
	direction?: StackProps['direction'];
}

/**
 * The @OverviewTags display a stack of components of key information (see idea and user profile)
 */
const OverviewTags = memo(
	({ tags }: { tags: readonly IOverviewTag[] }): JSX.Element => {
		const [isBase] = useMediaQuery('(max-width: 48em)');

		return (
			<SimpleGrid
				columns={{ base: 12 }}
				columnGap={4}
				css={{
					'> *:first-child': {
						marginBottom: isBase && '32px'
					}
				}}
				flexDirection={'column'}
			>
				{tags?.map((overviewTag, key) => (
					<GridItem
						colSpan={{ base: 4, md: 3 }}
						display={'flex'}
						flexDirection={'column'}
					>
						<KeyInformationBox key={key} {...overviewTag} />
					</GridItem>
				))}
			</SimpleGrid>
		);
	}
);

export default OverviewTags;
