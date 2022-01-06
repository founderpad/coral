import Icon from '@chakra-ui/icon';
import { Tag, TagLabel, TagLeftIcon, TagProps } from '@chakra-ui/tag';
import React from 'react';
import { IconType } from 'react-icons/lib';

type TBaseTag = TagProps & { icon?: IconType };

export const BaseTag = ({
	bg = 'transparent',
	color,
	icon,
	fontSize,
	children,
	flexDirection,
	...rest
}: TBaseTag): JSX.Element => (
	<Tag
		background={bg}
		borderWidth={1}
		color={color}
		rounded={'md'}
		alignItems={'center'}
		d={'flex'}
		{...rest}
	>
		{icon && (
			<TagLeftIcon>
				<Icon as={icon} size={'md'} />
			</TagLeftIcon>
		)}

		<TagLabel
			d={'flex'}
			flexDirection={flexDirection}
			fontSize={fontSize ?? { base: 'x-small', sm: 'xs' }}
			alignItems={'center'}
		>
			{children}
		</TagLabel>
	</Tag>
);

export default BaseTag;
