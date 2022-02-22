import { Link } from '@chakra-ui/layout';
import { LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const BaseLink = (props: LinkProps & { title: string }) => {
	const { href, children, color = 'fpPrimary.500', _hover, ...rest } = props;
	return (
		<NextLink href={href ?? ''} passHref>
			<Link
				{...rest}
				color={color}
				_hover={{ ..._hover }}
				alignItems="center"
				as="span"
			>
				{children}
			</Link>
		</NextLink>
	);
};

export default BaseLink;
