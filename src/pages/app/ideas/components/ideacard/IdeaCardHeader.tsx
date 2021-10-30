import { Text } from '@chakra-ui/layout';
import { FlexLayout } from 'components/layouts';
import { TIdea_Preview } from 'generated/api';
import React, { memo } from 'react';
import NewIdeaBadge from '../NewIdeaBadge';
import PostedBy from './PostedBy';

type TIdeaCardHeader = Pick<
	TIdea_Preview,
	'name' | 'idea_user' | 'is_new' | 'created_at' | 'user_id'
>;

const IdeaCardHeader = (idea: TIdeaCardHeader): JSX.Element => {
	const { name, is_new } = idea;

	return (
		<FlexLayout
			flexDirection={{ base: 'column', sm: 'row' }}
			justifyContent={{ sm: 'space-between' }}
		>
			<FlexLayout
				mr={4}
				flexDirection={{ base: 'column', sm: 'row' }}
				alignItems={'center'}
			>
				<FlexLayout>
					<Text
						fontWeight={'medium'}
						fontSize={'sm'}
						aria-label={'The name of the idea'}
						title={'The name of this idea'}
						whiteSpace={'nowrap'}
						textOverflow={'ellipsis'}
						isTruncated
					>
						{name}
					</Text>
					{is_new && <NewIdeaBadge />}
				</FlexLayout>
			</FlexLayout>
			<PostedBy {...idea} />
		</FlexLayout>
	);
};

export default memo(IdeaCardHeader);
