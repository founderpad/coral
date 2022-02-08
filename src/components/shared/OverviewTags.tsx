import { StackProps } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import BaseTag from '@components/tags/BaseTag';
import React, { memo } from 'react';
import { IconType } from 'react-icons/lib';

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
	({ tags }: { tags: Readonly<Array<IOverviewTag>> }) => {
		// const [isBase] = useMediaQuery('(max-width: 48em)');

		return (
			<FlexLayout
				css={{
					'> *': {
						marginRight: 8,
						marginBottom: 8
					}
				}}
			>
				{tags?.map((overviewTag) => (
					<BaseTag
						key={overviewTag.title}
						p={2}
						d={'flex'}
						flexDirection={'column'}
						bg={'gray.50'}
						borderWidth={0}
						justifyContent={'flex-start'}
					>
						<Label
							fontSize={'xs'}
							color={'fpPrimary.700'}
							alignItems={'center'}
							mb={1}
							display={'flex'}
						>
							<Icon as={overviewTag.icon} mr={2} />
							{overviewTag.value}
						</Label>
						<Label color={'gray.400'} fontSize={'xs'}>
							{overviewTag.title}
						</Label>
					</BaseTag>
				))}
			</FlexLayout>
		);
	}
);

export default OverviewTags;
