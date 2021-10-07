import { LinkProps, useColorModeValue } from '@chakra-ui/react';
import { BaseLink } from 'components/links';
import React from 'react';

const NavLink = (props: LinkProps): JSX.Element => {
	const { children, _hover, ...rest } = props;
	return (
		<BaseLink
			{...rest}
			_hover={
				_hover ?? {
					textDecoration: 'none',
					color: useColorModeValue('fpGrey.900', 'white')
				}
			}
			fontSize={'sm'}
			fontWeight={500}
			title={'Navigation link'}
		>
			{children}
		</BaseLink>
	);
};

export default NavLink;
