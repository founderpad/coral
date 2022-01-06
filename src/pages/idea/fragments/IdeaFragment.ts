import { TIdeas } from 'generated/api';
import gql from 'graphql-tag';
import { useQueryParam } from 'hooks/util';
import { cache } from 'pages/_app';

const useIdeaFragment = (): TIdeas => {
	const ideaId = useQueryParam('id');
	const result = cache.readFragment({
		id: `ideas:${ideaId}`, // The value of the idea's cache id
		fragment: gql`
			fragment idea on ideas {
				id
				name
				description
				field
				competitors
				team
				additional_information
				is_published
				user_id
				status
			}
		`,
		fragmentName: 'idea'
	}) as TIdeas;

	return result;
};

export default useIdeaFragment;
