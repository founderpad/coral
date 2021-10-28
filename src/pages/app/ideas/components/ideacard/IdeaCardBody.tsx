import { Label } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { SeeMoreLink } from 'components/shared';
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
			p={{ base: 2, sm: 3 }}
			flexDirection={'column'}
			as={BaseLink}
			href={`/app/idea/${id}`}
		>
			<Label
				fontSize={{ base: 'xs', sm: 'sm' }}
				noOfLines={2}
				mb={'1px'}
				label={
					<>
						{preview}...{' '}
						<SeeMoreLink href={`/app/idea/${id}`} label={'idea'} />
					</>
				}
				color={'gray.500'}
				overflow={'hidden'}
				isTruncated
			/>
		</FlexLayout>
	);
};

export default IdeaCardBody;
