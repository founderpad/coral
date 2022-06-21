import { StackProps } from '@chakra-ui/layout';
// import { Icon } from '@chakra-ui/react';
import { Label } from '@/components/labels';
import { FlexLayout } from '@/components/layouts';
import BaseTag from '@/components/tags/BaseTag';
import React, { memo } from 'react';
import { IconType } from 'react-icons/lib';

interface IOverviewTag {
	title?: string;
	value?: string | undefined | null;
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
				{tags?.map(({ title, value = 'Not selected' }) => (
					// <BaseTag
					// 	key={title}
					// 	p={2}
					// 	display="flex""
					// 	flexDirection="column"
					// 	bg="fpPrimary.50"
					// 	borderWidth={0}
					// 	justifyContent="flex-start"
					// >
					// 	<Label
					// 		fontSize="xs"
					// 		alignItems="center"
					// 		mb={1}
					// 		display="flex"
					// 		color="fpPrimary.700"
					// 	>
					// 		{value}
					// 	</Label>
					// 	<Label color="gray.400" fontSize="xs">
					// 		{title}
					// 	</Label>
					// </BaseTag>
					<BaseTag
						key={title}
						p={3}
						display="flex"
						flexDirection="column"
						// bg="fpPrimary.50"
						borderWidth={1}
						justifyContent="flex-start"
					>
						<Label
							fontSize="xs"
							alignItems="center"
							mb={1}
							display="flex"
							// color="fpPrimary.700"
							color="black"
						>
							{value}
						</Label>
						<Label color="fpGrey.300" fontSize="xs">
							{title}
						</Label>
					</BaseTag>
				))}
			</FlexLayout>
		);
	}
);

export default OverviewTags;
