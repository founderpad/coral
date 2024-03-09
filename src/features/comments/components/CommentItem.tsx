import { TCommentFieldsFragment } from '@/generated/api';
import { useDisclosure, Collapse, Button } from '@chakra-ui/react';
import RepliesList from './RepliesList';
import CommentContainer from '../CommentContainer';

const CommentItem = (comment: TCommentFieldsFragment) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<CommentContainer comment={comment}>
			{!isOpen &&
				comment.firstReplies?.map((reply) => (
					<CommentContainer
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
					<Button variant="link" size="xs" onClick={onToggle}>
						{isOpen ? 'Hide replies' : 'Show more replies'}
					</Button>
				</>
			)}
		</CommentContainer>
	);
};

export default CommentItem;
