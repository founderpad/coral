export interface IPostedComment {
	id: string;
	idea_id: string;
	value: string;
	updated_at: string;
	replies?: Array<IPostedReply>;
	user: {
		display_name?: string;
		avatar_url?: string;
		id?: string;
	};
}

export interface IPostedReply {
	id: string;
	comment_id: string;
	value: string;
	updated_at: string;
	user: {
		display_name?: string;
		avatar_url?: string;
		id?: string;
	};
}
