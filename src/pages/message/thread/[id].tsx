import { Label } from '@components/labels';
import { PageLayout, StackLayout } from '@components/layouts';
import { Loading, PointSeparator, UserAvatarDetails } from '@components/shared';
import PronounsLabel from '@components/shared/PronounsLabel';
import { useMessageListSubscription } from '@generated/api';
import { useQueryParam } from '@hooks/util';
import AuthFilter from '@utils/AuthFilter';
import { formatDate } from '@utils/validators';
import React from 'react';
import WriteUserMessage from '../components/WriteUserMessage';

const MessageThread = () => {
	const threadId = useQueryParam<string>('id');

	const { data, loading } = useMessageListSubscription({
		variables: {
			messageThreadId: threadId
		}
	});

	if (loading) return <Loading />;

	return (
		<React.Fragment>
			<PageLayout title="Your chat with Jamie" p={0}>
				<StackLayout p={4} flex={1} borderBottomWidth={1}>
					{data?.message.map((message) => (
						<UserAvatarDetails
							key={message.id}
							title={message.sender?.displayName}
							src={message.sender?.avatarUrl || undefined}
							subtitle={message.content}
							actions={
								<React.Fragment>
									<PronounsLabel
										pronouns={
											message.sender?.profile?.pronouns
										}
										customPronouns={
											message.sender?.profile
												?.customPronouns
										}
									/>
									<PointSeparator small />
									<Label
										d="flex"
										fontSize="x-small"
										color="fpGrey.500"
									>
										{formatDate(message.createdAt, true)}
									</Label>
								</React.Fragment>
							}
						/>
					))}
				</StackLayout>
				<WriteUserMessage threadId={threadId} />
			</PageLayout>
		</React.Fragment>
	);
};

export default AuthFilter(MessageThread);
