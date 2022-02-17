import { TUsers, TUser_Profile } from '@generated/api';

export type TFounderUsers = Pick<
	TUser_Profile,
	| 'availability'
	| 'skills'
	| 'status'
	| 'startups'
	| 'specialistIndustry'
	| 'id'
> & {
	user?: Pick<TUsers, 'displayName' | 'id' | 'createdAt' | 'address'> | null;
};
