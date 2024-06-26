import { Tag, TagLabel } from '@chakra-ui/tag';
import React, { memo } from 'react';

export const HighlightTag = memo(({ value }: { value: string | number }) => (
	<Tag background="gray.50" borderWidth={1} color="black" mr={1} mb={1}>
		<TagLabel fontSize="xs" fontWeight="normal">
			{value}
		</TagLabel>
	</Tag>
));

export default HighlightTag;
