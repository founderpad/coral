import { SubheadingText } from 'components/heading';
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
	icon,
	small
}: {
	title: string;
	value: string;
	icon?: IconType;
	small?: boolean;
}): JSX.Element => (
	<StackLayout
		spacing={1}
		p={small ? 0 : 4}
		boxShadow={'sm'}
		background={'gray.50'}
		rounded={'md'}
		alignItems={'center'}
		display={{ base: 'none', md: 'flex' }}
	>
		<SubheadingText
			label={value}
			icon={icon}
			color={'fpGrey.900'}
			size={'sm'}
		/>
		<Label label={title} color={'fpGrey.300'} />
	</StackLayout>
);

export default KeyInformationBox;
