import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import React, { memo } from 'react';
import NewIdeaBadge from '../NewIdeaBadge';
import PostedBy from './PostedBy';

type TIdeaCardHeader = Pick<
	TIdeaPreviewFieldsFragment,
	'name' | 'user' | 'isNew' | 'createdAt' | 'userId' | 'id'
>;

const IdeaCardHeader = (idea: TIdeaCardHeader) => {
	const { name, isNew } = idea;

	return (
		<React.Fragment>
			<FlexLayout w="full">
				{isNew && <NewIdeaBadge />}
				<FlexLayout direction="column" flex={1}>
					<Label
						d="flex"
						w="full"
						overflow="hidden"
						fontWeight="medium"
						fontSize="sm"
						css={{ whiteSpace: 'normal' }}
						wordBreak="break-word"
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
