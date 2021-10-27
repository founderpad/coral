import { Text } from '@chakra-ui/layout';
import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { PointSeparator } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import { formatDate } from 'utils/validators';

type TProps = Pick<TIdea_Preview, 'idea_user' | 'created_at'>;

export const PostedBy = ({ idea_user, created_at }: TProps): JSX.Element => (
	<FlexLayout
		alignItems={'center'}
		lineHeight={'16px'}
		fontSize={{ base: '11px', sm: 'xs' }}
	>
		<Text
			color={'gray.400'}
			as={BaseLink}
			href={`/app/user/${idea_user?.id}`}
			_hover={{ color: 'fpGrey.700' }}
			mb={0}
			title={'The user who posted this idea'}
		>
			Posted by {idea_user?.first_name}
		</Text>
		<PointSeparator color={'gray.700'} small />
		<Text color={'gray.400'} title={'When the idea was posted'}>
			{formatDate(created_at)}
		</Text>
	</FlexLayout>
);

export default PostedBy;
