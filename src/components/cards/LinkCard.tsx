import { FlexLayout, StackLayout } from '@components/layouts';
import { BaseLink } from '@components/links';
import React from 'react';

interface Props {
	href: string;
	children: React.ReactNode[];
	footer?: React.ReactNode;
}

const LinkCard = (props: Props) => {
	const { href, children, footer } = props;

	return (
		<StackLayout flex={1} spacing={0}>
			<FlexLayout
				flexDirection="column"
				as={BaseLink}
				href={href}
				alignItems="flex-start"
				_hover={{
					bg: 'fpLightGrey.200'
				}}
				py={4}
				px={{ base: 0, sm: 4 }}
				flex={1}
				rounded="md"
				position="relative"
			>
				{children}
			</FlexLayout>
			{footer}
		</StackLayout>
	);
};

export default LinkCard;
