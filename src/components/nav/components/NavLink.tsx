import { LinkProps, useColorModeValue } from '@chakra-ui/react';
import { BaseLink } from '@/components/links';
import React from 'react';

const NavLink = (props: LinkProps) => {
	const { children, _hover, title = 'Navigation link', ...rest } = props;
	const hoverColor = useColorModeValue('fpGrey.900', 'white');

	return (
		<BaseLink
			{...rest}
			_hover={
				_hover ?? {
					textDecoration: 'none',
					color: hoverColor
				}
			}
			fontSize="sm"
			fontWeight={500}
			title={title}
		>
			{children}
		</BaseLink>
	);
};

export default NavLink;
