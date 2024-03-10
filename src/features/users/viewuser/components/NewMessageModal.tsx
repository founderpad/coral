import { ButtonProps, IconButton } from '@chakra-ui/react';
import { BaseButton, SubmitButton } from '@/components/buttons';
import { BaseForm } from '@/components/form';
import { FormTextarea } from '@/components/form/inputs/FormField';
import {
	TMessage,
	useNewMessageMutation,
	useNewMessageThreadMutation
} from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import { useModalDrawer } from '@/hooks/util';
import Router from 'next/router';
import React, { memo, useCallback } from 'react';
import { IoChatboxEllipsesSharp } from 'react-icons/io5';

interface Props {
	userId: string;
	icon?: boolean;
	buttonProps?: ButtonProps;
}

const NewMessageModal = memo(({ userId, icon = false, buttonProps }: Props) => {
	const { openModalDrawer } = useModalDrawer();

	const onNewMessageClick = useCallback(() => {
		openModalDrawer({
			title: 'New message',
			action: (
				<SubmitButton
					name="open-modal-drawer-new-message"
					form="send-new-message-form"
					label="Send message"
				/>
			),
			body: <NewMessageForm userId={userId} />
		});
	}, [openModalDrawer, userId]);

	if (icon)
		return (
			<IconButton
				aria-label="message-user"
				onClick={onNewMessageClick}
				colorScheme="fpPrimary"
				variant="outline"
				size="sm"
			>
				<IoChatboxEllipsesSharp />
			</IconButton>
		);

	return (
		<BaseButton
			{...buttonProps}
			name="message-user"
			variant="outline"
			colorScheme="fpPrimary"
			onClick={onNewMessageClick}
			leftIcon={<IoChatboxEllipsesSharp />}
		>
			Message
		</BaseButton>
	);
});

export default NewMessageModal;

type TMessageInput = Pick<TMessage, 'content'>;

const NewMessageForm = ({ userId }: { userId: string }) => {
	const authUserId = useAuth().getUser()?.id;
	const { closeModalDrawer } = useModalDrawer();
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
						closeModalDrawer();
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
