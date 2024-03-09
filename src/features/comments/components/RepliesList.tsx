import { StackLayout } from '@/components/layouts';
import useReplies from '../hooks/replies';
import CommentContainer from '../CommentContainer';

const RepliesList = ({ commentId }: { commentId: string }) => {
	const { data } = useReplies(commentId);

	if (data?.length)
		return (
			<StackLayout spacing={0} pt={4} rounded="none" pl={2}>
				{data?.map((reply, _index) => {
					return (
						<CommentContainer
							key={reply.id}
							actions={false}
							comment={reply}
						/>
					);
				})}
			</StackLayout>
		);

	return null;
};

export default RepliesList;
