import { ButtonGroup } from '@chakra-ui/button';
import { Textarea } from '@chakra-ui/textarea';
import { CancelButton, PrimaryButton } from 'components/buttons';
import { FlexLayout, StackLayout } from 'components/layouts';
import { usePostReplyMutation } from 'generated/api';
import React, { useCallback, useState } from 'react';
import ResizeTextarea from 'react-textarea-autosize';

const PostReplyComment = ({
	commentId
}: {
	commentId: string;
}): JSX.Element => {
	const [showReplyField, setShowReplyField] = useState(false);
	const [value, setValue] = useState('');

	const [postReplyMutation] = usePostReplyMutation({
		variables: {
			ideaReply: {
				comment_id: commentId,
				value
			}
		},
		// refetchQueries: [
		// 	{
		// 		query: GET_REPLIES_FOR_COMMENT,
		// 		variables: {
		// 			commentId
		// 		}
		// 	}
		// ],
		onCompleted: () => {
			setShowReplyField(!showReplyField);
		}
	});

	const onShowReplyClick = () => {
		setShowReplyField(!showReplyField);
		setValue('');
	};

	const onValueChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setValue(e.target.value);
		},
		[value]
	);

	return (
		<FlexLayout
			flexDirection={'column'}
			alignItems={'flex-start'}
			w={'full'}
		>
			{' '}
			<PrimaryButton
				name={'reply-to-comment'}
				onClick={onShowReplyClick}
				variant={'unstyled'}
				color={'gray.500'}
				fontSize={'xs'}
			>
				Reply
			</PrimaryButton>
			{showReplyField && (
				<StackLayout
					mt={1}
					spacing={2}
					justifyContent={'space-between'}
					alignItems={'flex-end'}
					w={'full'}
				>
					<Textarea
						name={'value'}
						id={'value'}
						minH={'unset'}
						placeholder={'Write your reply here'}
						w={'full'}
						as={ResizeTextarea}
						onChange={onValueChange}
						value={value}
						maxRows={3}
						resize={'none'}
						maxH={'100px'}
						p={2}
						title={'Write your reply here'}
						_focus={{
							borderColor: 'gray.400',
							boxShadow: 'none'
						}}
					/>
					<ButtonGroup alignItems={'center'}>
						<CancelButton
							label={'Cancel'}
							size={'xs'}
							onClick={onShowReplyClick}
						/>
						<PrimaryButton
							name={'send-reply'}
							size={'xs'}
							onClick={() => postReplyMutation()}
						>
							Send
						</PrimaryButton>
					</ButtonGroup>
				</StackLayout>
			)}
		</FlexLayout>
	);
};

export default PostReplyComment;
