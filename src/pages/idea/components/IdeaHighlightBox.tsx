import { SubheadingText } from 'components/heading';
import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
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
		<React.Fragment>
			<StackLayout
				spacing={1}
				p={4}
				boxShadow={'sm'}
				background={'gray.50'}
				rounded={'md'}
				alignItems={'center'}
				display={{ base: 'none', md: 'flex' }}
			>
				<Label icon={icon} label={title} />
				<SubheadingText label={value} />
			</StackLayout>

			{/* <StackLayout
				spacing={1}
				p={4}
				boxShadow={'sm'}
				background={'gray.50'}
				rounded={'md'}
				display={{ base: 'flex', md: 'none' }}
			>
				<Label icon={icon} label={title} />
				<SubheadingText label={value} />
			</StackLayout> */}
		</React.Fragment>
	);
};

export default IdeaHighlight;
