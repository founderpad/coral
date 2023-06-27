import { BoxLayout } from '@/components/layouts';
import { Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface Props {
	icon: IconType;
	link?: string;
	title: string;
	content: string;
}

export const HomeCard = (props: Props) => {
	const { icon, link, title, content } = props;

	if (link)
		return (
			<Link href={link}>
				<BoxLayout
					borderWidth="1px"
					textAlign="center"
					height="175px"
					_hover={{
						bg: 'fpLightGrey.200'
					}}
				>
					<Icon as={icon} fontSize="5xl" />
					<Text fontSize="lg" mb={2}>
						{title}
					</Text>
					<Text fontSize="sm" color="fpGrey.500">
						{content}
					</Text>
				</BoxLayout>
			</Link>
		);

	return (
		<BoxLayout
			borderWidth="1px"
			textAlign="center"
			height="175px"
			_hover={{
				bg: 'fpLightGrey.200'
			}}
		>
			<Icon as={icon} fontSize="5xl" />
			<Text fontSize="lg" mb={2}>
				{title}
			</Text>
			<Text fontSize="sm" color="fpGrey.500">
				{content}
			</Text>
		</BoxLayout>
	);
};

export default HomeCard;
