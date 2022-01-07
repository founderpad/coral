export type IAuthFormData = {
	email: string;
	password: string;
};

export interface IRegisterFormData extends IAuthFormData {
	firstName: string;
	lastName: string;
	// type: string;
	// country: string;
}

export type ProfileFormData = {
	categories: string[];
	background: string;
	availability: number;
	statement: string;
	website: string;
	linkedin: string;
	twitter: string;
	resume: File;
	userType: string;
	startups: number;
	status: string;
	businessDescription: string;
	experience: string;
};

export type TUser = {
	account: TAccount;
	display_name: string;
	id: string;
	user_profile: TProfile;
	user_type: string;
	avatar_url: string;
	first_name: string;
	last_name: string;
	// location: TLocation;
	country?: string;
};

export type TProfile = {
	id?: string;

	industries: string[];
	background: string;
	availability: number;
	statement: string;
	website: string;
	linkedin: string;
	twitter: string;
	resume: File;
	userType: string;
	startups: number;
	status: string;
	business_description: string;
	experience: string;
	skills?: string;
	__typename?: string;
};

export type TAccount = {
	email: string;
};

export type TLocation = {
	country?: string;
};

export type TPersonalDetails = Pick<
	TUser,
	'first_name' | 'last_name' | 'country'
>;

export type TExperience = Pick<
	TProfile,
	| 'background'
	| 'statement'
	| 'startups'
	| 'status'
	| 'business_description'
	| 'availability'
> & { id?: string; user_id?: string; __typename?: string };

//  & {
// user_location?: Pick<TLocation, 'country'>;
// country?: Pick<TLocation, 'country'>;
// };

// export type TPersonalInformation = {
// 	first_name: string;
// 	last_name?: string;
// 	country?: string;
// };
