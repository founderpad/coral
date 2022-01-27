import { IdeaDocument, TIdeaQuery, TIdeas } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import { cache } from '@pages/_app';
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
				status
			}
		`,
		fragmentName: 'idea'
	}) as TIdeas;

	return ideaFragment || null;
};

const useIdea = (id?: string) => {
	// const cachedIdea = cache.readFragment({
	// 	id: `ideas:${id ?? useQueryParam('id')}`, // The value of the idea's cache id
	// 	fragment: gql`
	// 		fragment idea on ideas {
	// 			id
	// 			name
	// 			description
	// 			field
	// 			competitors
	// 			team
	// 			additionalInformation
	// 			isPublished
	// 			userId
	// 			status
	// 			user {
	// 				id
	// 				displayName
	// 				avatarUrl
	// 			}
	// 		}
	// 	`,
	// 	fragmentName: 'idea'
	// }) as TIdeas;

	// const idea = cache.readQuery({
	// 	id: `ideas:${id ?? useQueryParam('id')}`
	// 	variables: {

	// 	}

	// })

	const paramIdeaId = useQueryParam('id');
	const ideaId = id ?? paramIdeaId;
	const userId = useCurrentUser().id;

	const data = cache.readQuery({
		query: IdeaDocument,
		variables: {
			id: ideaId,
			userId
		}
	}) as TIdeaQuery;

	return data || null;
};

export default useIdea;
