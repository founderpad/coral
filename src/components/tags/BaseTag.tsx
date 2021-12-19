import { Tag, TagLabel, TagProps } from '@chakra-ui/tag';
import React from 'react';

export const BaseTag = (props: TagProps): JSX.Element => (
	<Tag
		background={props.bg}
		borderWidth={1}
		color={props.color}
		rounded={'sm'}
		d={'flex'}
		{...props}
	>
		<TagLabel fontSize={props.fontSize ?? 'smaller'} fontWeight={'light'}>
			{props.children}
		</TagLabel>
	</Tag>
);

export default BaseTag;
