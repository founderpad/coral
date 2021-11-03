import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
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
	<StackLayout alignItems={'center'} spacing={1} bg={'gray.50'} p={4}>
		<Label
			fontSize={'sm'}
			icon={icon}
			fontWeight={'medium'}
			display={{ base: 'none', md: 'flex' }}
		>
			{value}
		</Label>
		<Label color={'gray.500'} fontSize={'sm'}>
			{title}
		</Label>
	</StackLayout>
);

export default KeyInformationBox;
