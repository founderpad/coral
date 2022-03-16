import LinkCard from '@components/cards/LinkCard';
import { Label } from '@components/labels';
import { PointSeparator, UserAvatarDetails } from '@components/shared';
import PronounsLabel from '@components/shared/PronounsLabel';
import { useCurrentUser } from '@hooks/auth';
import { formatDate } from '@utils/validators';
import React from 'react';

const MessageThreadCard = (thread: any) => {
	const authUserId = useCurrentUser().id;
	return (
		<LinkCard href={`/message/thread/${thread.id}`}>
			<UserAvatarDetails
				src={thread.targetUser?.[0].user?.avatarUrl || undefined}
				actions={
					<React.Fragment>
						<PronounsLabel
							pronouns={
								thread.targetUser?.[0].user?.profile?.pronouns
							}
							customPronouns={
								thread.targetUser?.[0].user?.profile
									?.customPronouns
							}
						/>
						<PointSeparator small />
						<Label d="flex" fontSize="x-small" color="fpGrey.500">
							{formatDate(
								thread.lastMessage?.[0].createdAt,
								true
							)}
						</Label>
					</React.Fragment>
				}
				title={thread.targetUser?.[0].user?.displayName}
				subtitle={
					<>
						{authUserId === thread.lastMessage?.[0].sender?.id && (
							<b>You:</b>
						)}{' '}
						{thread.lastMessage?.[0].content}
					</>
				}
			/>
		</LinkCard>
	);
};

export default MessageThreadCard;
