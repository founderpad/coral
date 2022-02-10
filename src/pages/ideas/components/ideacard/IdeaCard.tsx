import { FlexLayout, StackLayout } from '@components/layouts';
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

		<StackLayout flex={1} spacing={0} bg={'white'}>
			<FlexLayout
				flexDirection={'column'}
				as={BaseLink}
				href={`/idea/${idea.id}`}
				alignItems={'flex-start'}
				_hover={{
					borderColor: 'gray.50',
					transition: 'ease-in .3s',
					bg: 'fpLightGrey.100'
				}}
				// p={2}
				p={4}
				flex={1}
				rounded={'md'}
				// borderWidth={1}
				// borderColor={'fpLightGrey.700'}
				// boxShadow={'sm'}
			>
				<IdeaCardHeader {...idea} />
				<IdeaCardBody {...idea} />
			</FlexLayout>
			<IdeaCardFooter {...idea} />
		</StackLayout>
	</React.Fragment>
);

export default IdeaCard;
