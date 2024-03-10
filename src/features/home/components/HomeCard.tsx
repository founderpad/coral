import { Card } from '@/components/cards/Card';
import { Icon, Text } from '@chakra-ui/react';
import React, { memo } from 'react';
import { IconType } from 'react-icons';

interface Props {
	icon: IconType;
	title: string;
	content: string;
	href?: string;
}

const HomeCard = memo(({ icon, title, content, href }: Props) => {
	return (
		<Card
			header={
				<>
					<Icon as={icon} fontSize="5xl" color="fpGrey.700" />
					<Text fontSize="lg">{title}</Text>
				</>
			}
			href={href}
			content={
				<Text fontSize="sm" color="fpGrey.500">
					{content}
				</Text>
			}
			cardProps={{
				borderWidth: '1px',
				alignItems: 'Center',
				spacing: 2
			}}
			hover
		/>
	);
});

export default HomeCard;
