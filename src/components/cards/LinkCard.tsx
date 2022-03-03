import { FlexProps } from '@chakra-ui/react';
import { FlexLayout, StackLayout } from '@components/layouts';
import { BaseLink } from '@components/links';
import React from 'react';

interface Props {
	href: string;
	children: React.ReactNode[] | React.ReactNode;
	footer?: React.ReactNode;
	padding?: FlexProps['padding'];
}

const LinkCard = (props: Props) => {
	const { href, children, footer } = props;

	return (
		<StackLayout flex={1} spacing={0} w="full">
			<FlexLayout
				flexDirection="column"
				as={BaseLink}
				href={href}
				alignItems="flex-start"
				_hover={{
					bg: 'fpLightGrey.200'
				}}
				py={4}
				px={{ base: 0, md: 4 }}
				// px={padding ?? { base: 0, sm: 4 }}
				// px={padding ?? { base: 4, md: 0 }}
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
