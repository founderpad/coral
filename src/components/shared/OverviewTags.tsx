import { StackLayout } from 'components/layouts';
import React, { memo } from 'react';
import { IconType } from 'react-icons/lib';
import KeyInformationBox from './KeyInformationBox';

interface IOverviewTag {
	title: string;
	value: string;
	icon?: IconType;
	// icon?: {
	// 	type: IconType;
	// 	color: ColorProps['color'];
	// };
}

/**
 * The @OverviewTags display a stack of components of key information (see idea and user profile)
 */
const OverviewTags = memo(
	({ tags }: { tags: Array<IOverviewTag> }): JSX.Element => (
		<StackLayout
			direction={{ base: 'column', lg: 'row' }}
			spacing={{ base: 0, lg: 12 }}
			alignItems={{ base: 'flex-start', lg: 'center' }}
		>
			{tags?.map((overviewTag, key) => {
				return (
					<KeyInformationBox
						key={key}
						title={overviewTag.title}
						value={overviewTag.value}
						icon={overviewTag.icon}
					/>
				);
			})}
		</StackLayout>
	)
);

export default OverviewTags;
