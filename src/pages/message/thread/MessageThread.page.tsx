import { GoBackButton } from '@/components/buttons';
import { StackLayout } from '@/components/layouts';
import { AvatarWithDetails, Loading } from '@/components/shared';
import {
	useGetThreadUsersQuery,
	useMessageListSubscription
} from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import { useQueryParam } from '@/hooks/util';
import AuthFilter from '@/utils/AuthFilter';
import { formatDate } from '@/utils/validators';
import React from 'react';
import WriteUserMessage from '../components/WriteUserMessage';
import { Text } from '@chakra-ui/react';

const MessageThread = () => {
	const threadId = useQueryParam<string>('id');
	const user = useAuth().getUser();

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
				h={{ base: 'calc(100% - 56px)', lg: 'calc(100% - 70px)' }}
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

					<AvatarWithDetails
						title={recipientUser?.user.displayName}
						src={recipientUser?.user.avatarUrl}
						row
						small
					/>
				</StackLayout>

				<StackLayout
					flex={1}
					borderBottomWidth={1}
					p={{ base: 4, sm: 6 }}
					overflowY="auto"
				>
					{messageList?.message.map((message) => (
						<AvatarWithDetails
							key={message.id}
							title={message.sender?.displayName}
							subtitle={message.content}
							actions={
								<Text fontSize="x-small" color="fpGrey.500">
									{formatDate(message.createdAt, true)}
								</Text>
							}
							row
						/>
					))}
				</StackLayout>
				<WriteUserMessage threadId={threadId} />
			</StackLayout>
		</React.Fragment>
	);
};

export default AuthFilter(MessageThread);
