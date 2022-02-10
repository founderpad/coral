import { BoxLayout, FlexLayout, StackLayout } from '@components/layouts';
import { BaseLink } from '@components/links';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import React from 'react';
import IdeaCardBody from './IdeaCardBody';
import IdeaCardFooter from './IdeaCardFooter';
import IdeaCardHeader from './IdeaCardHeader';

const IdeaCard = (idea: TIdeaPreviewFieldsFragment) => (
	<React.Fragment>
		{/* <FlexLayout flex={1}>
			<FlexLayout
				flexDirection={'column'}
				as={BaseLink}
				href={`/idea/${idea.id}`}
				alignItems={'flex-start'}
				_hover={{
					borderColor: 'gray.50',
					transition: 'ease-in .3s',
					bg: 'gray.50'
				}}
				p={2}
				flex={1}
			>
				<IdeaCardHeader {...idea} />
				<IdeaCardBody {...idea} />
				<IdeaCardFooter />

			</FlexLayout>
			<IdeaMenu {...idea} />
		</FlexLayout> */}

		<StackLayout flex={1} spacing={0}>
			<FlexLayout
				flexDirection={'column'}
				as={BaseLink}
				href={`/idea/${idea.id}`}
				alignItems={'flex-start'}
				_hover={{
					borderColor: 'gray.50',
					transition: 'ease-in .2s',
					transform: 'scale(1.0125)'
				}}
				py={4}
				flex={1}
				rounded={'md'}
				position={'relative'}
			>
				<IdeaCardHeader {...idea} />
				<IdeaCardBody {...idea} />
			</FlexLayout>
			<IdeaCardFooter {...idea} />
		</StackLayout>
	</React.Fragment>
);

export default IdeaCard;
