import { IdeaDocument, TIdeaQuery, TIdeas } from '@/generated/api';
import { useClaim } from '@/hooks/auth';
import { useQueryParam } from '@/hooks/util';
import { cache } from '@/pages/_app.page';
import gql from 'graphql-tag';

export const useIdeaFragment = (id?: string) => {
	const paramIdeaId = useQueryParam('id');
	const ideaId = id ?? paramIdeaId;
	const ideaFragment = cache.readFragment({
		id: `ideas:${ideaId}`, // The value of the idea's cache id
		fragment: gql`
			fragment idea on ideas {
				id
				name
				description
				field
				competitors
				team
				additionalInformation
				isPublished
				totalComments
				summary
				status
			}
		`,
		fragmentName: 'idea'
	}) as TIdeas;

	return ideaFragment || null;
};

const useIdea = (id?: string) => {
	const paramIdeaId = useQueryParam('id');
	const ideaId = id ?? paramIdeaId;

	const data = cache.readQuery({
		query: IdeaDocument,
		variables: {
			id: ideaId,
			userId: useClaim()
		}
	}) as TIdeaQuery;

	return data || null;
};

export default useIdea;
