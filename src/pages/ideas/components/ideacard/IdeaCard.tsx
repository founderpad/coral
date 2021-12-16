import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import IdeaCardBody from './IdeaCardBody';
import IdeaCardFooter from './IdeaCardFooter';
import IdeaCardHeader from './IdeaCardHeader';

const IdeaCard = (idea: TIdea_Preview): JSX.Element => (
	<>
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

		<FlexLayout flex={1}>
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
		</FlexLayout>
	</>
);

export default IdeaCard;
