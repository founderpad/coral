import { Tag, TagLabel, TagProps } from '@chakra-ui/tag';
import React from 'react';

export const BaseTag = (props: TagProps): JSX.Element => (
	<Tag background={props.bg} borderWidth={1} color={props.color}>
		<TagLabel fontSize={'xs'} fontWeight={'light'}>
			{props.children}
		</TagLabel>
	</Tag>
);

export default BaseTag;
