import { Stack } from '@chakra-ui/layout';
import { SubheadingText } from 'components/heading';
import { Label } from 'components/labels';
import React from 'react';
import { IconType } from 'react-icons/lib';

const IdeaHighlight = ({
	title,
	value,
	icon
}: {
	title: string;
	value: string;
	icon?: IconType;
}): JSX.Element => {
	return (
		// <BoxLayout
		// 	flexDirection={'column'}
		// 	borderWidth={1}
		// 	boxShadow={'sm'}
		// 	alignItems={'center'}
		// 	background={'fpLightGrey.100'}
		// >
		// 	<Label label={title} />
		// 	<SubheadingText label={value} mt={4} />
		// </BoxLayout>
		<Stack
			spacing={1}
			p={4}
			boxShadow={'sm'}
			background={'fpLightGrey.100'}
			rounded={'md'}
			alignItems={'center'}
		>
			<Label icon={icon} label={title} />
			<SubheadingText label={value} />
		</Stack>
	);
};

export default IdeaHighlight;
