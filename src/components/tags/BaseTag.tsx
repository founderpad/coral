import Icon from '@chakra-ui/icon';
import { Tag, TagLabel, TagLeftIcon, TagProps } from '@chakra-ui/tag';
import React from 'react';
import { IconType } from 'react-icons/lib';

type TBaseTag = TagProps & { icon?: IconType; iconColor?: TagProps['color'] };

export const BaseTag = ({
	bg = 'transparent',
	color,
	icon,
	iconColor = 'fpPrimary.500',
	fontSize,
	children,
	flexDirection,
	...rest
}: TBaseTag) => (
	<Tag
		background={bg}
		borderWidth={1}
		color={color}
		rounded="md"
		alignItems="center"
		display="flex"
		{...rest}
	>
		{icon && (
			<TagLeftIcon>
				<Icon as={icon} size="md" color={iconColor} />
			</TagLeftIcon>
		)}

		<TagLabel
			display="flex"
			flexDirection={flexDirection}
			fontSize={fontSize ?? { base: 'x-small', sm: 'xs' }}
			alignItems="center"
		>
			{children}
		</TagLabel>
	</Tag>
);

export default BaseTag;
