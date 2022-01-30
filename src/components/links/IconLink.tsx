import { Icon, IconProps, LinkProps } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { BaseLink } from '.';

const IconLink = (
	props: LinkProps & { title: string; icon: IconType; iconProps?: IconProps }
) => {
	const { children, icon, iconProps, ...rest } = props;
	return (
		<BaseLink {...rest}>
			<Icon {...iconProps} as={icon}>
				{children}
			</Icon>
		</BaseLink>
	);
};

export default IconLink;
