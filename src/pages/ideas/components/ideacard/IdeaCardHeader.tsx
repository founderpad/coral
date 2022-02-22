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
			<FlexLayout>
				{is_new && <NewIdeaBadge />}
				<FlexLayout direction="column" flex={1}>
					<Label
						d="flex"
						w="full"
						overflow="hidden"
						fontWeight="medium"
						fontSize="sm"
						css={{ whiteSpace: 'normal' }}
						wordBreak="break-all"
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
