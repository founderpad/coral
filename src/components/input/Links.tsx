import { Link, LinkProps } from '@chakra-ui/layout';
import NextLink from 'next/link';
import React from 'react';

const CustomLink = (props: LinkProps): JSX.Element => {
	const { href, fontSize, color, children } = props;

	return (
		<NextLink href={href} passHref>
			<Link {...props} color={color} fontSize={fontSize}>
				{children}
			</Link>
		</NextLink>
	);
};

export default CustomLink;
