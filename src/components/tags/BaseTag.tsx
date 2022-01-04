import Icon from '@chakra-ui/icon';
import { Tag, TagLabel, TagLeftIcon, TagProps } from '@chakra-ui/tag';
import React from 'react';
import { IconType } from 'react-icons/lib';

type TBaseTag = TagProps & { icon?: IconType };

export const BaseTag = (props: TBaseTag): JSX.Element => (
	<Tag
		background={props.bg ?? 'transparent'}
		borderWidth={1}
		color={props.color}
		rounded={'md'}
		alignItems={'center'}
		d={'flex'}
		{...props}
	>
		{props.icon && (
			<TagLeftIcon>
				<Icon as={props.icon} size={'md'} />
			</TagLeftIcon>
		)}

		<TagLabel fontSize={props.fontSize ?? { base: 'x-small', sm: 'xs' }}>
			{props.children}
		</TagLabel>
	</Tag>
);

export default BaseTag;
