import { Text } from '@chakra-ui/layout';
import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { TIdea_Preview } from 'generated/api';
import React from 'react';

type TIdeaCardBody = Pick<TIdea_Preview, 'name' | 'preview' | 'id' | 'status'>;

const IdeaCardBody = (idea: TIdeaCardBody): JSX.Element => {
	const { id, preview, status } = idea;

	return (
		<FlexLayout
			p={{ base: 2, sm: 3 }}
			borderWidth={1}
			borderBottom={0}
			borderTop={0}
			borderColor={'fpLightGrey.300'}
			flexDirection={'column'}
			as={BaseLink}
			href={`/app/idea/${id}`}
		>
			<Text color={'fpGrey.700'} fontSize={'sm'} noOfLines={2} mb={'1px'}>
				{preview}...
			</Text>
			<Text
				color={'fpGrey.700'}
				fontSize={'sm'}
				fontWeight={'medium'}
				noOfLines={2}
			>
				{status}
			</Text>
		</FlexLayout>
	);
};

// fontSize={{ base: 'sm', sm: 'md' }}

export default IdeaCardBody;
