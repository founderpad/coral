import {
	MutationTuple,
	QueryResult,
	useMutation,
	useQuery
} from '@apollo/client';
import {
	CREATE_IDEA,
	DELETE_IDEA,
	GET_IDEA,
	GET_IDEAS,
	GET_USER_IDEAS
} from 'graphql/ideas';
import { useRouter } from 'next/router';
import { TIdea, TIdeaPreview } from 'types/idea';

export const useCreateIdea = (idea: TIdea): MutationTuple<any, any> => {
	console.log('idea: ', idea);
	return useMutation(CREATE_IDEA, {
		variables: { idea }
		// update: updateCache
	});
};

// export const useGetUserIdeas = (userId: string): QueryResult<TIdea[], any> => {
// 	const response = useQuery(GET_USER_IDEAS, {
// 		variables: { user_id: userId }
// 	});

// 	return { ...response, data: response.data?.ideas as TIdea[] };
// };

export const useGetUserIdeas = (
	userId: string
): QueryResult<TIdeaPreview[], any> => {
	const response = useQuery(GET_USER_IDEAS, {
		variables: { user_id: userId }
	});

	return { ...response, data: response.data?.ideas as TIdeaPreview[] };
};

// export const useGetIdeas = (): QueryResult<{
// 	ideas: TIdeaPreview[];
// 	total: number;
// }> => {
// 	// const response = useSubscription(GET_IDEAS);

// 	const response = useQuery(GET_IDEAS);

// 	// return { ...response, data: response.data?.ideas as TIdea[] };
// 	return {
// 		...response,
// 		data: {
// 			ideas: response.data?.ideas,
// 			total: response.data?.total.aggregate.count
// 		}
// 	};
// };

export const useGetIdeas = (): QueryResult<{
	ideas: TIdeaPreview[];
	total: number;
}> => {
	const router = useRouter();
	const { name: searchTerm, industry: searchIndustry, is_new } = router.query;

	console.log('iffset: ', (parseInt(router.query.page as string) - 1) * 3);

	const response = useQuery(GET_IDEAS, {
		variables: {
			offset: (parseInt(router.query.page as string) - 1) * 3,
			name: searchTerm ? '%' + searchTerm + '%' : undefined,
			industry: searchIndustry ? searchIndustry : undefined,
			is_new: is_new ?? undefined
		},
		fetchPolicy: 'no-cache'
	});

	// return { ...response, data: response.data?.ideas as TIdea[] };

	return {
		...response,
		data: {
			ideas: response.data?.idea_preview,
			total: response.data?.idea_preview_aggregate.aggregate.count
		}
	};
};

export const useGetIdea = (id: string): QueryResult<TIdea, any> => {
	const response = useQuery(GET_IDEA, {
		variables: { id }
	});

	return { ...response, data: response.data?.idea as TIdea };
};

// export const useUpdateIdea = (idea: TIdea): MutationTuple<any, any> => {

// 	const { updated_at, id, user_id, __typename, ...rest } = idea;
// 	const updatedIdea = { ...rest };

// 	const response = useMutation(UPDATE_IDEA, {
// 		variables: { idea: updatedIdea, id: idea.id }
// 	});
// 	return response;
// };

export const useDeleteIdea = (id: string): any => {
	return useMutation(DELETE_IDEA, {
		variables: { id }
	});
};
