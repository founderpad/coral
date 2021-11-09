import { Label } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import { TIdea_Preview } from 'generated/api';
import React, { memo } from 'react';
import NewIdeaBadge from '../NewIdeaBadge';
import PostedBy from './PostedBy';

type TIdeaCardHeader = Pick<
	TIdea_Preview,
	'name' | 'idea_user' | 'is_new' | 'created_at' | 'user_id' | 'id'
>;

const IdeaCardHeader = (idea: TIdeaCardHeader): JSX.Element => {
	const { name, is_new } = idea;

	return (
		<React.Fragment>
			<FlexLayout alignItems={'baseline'}>
				{is_new && <NewIdeaBadge />}
				<Label
					d={'flex'}
					w={'full'}
					overflow={'hidden'}
					fontWeight={'medium'}
					fontSize={{ base: 'smaller', sm: 'sm' }}
					css={{ whiteSpace: 'normal' }}
					noOfLines={1}
					isTruncated
				>
					{name}
				</Label>
			</FlexLayout>
			<PostedBy {...idea} />
		</React.Fragment>
	);
};

export default memo(IdeaCardHeader);
