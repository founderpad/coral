import { BaseButton, SubmitButton } from '@components/buttons';
import { BaseForm } from '@components/form';
import { FormTextarea } from '@components/form/inputs/FormField';
import { StackLayout } from '@components/layouts';
import {
	TMessage,
	useNewMessageMutation,
	useNewMessageThreadMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useModalDrawer } from '@hooks/util';
import Router from 'next/router';
import React, { memo, useCallback } from 'react';
import { IoChatboxEllipsesSharp } from 'react-icons/io5';

const NewMessageModal = memo(({ userId }: { userId: string }) => {
	const { setModalDrawer } = useModalDrawer();

	const onNewMessageClick = useCallback(() => {
		setModalDrawer({
			title: 'New message',
			isOpen: true,
			action: (
				<SubmitButton
					name="open-modal-drawer-new-message"
					form="send-new-message-form"
					label="Send message"
				/>
			),
			body: <NewMessageForm userId={userId} />
		});
	}, [setModalDrawer, userId]);

	return (
		<StackLayout direction="row">
			<BaseButton
				name="message-user"
				variant="outline"
				colorScheme="fpPrimary"
				leftIcon={<IoChatboxEllipsesSharp />}
				onClick={onNewMessageClick}
			>
				Message
			</BaseButton>
		</StackLayout>
	);
});

export default NewMessageModal;

type TMessageInput = Pick<TMessage, 'content'>;

const NewMessageForm = ({ userId }: { userId: string }) => {
	const authUserId = useCurrentUser().id;
	const { setModalDrawer } = useModalDrawer();
	const [createNewMessageThread] = useNewMessageThreadMutation();
	const [createNewMessage] = useNewMessageMutation();

	const onCreateNewMessageThread = (values: TMessageInput) => {
		const { content } = values;

		createNewMessageThread({
			variables: {
				currentUserId: authUserId,
				targetUserId: userId
			},
			onCompleted: (data) => {
				const messageThreadId: string =
					data?.insert_message_thread?.returning?.[0].id;

				createNewMessage({
					variables: {
						messageThreadId,
						content
					},
					onCompleted: () => {
						setModalDrawer({
							isOpen: false
						});
						Router.push(`/message/thread/${messageThreadId}`);
					}
				});
			}
		});
	};

	return (
		<BaseForm<TMessageInput>
			name="send-new-message-form"
			onSubmit={onCreateNewMessageThread}
		>
			{({ register, control, resetField, formState: { errors } }) => (
				<React.Fragment>
					<FormTextarea<TMessageInput>
						name="content"
						placeholder="Send a new message (max. 400 characters)"
						register={register}
						control={control}
						rules={{
							required:
								'You must enter a message (max. 400 characters)',
							maxLength: {
								value: 400,
								message:
									'Your message can not be more than 400 characters '
							}
						}}
						errors={errors}
						onClear={() =>
							resetField('content', { defaultValue: '' })
						}
					/>
				</React.Fragment>
			)}
		</BaseForm>
	);
};
