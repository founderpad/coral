import { Flex, Text } from '@chakra-ui/layout';
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
		<Flex
			// p={2}
			// bg={'gray.100'}
			spacing={0}
			flexDirection={{ base: 'column', sm: 'row' }}
			justifyContent={{ sm: 'space-between' }}
		>
			<FlexLayout mr={4} flexDirection={{ base: 'column', sm: 'row' }}>
				<FlexLayout>
					<Text
						fontWeight={'medium'}
						// pl={{ sm: 10 }}
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
		</Flex>
	);
};

export default memo(IdeaCardHeader);
