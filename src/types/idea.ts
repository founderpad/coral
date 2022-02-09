// export type TIdea = {
// 	id?: string;
// 	name: string;
// 	description: string;
// 	field: string;
// 	competitors: string;
// 	team: string;
// 	mission_statement: string;
// 	additional_information: string;
// 	business_plan: string;
// 	is_published: boolean;
// 	updated_at?: string;
// 	created_at?: string;
// 	user_id: string;
// 	idea_user: TIdeaCreatedUser;
// };

import { TIdeaQuery, TIdeas, TIdea_Preview, TUsers } from '@generated/api';

export type TIdea = TIdeaQuery['idea'];
export type TIdeaHasInterest = TIdeaQuery['hasInterest'];

export type TUpvoteIdea = Pick<
	TIdea_Preview | TIdeas,
	'user' | 'votes_aggregate' | 'votes' | 'id' | 'name'
>;

// export type TSearchIdea = Omit<TIdea_Preview, 'comments'> &
// 	Pick<TIdea_Comments_Aggregate, 'nodes' | 'aggregate'> & {
// 		user?: Pick<TUsers, 'displayName' | 'id' | 'createdAt'> | null;
// 	};

// export type TSearchIdea = Omit<TIdea_Preview, 'comments'> &
// 	Pick<TIdea_Comments_Aggregate, 'nodes' | 'aggregate'> & {
// 		user?:
// 			| Pick<TUsers, 'displayName' | 'id' | 'createdAt'>
// 			| null
// 			| undefined;
// 	};

export type TSearchIdea = Partial<Omit<TIdea_Preview, 'comments'>> & {
	user?: Pick<TUsers, 'displayName' | 'id' | 'createdAt'> | null | undefined;
};

// export type TIdeaPreview = Pick<TIdea, 'description' | > & {
// 	description_preview: string;
// };

// export type TIdeaPreview = Pick<
// 	TIdea,
// 	'id' | 'userId' | 'name' | 'createdAt' | 'field' | 'user'
// > & {
// 	preview: string;
// 	is_new: boolean;
// };

// export type TCategory = {
// 	id: number;
// 	name: string;
// 	url: string;
// };

export type TIndustry = {
	label: string;
	value: string;
};

// export type TIdea = {
// 	id: string;
// 	name: string;
// 	description: string;
// 	categories: string[];
// 	user_id: string;
// };

export type TIdeasResponse = {
	ideas: TIdea[];
	count: number;
};

export type TIdeaCreatedUser = {
	first_name: string;
	country?: string;
};
