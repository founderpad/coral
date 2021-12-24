import { TIdea_Comments } from 'generated/api';
import { GET_COMMENTS_FOR_IDEA } from 'graphql/comments';
import { cache } from 'pages/_app';

const useIdeaCommentsQuery = (ideaId: string): TIdea_Comments[] => {
	const result = cache.readQuery({
		query: GET_COMMENTS_FOR_IDEA,
		variables: {
			ideaId: ideaId
		}
	}) as any;

	console.log('result: ', result);

	return result;
};

export default useIdeaCommentsQuery;
