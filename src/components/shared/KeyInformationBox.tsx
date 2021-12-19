import Icon from '@chakra-ui/icon';
import { CaptionLabel, Label } from 'components/labels';
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
	icon: {
		type: IconType;
		color: string;
	};
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
		{icon && <Icon as={icon.type} color={icon.color} />}
		<FlexLayout flexDirection={'column'}>
			<Label
				fontWeight={'medium'}
				// display={{ base: 'none', md: 'flex' }}
				color={'gray.900'}
			>
				{value}
			</Label>
			<CaptionLabel color={'gray.400'}>{title}</CaptionLabel>
		</FlexLayout>
	</StackLayout>
);

export default KeyInformationBox;
