import { Icon, Text } from '@chakra-ui/react';
import { StackLayout } from '@components/layouts';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { PointSeparator } from '..';

interface Props {
	name: string;
	size: number;
}

export const AttachedFile = (props: Props) => {
	const { name, size } = props;
	return (
		<StackLayout direction={'row'} spacing={0} alignItems={'center'}>
			<Icon
				as={IoCheckmarkCircleSharp}
				mr={2}
				color={'green.500'}
				fontSize={'large'}
			/>
			<Text color={'fpGrey.900'} fontSize={'smaller'}>
				{name}
			</Text>
			<PointSeparator small />
			<Text color={'fpGrey.500'} fontSize={'xs'}>
				{size}b
			</Text>
		</StackLayout>
	);
};

export default AttachedFile;
