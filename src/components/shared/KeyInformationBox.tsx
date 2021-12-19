import Icon from '@chakra-ui/icon';
import { Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
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
	<StackLayout
		alignItems={'center'}
		spacing={4}
		rounded={'sm'}
		direction={'row'}
		color={'fpPrimary.900'}
		fontSize={'x-large'}
		h={'60px'}
		justifyContent={'center'}
	>
		{icon && <Icon as={icon} color={'fpPrimary.500'} />}
		<FlexLayout flexDirection={'column'}>
			<Label fontWeight={'medium'} color={'gray.900'}>
				{value}
			</Label>
			<Label color={'gray.400'} fontSize={'xs'}>
				{title}
			</Label>
		</FlexLayout>
	</StackLayout>
);

export default KeyInformationBox;
