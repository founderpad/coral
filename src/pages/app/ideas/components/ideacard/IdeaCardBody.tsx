import { BaseLabel } from 'components/labels/BaseLabel';
import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { TIdea_Preview } from 'generated/api';
import React from 'react';

type TIdeaCardBody = Pick<
	TIdea_Preview,
	'name' | 'preview' | 'id' | 'status' | 'created_at' | 'idea_user'
>;

const IdeaCardBody = (idea: TIdeaCardBody): JSX.Element => {
	const { id, preview } = idea;

	return (
		<FlexLayout
			// p={{ base: 2, sm: 3 }}
			// py={{ base: 2, sm: 3 }}
			// px={2}
			py={3}
			flexDirection={'column'}
			as={BaseLink}
			href={`/app/idea/${id}`}
		>
			<BaseLabel
				fontSize={{ base: 'smaller', sm: 'sm' }}
				noOfLines={2}
				mb={'1px'}
				// label={
				// 	<>
				// 		{preview}...{' '}
				// 		<SeeMoreLink href={`/app/idea/${id}`} label={'idea'} />
				// 	</>
				// }
				label={preview}
				color={'gray.500'}
				overflow={'hidden'}
				isTruncated
			/>
		</FlexLayout>
	);
};

export default IdeaCardBody;
