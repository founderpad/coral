import {
    MutationTuple,
    QueryResult,
    useMutation,
    useQuery
} from '@apollo/client';
import { TIdeas } from 'generated/graphql';
import {
    CREATE_IDEA,
    DELETE_IDEA,
    GET_IDEA,
    GET_IDEAS,
    GET_USER_IDEAS
} from 'graphql/ideas';
import { useRouter } from 'next/router';
import { TIdea, TIdeaPreview } from 'types/idea';
import { useQueryParam } from './util';

export const useCreateIdea = (idea: TIdea): MutationTuple<any, any> => {
	return useMutation(CREATE_IDEA, {
		variables: { idea }
		// update: updateCache
	});
};

export const useGetUserIdeas = (
	userId: string
): QueryResult<TIdeaPreview[], any> => {
	const response = useQuery(GET_USER_IDEAS, {
		variables: { user_id: userId }
	});

	return { ...response, data: response.data?.ideas as TIdeaPreview[] };
};

export const useGetIdeas = (): QueryResult<{
	ideas: TIdeaPreview[];
	total: number;
}> => {
	const router = useRouter();
	const { name: searchTerm, field: searchIndustry, is_new } = router.query;
	const page = parseInt(useQueryParam('page'));

	const response = useQuery(GET_IDEAS, {
		variables: {
			offset: (page - 1) * 3,
			name: searchTerm ? '%' + searchTerm + '%' : undefined,
			field: searchIndustry ? searchIndustry : undefined,
			is_new: is_new ?? undefined
		},
		fetchPolicy: 'no-cache'
	});

	return {
		...response,
		data: {
			ideas: response.data?.idea_preview,
			total: response.data?.idea_preview_aggregate.aggregate.count
		}
	};
};

export const useGetIdea = (id: string): QueryResult<TIdeas, any> => {
	const response = useQuery(GET_IDEA, {
		variables: { id }
	});

	return { ...response, data: response.data?.idea };
};

export const useDeleteIdea = (id: string): any => {
	return useMutation(DELETE_IDEA, {
		variables: { id }
	});
};
