import { Tag, TagLabel, TagProps } from '@chakra-ui/tag';
import React from 'react';

export const BaseTag = (props: TagProps): JSX.Element => (
	<Tag
		background={props.bg}
		borderWidth={1}
		color={props.color}
		borderColor={'gray.100'}
	>
		<TagLabel fontSize={'xs'} fontWeight={'normal'}>
			{props.children}
		</TagLabel>
	</Tag>
);

export default BaseTag;
