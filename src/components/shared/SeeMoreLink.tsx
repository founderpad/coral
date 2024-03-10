import { PrimaryLink } from '@/components/links';
import React from 'react';

const SeeMoreLink = ({ href, label }: { href: string; label?: string }) => (
	<PrimaryLink href={href} title={`See more ${label ?? ' more'}`}>
		see {label ?? ' more'} &gt;
	</PrimaryLink>
);

export default SeeMoreLink;
