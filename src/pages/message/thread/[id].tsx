import { GoBackButton } from '@components/buttons';
import { Label } from '@components/labels';
import { StackLayout } from '@components/layouts';
import { Loading, PointSeparator, UserAvatarDetails } from '@components/shared';
import PronounsLabel from '@components/shared/PronounsLabel';
import {
	useGetThreadUsersQuery,
	useMessageListSubscription
} from '@generated/api';
import { useAuth } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import AuthFilter from '@utils/AuthFilter';
import { formatDate } from '@utils/validators';
import React from 'react';
import WriteUserMessage from '../components/WriteUserMessage';

const MessageThread = () => {
	const threadId = useQueryParam<string>('id');
	const user = useAuth().user;

	const { data: messageList, loading } = useMessageListSubscription({
		variables: {
			messageThreadId: threadId
		}
	});

	const { data: threadUsers } = useGetThreadUsersQuery({
		variables: {
			messageThreadId: threadId
		}
	});

	const recipientUser = threadUsers?.users.find(
		(tu) => tu.user.id !== user?.id
	);

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
			<StackLayout
				h={{ base: 'calc(100% - 40px)', lg: 'calc(100% - 70px)' }}
				display="flex"
				flex={1}
				w={{ base: 'full', xl: '95ch' }}
				overflow="hidden"
				spacing={0}
				position="fixed"
				rounded="md"
				borderWidth={{ base: 0, lg: 1 }}
				borderColor="fpLightGrey.900"
			>
				<StackLayout
					px={{ base: 4, sm: 6 }}
					py={2}
					borderBottomWidth={1}
					alignItems="center"
					direction="row"
				>
					<GoBackButton mb={0} />
					<UserAvatarDetails
						src={recipientUser?.user.avatarUrl ?? ''}
						title={recipientUser?.user.displayName}
						size="sm"
					/>
				</StackLayout>

				<StackLayout
					flex={1}
					borderBottomWidth={1}
					p={{ base: 4, sm: 6 }}
					overflowY="auto"
				>
					{messageList?.message.map((message) => (
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
			</StackLayout>
		</React.Fragment>
	);
};

export default AuthFilter(MessageThread);
