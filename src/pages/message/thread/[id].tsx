import { Label } from '@components/labels';
import { PageLayout, StackLayout } from '@components/layouts';
import { Loading, PointSeparator, UserAvatarDetails } from '@components/shared';
import PronounsLabel from '@components/shared/PronounsLabel';
import { useMessageListSubscription } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import { cache } from '@pages/_app';
import AuthFilter from '@utils/AuthFilter';
import { formatDate } from '@utils/validators';
import gql from 'graphql-tag';
import React from 'react';
import WriteUserMessage from '../components/WriteUserMessage';

const MessageThread = () => {
	const threadId = useQueryParam<string>('id');
	const user = useCurrentUser();

	const { data, loading } = useMessageListSubscription({
		variables: {
			messageThreadId: threadId
		}
	});

	const toUser = data?.message.find((m) => m.sender.id !== user.id);

	// const result = cache.readFragment({
	// 	id: `message_thread:${threadId}`, // The value of the profile's cache id
	// 	fragment: gql`
	// 		fragment MessageThreadFragment on message_thread {
	// 			id
	// 		}
	// 	`
	// }) as any;

	if (loading) return <Loading />;

	return (
		<React.Fragment>
			<PageLayout
				title={`Your chat with ${toUser?.sender.displayName}`}
				p={0}
			>
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
