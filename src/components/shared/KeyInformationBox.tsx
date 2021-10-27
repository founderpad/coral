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
	icon
}: {
	title: string;
	value: string | number;
	icon?: IconType;
}): JSX.Element => {
	return (
		<StackLayout
			spacing={1}
			p={4}
			boxShadow={'sm'}
			background={'gray.50'}
			rounded={'md'}
			alignItems={'center'}
			justifyContent={'center'}
			display={{ base: 'none', md: 'flex' }}
		>
			<SubheadingText
				label={value}
				icon={icon}
				size={'xs'}
				textAlign={'center'}
				fontWeight={'light'}
			/>
			<Label label={title} color={'gray.400'} fontSize={'xs'} />
		</StackLayout>
	);
};

export default KeyInformationBox;
