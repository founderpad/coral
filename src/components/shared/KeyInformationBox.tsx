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
	<StackLayout
		spacing={1}
		p={4}
		background={'gray.50'}
		borderWidth={1}
		borderColor={'gray.100'}
		rounded={'md'}
		alignItems={'center'}
		justifyContent={'center'}
		display={{ base: 'none', md: 'flex' }}
	>
		<Label
			label={value}
			fontSize={'md'}
			icon={icon}
			fontWeight={'medium'}
		/>
		<Label label={title} color={'gray.500'} fontSize={'sm'} />
	</StackLayout>
);

export default KeyInformationBox;
