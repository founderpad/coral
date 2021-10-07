import { Tag, TagLabel } from '@chakra-ui/tag';
import React, { memo } from 'react';

const HighlightTag = memo(
	({ value }: { value: string }): JSX.Element => (
		<Tag
			bg={'transparent'}
			borderWidth={1}
			color={'fpPrimary.500'}
			mb={1}
			mr={1}
		>
			<TagLabel fontSize={'xs'} fontWeight={'normal'}>
				{value}
			</TagLabel>
		</Tag>
	)
);

export default HighlightTag;
