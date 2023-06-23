import { TUser_Profile_Bool_Exp, useUsersQuery } from '@/generated/api';
import { useQueryParam } from '@/hooks/util';
import Router from 'next/router';

const queryBuilder = () => {
	const queryParamStatus = Router.query['status'] as string;
	const queryParamIndustry = Router.query['field'] as string;
	const queryParamAvailability = Router.query['availability'] as string;
	const queryParamStartups = Router.query['startups'] as string;
	const queryParamCountry = Router.query['country'] as string;
	const queryParamSkills = Router.query['skills'] as string[];
	const queryParamObjective = Router.query['objective'] as string;

	let where: TUser_Profile_Bool_Exp = {};

	if (Router.query['status']) {
		where['status'] = { _eq: queryParamStatus };
	}

	if (Router.query['field']) {
		where['specialistIndustry'] = {
			_eq: queryParamIndustry
		};
	}

	if (Router.query['availability']) {
		where['availability'] = { _eq: queryParamAvailability };
	}

	if (Router.query['startups']) {
		where['startups'] = { _eq: queryParamStartups };
	}

	if (Router.query['skills']) {
		where['skills'] = { _contains: queryParamSkills };
	}

	if (Router.query['objective']) {
		where['objective'] = { _eq: queryParamObjective };
	}

	if (Router.query['country']) {
		where['user'] = {
			address: {
				country: {
					_eq: queryParamCountry
				}
			}
		};
	}

	return where;
};

export const useUsers = () => {
	const { data, loading } = useUsersQuery({
		variables: {
			where: queryBuilder(),
			limit: 10,
			offset: (parseInt(useQueryParam('page')) - 1) * 10,
			orderBy: {
				createdAt: 'desc'
			}
		},
		fetchPolicy: 'network-only'
	});

	return {
		data: data?.user_profile,
		total: data?.user_profile_aggregate?.aggregate?.count,
		loading
	};
};

export default useUsers;
