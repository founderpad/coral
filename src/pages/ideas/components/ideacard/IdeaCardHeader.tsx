import { Label } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import { TIdea_Preview } from 'generated/api';
import React, { memo } from 'react';
import NewIdeaBadge from '../NewIdeaBadge';
import PostedBy from './PostedBy';

type TIdeaCardHeader = Pick<
	TIdea_Preview,
	'name' | 'user' | 'isNew' | 'createdAt' | 'user_id' | 'id'
>;

const IdeaCardHeader = (idea: TIdeaCardHeader): JSX.Element => {
	const { name, isNew } = idea;

	return (
		<React.Fragment>
			<FlexLayout alignItems={'stretch'}>
				{isNew && <NewIdeaBadge />}
				<FlexLayout direction={'column'}>
					<Label
						d={'flex'}
						w={'full'}
						overflow={'hidden'}
						fontWeight={'medium'}
						fontSize={{ base: 'smaller', sm: 'sm' }}
						css={{ whiteSpace: 'normal' }}
						wordBreak={'break-word'}
						noOfLines={1}
						isTruncated
					>
						{name}
					</Label>
					<PostedBy {...idea} />
				</FlexLayout>
			</FlexLayout>
		</React.Fragment>
	);
};

export default memo(IdeaCardHeader);