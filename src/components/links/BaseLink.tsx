import { Link } from '@chakra-ui/layout';
import { LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const BaseLink = (props: LinkProps & { title: string }): JSX.Element => {
	const { href, children, color, _hover, ...rest } = props;
	return (
		<NextLink href={href} passHref>
			<Link
				{...rest}
				color={color}
				_hover={{ ..._hover, textDecoration: 'none' }}
			>
				{children}
			</Link>
		</NextLink>
	);
};

export default BaseLink;
