import { Label, SubLabel } from 'components/labels';
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
	<StackLayout
		alignItems={'center'}
		spacing={1}
		bg={'gray.50'}
		p={4}
		rounded={'sm'}
	>
		<Label
			icon={icon}
			fontWeight={'medium'}
			display={{ base: 'none', md: 'flex' }}
		>
			{value}
		</Label>
		<SubLabel color={'gray.400'}>{title}</SubLabel>
	</StackLayout>
);

export default KeyInformationBox;
