import { PrimaryLink } from 'components/links';
import React from 'react';

export const SeeMoreLink = ({ href }: { href: string }): JSX.Element => (
	<PrimaryLink href={href} title={'See more'}>
		see more &gt;
	</PrimaryLink>
);
