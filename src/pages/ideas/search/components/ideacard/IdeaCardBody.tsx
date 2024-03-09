import { Label } from '@/components/labels';
import { TIdeaPreviewFieldsFragment } from '@/generated/api';
import React from 'react';
import { IdeaCardBodyBadges } from './IdeaCardBodyBadges';

type TIdeaCardBody = Pick<
	TIdeaPreviewFieldsFragment,
	| 'field'
	| 'user'
	| 'status'
	| 'summary'
	| 'interested_aggregate'
	| 'boosted_idea'
>;

const IdeaCardBody = (idea: TIdeaCardBody) => {
	return (
		<>
			<Label
				my={6}
				display="flex"
				color="fpGrey.500"
				overflow="hidden"
				whiteSpace="normal"
				fontSize="xs"
				css={{ whiteSpace: 'normal' }}
				wordBreak="break-word"
				noOfLines={2}
			>
				{idea?.summary}
			</Label>
			<IdeaCardBodyBadges {...idea} />
		</>
	);
};

export default IdeaCardBody;
