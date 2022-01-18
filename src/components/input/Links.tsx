import { Link, LinkProps } from '@chakra-ui/layout';
import NextLink from 'next/link';
import React from 'react';

export const CustomLink = (props: LinkProps) => {
	const { href, fontSize, color, children } = props;

	return (
		<NextLink href={new URL(href ?? '')} passHref>
			<Link {...props} color={color} fontSize={fontSize}>
				{children}
			</Link>
		</NextLink>
	);
};

export default CustomLink;
