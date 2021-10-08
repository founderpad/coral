import { SubheadingText } from 'components/heading';
import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import React from 'react';
import { IconType } from 'react-icons/lib';

/**
 * The @IdeaHighlight component displays a a highlight piece of information for the idea on the idea page.
 * @param param0
 * @returns
 */
const IdeaHighlight = ({
	title,
	value,
	icon
}: {
	title: string;
	value: string;
	icon?: IconType;
}): JSX.Element => (
	<StackLayout
		spacing={1}
		p={4}
		boxShadow={'sm'}
		background={'gray.50'}
		rounded={'md'}
		alignItems={'center'}
		display={{ base: 'none', md: 'flex' }}
	>
		<SubheadingText label={value} icon={icon} color={'fpGrey.900'} />
		<Label label={title} color={'fpGrey.300'} />
	</StackLayout>
);

export default IdeaHighlight;
