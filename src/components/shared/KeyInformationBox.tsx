import Icon from '@chakra-ui/icon';
import { Label } from 'components/labels';
import React from 'react';
import { IconType } from 'react-icons/lib';

/**
 * The @KeyInformationBox component displays a a highlight piece of information for the idea on the idea page.
 * @param param0
 * @returns
 */
const KeyInformationBox = ({
	title,
	value,
	icon
}: {
	title: string;
	value: string | number;
	icon?: IconType;
}): JSX.Element => (
	// <StackLayout
	// 	alignItems={'center'}
	// 	spacing={4}
	// 	rounded={'sm'}
	// 	direction={'row'}
	// 	color={'fpPrimary.900'}
	// 	fontSize={'x-large'}
	// 	h={'60px'}
	// 	justifyContent={'center'}
	// 	p={4}
	// 	bg={'gray.50'}
	// 	boxShadow={'sm'}
	// >
	// 	<FlexLayout flexDirection={'column'} alignItems={'center'}>
	// 		{icon && (
	// 			<Icon
	// 				as={icon}
	// 				fontSize={'lg'}
	// 				color={'fpPrimary.500'}
	// 				mb={2}
	// 			/>
	// 		)}
	// 		<Label fontWeight={'medium'} color={'gray.900'}>
	// 			{value}
	// 		</Label>
	// 		<Label color={'gray.400'} fontSize={'xs'}>
	// 			{title}
	// 		</Label>
	// 	</FlexLayout>
	// </StackLayout>

	// <FlexLayout
	// 	flexDirection={'column'}
	// 	alignItems={'center'}
	// 	flex={1}
	// >
	<React.Fragment>
		{icon && (
			<Icon
				as={icon}
				fontSize={'x-large'}
				color={'fpPrimary.500'}
				mb={2}
				mx={'auto'}
			/>
		)}
		<Label fontWeight={'medium'} color={'gray.900'}>
			{value}
		</Label>
		<Label color={'gray.400'} fontSize={'xs'}>
			{title}
		</Label>
	</React.Fragment>
	// </FlexLayout>
);

export default KeyInformationBox;
