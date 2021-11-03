import { Label } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
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
		<FlexLayout
			flexDirection={{ base: 'column', sm: 'row' }}
			justifyContent={{ sm: 'space-between' }}
			w="full"
			alignItems={{ base: 'flex-start', sm: 'center' }}
		>
			<FlexLayout mr={4} as={BaseLink} href={`/app/idea/${idea.id}`}>
				{is_new && <NewIdeaBadge />}
				<Label
					fontWeight={'medium'}
					fontSize={'sm'}
					aria-label={'The name of the idea'}
					title={'The name of this idea'}
					whiteSpace={'nowrap'}
					display={'flex'}
					flex={1}
					textOverflow={'ellipsis'}
					isTruncated
				>
					{name}
				</Label>
			</FlexLayout>
			<PostedBy {...idea} />
		</FlexLayout>
	);
};

export default memo(IdeaCardHeader);
