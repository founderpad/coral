export type TIdea = {
	id?: string;
	name: string;
	description: string;
	field: string;
	competitors: string;
	team: string;
	mission_statement: string;
	additional_information: string;
	business_plan: string;
	is_published: boolean;
	updated_at?: string;
	created_at?: string;
	user_id: string;
	idea_user: TIdeaCreatedUser;
};

// export type TIdeaPreview = Pick<TIdea, 'description' | > & {
// 	description_preview: string;
// };

export type TIdeaPreview = Pick<
	TIdea,
	'id' | 'user_id' | 'name' | 'created_at' | 'field' | 'idea_user'
> & {
	preview: string;
	is_new: boolean;
};

// export type TCategory = {
// 	id: number;
// 	name: string;
// 	url: string;
// };

export type TIndustry = {
	name: string;
	color: string;
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
