import LinkCard from '@/components/cards/Card';
import { Label } from '@/components/labels';
import { AvatarWithDetails } from '@/components/shared';
import { useAuth } from '@/hooks/auth';
import { formatDate } from '@/utils/validators';
import { Text } from '@chakra-ui/react';
import React from 'react';

const MessageThreadCard = (thread: any) => {
	const authUserId = useAuth().getUser()?.id;

	return (
		<LinkCard href={`/message/thread/${thread.id}`}>
			<AvatarWithDetails
				title={thread.targetUser?.[0].user?.displayName}
				subtitle={
					<Text fontSize="xs" color="fpGrey.500">
						{authUserId === thread.lastMessage?.[0].sender?.id && (
							<b>You:</b>
						)}{' '}
						{thread.lastMessage?.[0].content}
					</Text>
				}
				actions={
					<Label display="flex" fontSize="x-small" color="fpGrey.500">
						{formatDate(thread.lastMessage?.[0].createdAt, true)}
					</Label>
				}
				src={thread.targetUser?.[0].user?.avatarUrl}
				row
				small
			/>
		</LinkCard>
	);
};

export default MessageThreadCard;
