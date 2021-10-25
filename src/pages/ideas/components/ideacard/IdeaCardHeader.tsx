import { Flex, Text } from '@chakra-ui/layout';
import { BaseLink } from 'components/links';
import { PointSeparator } from 'components/shared';
import { TIdea_Preview } from 'generated/graphql';
import React, { memo } from 'react';
import { formatDate } from 'utils/validators';
import NewIdeaBadge from '../NewIdeaBadge';

type TIdeaCardHeader = Pick<
	TIdea_Preview,
	'name' | 'idea_user' | 'is_new' | 'created_at' | 'user_id'
>;

const IdeaCardHeader = (idea: TIdeaCardHeader): JSX.Element => {
	const { name, idea_user, created_at, is_new } = idea;
	// const { id } = idea_user;

	return (
		<Flex
			px={1}
			py={1}
			bg={'fpLightGrey.300'}
			spacing={0}
			borderWidth={1}
			borderBottom={0}
			borderColor={'fpLightGrey.300'}
			flexDirection={{ base: 'column', sm: 'row' }}
			justifyContent={{ sm: 'space-between' }}
			overflowX={'hidden'}
		>
			<Flex alignItems={'center'} overflowX={'hidden'} mr={4}>
				<Text
					fontWeight={'bold'}
					pl={{ sm: 10 }}
					fontSize={'sm'}
					color={'fpGrey.900'}
					aria-label={'The name of the idea'}
					title={'The name of this idea'}
					whiteSpace={'nowrap'}
					alignItems={'center'}
					textOverflow={'ellipsis'}
					isTruncated
				>
					{name}
				</Text>
				{is_new && <NewIdeaBadge />}
			</Flex>
			<Flex alignItems={'center'}>
				<Text
					fontSize={'xs'}
					color={'fpGrey.300'}
					fontWeight={'medium'}
					as={BaseLink}
					href={`/user/${idea_user?.id}`}
					_hover={{ color: 'fpGrey.700' }}
					mb={0}
					title={'The user who posted this idea'}
				>
					Posted by {idea_user?.first_name}
				</Text>
				<PointSeparator small />
				<Text
					fontSize={'xs'}
					color={'fpGrey.300'}
					fontWeight={'medium'}
					title={'When the idea was posted'}
				>
					{formatDate(created_at)}
				</Text>
			</Flex>
		</Flex>
	);
};

export default memo(IdeaCardHeader);
