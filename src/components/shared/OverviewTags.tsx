import { StackProps } from '@chakra-ui/layout';
import { StackLayout } from 'components/layouts';
import React, { memo } from 'react';
import { IconType } from 'react-icons/lib';
import KeyInformationBox from './KeyInformationBox';

interface IOverviewTag {
	title: string;
	value: string;
	icon?: IconType;
}

/**
 * The @OverviewTags display a stack of components of key information (see idea and user profile)
 */
const OverviewTags = memo(
	({
		tags,
		direction
	}: {
		tags: readonly IOverviewTag[];
		direction?: StackProps['direction'];
	}): JSX.Element => {
		return (
			<StackLayout
				direction={direction ?? { base: 'column', lg: 'row' }}
				spacing={{ base: 0, lg: 12 }}
				alignItems={{ base: 'flex-start', lg: 'center' }}
			>
				{tags?.map((overviewTag, key) => (
					<KeyInformationBox key={key} {...overviewTag} />
				))}
			</StackLayout>
		);
	}
);

export default OverviewTags;
