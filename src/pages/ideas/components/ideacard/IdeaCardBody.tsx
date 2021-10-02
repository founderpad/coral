import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import { BaseLink } from 'components/links';
import { Idea_Preview } from 'generated/graphql';
import React from 'react';

type TIdeaCardBody = Pick<Idea_Preview, 'name' | 'preview' | 'id' | 'status'>;

const IdeaCardBody = (idea: TIdeaCardBody): JSX.Element => {
	const { id, preview, status } = idea;

	return (
		<Flex
			p={{ base: 2, sm: 3 }}
			borderWidth={1}
			borderBottom={0}
			borderTop={0}
			borderColor={'fpLightGrey.300'}
			flexDirection={'column'}
			as={BaseLink}
			href={`/idea/${id}`}
		>
			<Text color={'fpGrey.700'} fontSize={'sm'} noOfLines={2} mb={'1px'}>
				{preview}...
			</Text>
			<Text color={'fpGrey.700'} fontSize={'sm'} fontWeight={'medium'} noOfLines={2}>
				{status}
			</Text>
		</Flex>
	);
};

// fontSize={{ base: 'sm', sm: 'md' }}

export default IdeaCardBody;
