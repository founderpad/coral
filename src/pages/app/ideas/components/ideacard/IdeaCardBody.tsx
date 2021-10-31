import { Text } from '@chakra-ui/layout';
import { TIdea_Preview } from 'generated/api';
import React from 'react';

type TIdeaCardBody = Pick<
	TIdea_Preview,
	'name' | 'preview' | 'id' | 'status' | 'created_at' | 'idea_user'
>;

const IdeaCardBody = (idea: TIdeaCardBody): JSX.Element => {
	const { preview } = idea;

	return (
		<Text
			d={'flex'}
			color={'gray.500'}
			overflow={'hidden'}
			whiteSpace={'normal'}
			fontSize={{ base: 'smaller', sm: 'sm' }}
			css={{ whiteSpace: 'normal' }}
			noOfLines={[2, 3]}
			isTruncated
		>
			{preview}...
		</Text>
	);
};

export default IdeaCardBody;
