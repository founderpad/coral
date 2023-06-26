import { PrimaryButton } from '@/components/buttons';
import { TCommentFieldsFragment } from '@/generated/api';
import { useDisclosure, Collapse } from '@chakra-ui/react';
import CommentLayout from './CommentLayout';
import RepliesList from './RepliesList';

const Comment = (comment: TCommentFieldsFragment) => {
	// const [showReplies, setShowReplies] = useState(false);
	const { isOpen, onToggle } = useDisclosure();

	// const onShowRepliesClick = useCallback(() => {
	// 	setShowReplies(!showReplies);
	// }, [showReplies]);

	return (
		<CommentLayout comment={comment} divider={true}>
			{!isOpen &&
				comment.firstReplies?.map((reply) => (
					<CommentLayout
						key={reply.id}
						actions={false}
						comment={reply}
					/>
				))}
			{comment.totalReplies! > 2 && (
				<>
					<Collapse in={isOpen}>
						<RepliesList commentId={comment?.id} />
					</Collapse>
					<PrimaryButton
						name="show-replies"
						variant="link"
						fontSize="xs"
						onClick={onToggle}
					>
						{isOpen ? 'Hide replies' : 'Show more replies'}
					</PrimaryButton>
				</>
			)}
		</CommentLayout>
	);
};

export default Comment;
