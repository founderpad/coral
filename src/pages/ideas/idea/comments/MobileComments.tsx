import { StackLayout } from '@/components/layouts';
import { Loading, NoResults } from '@/components/shared';
import { useQueryParam } from '@/hooks/util';
import { useEffect } from 'react';
import { useComments } from './hooks/useComments';
import Comment from './Comment';

export const MobileComments = () => {
	const id = useQueryParam('id');
	const { data, total, loading, fetchMore } = useComments();

	const drawerBody = document.getElementById('drawer-content');

	const onScrollToBottom = (e: any) => {
		if (
			e.target.scrollHeight - e.target.scrollTop ===
				e.target.clientHeight &&
			hasMoreComments
		) {
			fetchMore({
				variables: {
					offset: data?.length
				}
			});
		}
	};

	useEffect(() => {
		if (drawerBody) drawerBody.addEventListener('scroll', onScrollToBottom);
	});

	const hasComments = data?.length ?? 0;
	const hasMoreComments = total > hasComments;

	return (
		<>
			{loading ? (
				<Loading small />
			) : hasComments < 1 ? (
				<NoResults label="comments yet" back={false} />
			) : (
				<StackLayout flexGrow={1} overflowY="auto">
					{data?.map((comment, _index) => {
						// Annoying caching issue...
						if (comment.ideaId === id)
							return <Comment key={comment.id} {...comment} />;
					})}
				</StackLayout>
			)}
		</>
	);
};

export default MobileComments;
