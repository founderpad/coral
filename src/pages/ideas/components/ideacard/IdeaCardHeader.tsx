import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import React, { memo } from 'react';
import NewIdeaBadge from '../NewIdeaBadge';
import PostedBy from './PostedBy';

type TIdeaCardHeader = Pick<
	TIdeaPreviewFieldsFragment,
	'name' | 'user' | 'is_new' | 'created_at' | 'user_id' | 'id'
>;

const IdeaCardHeader = (idea: TIdeaCardHeader) => {
	const { name, is_new } = idea;

	return (
		<React.Fragment>
			<FlexLayout alignItems={'stretch'}>
				{is_new && <NewIdeaBadge />}
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
