import { Tag, TagLabel } from '@chakra-ui/tag';
import React, { memo } from 'react';

const HighlightTag = memo(
	({ value }: { value: string | number }): JSX.Element => (
		<Tag
			background={'gray.50'}
			borderWidth={1}
			color={'fpGrey.900'}
			// mb={1}
			mr={1}
		>
			<TagLabel fontSize={'xs'} fontWeight={'normal'}>
				{value}
			</TagLabel>
		</Tag>
	)
);

export default HighlightTag;
