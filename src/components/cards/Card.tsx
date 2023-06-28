import { StackProps } from '@chakra-ui/react';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { BaseLink } from '@/components/links';
import React, { memo } from 'react';
import Link from 'next/link';

interface Props {
	href: string;
	children: React.ReactNode[] | React.ReactNode;
	footer?: React.ReactNode;
	cardProps?: StackProps;
}

const LinkCard = (props: Props) => {
	const { href, children, footer } = props;

	return (
		<StackLayout flex={1} spacing={4} w="full" {...props.cardProps}>
			<FlexLayout
				flexDirection="column"
				as={BaseLink}
				href={href}
				alignItems="flex-start"
				_hover={{
					bg: 'fpLightGrey.200'
				}}
				p={4}
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

interface CardProps {
	header?: JSX.Element;
	content?: JSX.Element;
	footer?: JSX.Element;
	href?: string;
	cardProps?: StackProps;
	hover?: boolean;
}

export const Card = memo((props: CardProps) => {
	const { header, content, footer, href, cardProps, hover } = props;

	const handleFooterClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
	};

	const renderCardContent = () => (
		<>
			{header}
			{content}
			{footer && <div onClick={handleFooterClick}>{footer}</div>}
		</>
	);

	return (
		<StackLayout
			as={href ? Link : 'div'}
			href={href}
			_hover={
				href || hover
					? { backgroundColor: 'fpLightGrey.200' }
					: undefined
			}
			p={4}
			rounded="md"
			{...cardProps}
		>
			{renderCardContent()}
		</StackLayout>
	);
});
