import { StackLayout } from '@components/layouts';
import { Loading, NoResults } from '@components/shared';
import AppDivider from '@components/shared/AppDivider';
import {
	TUserSearchFragment,
	TUser_Profile_Bool_Exp,
	useUsersQuery
} from '@generated/api';
import { useQueryParam } from '@hooks/util';
import OffsetPagination from '@pages/ideas/OffsetPagination';
import Router from 'next/router';
import React from 'react';
import FounderCard from './components/FounderCard';
import UserSearchActions from './components/UserSearchActions';

// function buildQuery<T>(values: Array<string>): T {
// 	let where = {} as any;

// 	for (const value in values) {
// 		if (Router.query[value]) {
// 			where[value] = { _eq: Router.query[value] };
// 		}
// 	}

// 	return where;
// }

const queryBuilder = (): TUser_Profile_Bool_Exp => {
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

const FoundersContainer = () => {
	const { data, loading } = useUsersQuery({
		variables: {
			where: queryBuilder(),
			// where: buildQuery<TUser_Profile_Bool_Exp>([
			// 	'status',
			// 	'field',
			// 	'availability',
			// 	'startups',
			// 	'country'
			// ]),
			limit: 10,
			offset: (parseInt(useQueryParam('id')) - 1) * 10,
			orderBy: {
				createdAt: 'desc'
			}
		}
	});

	const hasResults = data?.user_profile?.length ?? 0;

	if (loading) return <Loading small />;

	return (
		<StackLayout p={{ base: 4, sm: 6 }} flex={1}>
			<UserSearchActions
				total={data?.user_profile_aggregate?.aggregate?.count || 0}
				pageSize={data?.user_profile?.length ?? 0}
			/>
			{!loading && hasResults < 1 ? (
				<NoResults back />
			) : (
				<StackLayout display={'flex'} spacing={6}>
					{data?.user_profile?.map(
						(searchedUser: TUserSearchFragment) => (
							<React.Fragment key={searchedUser.user?.id}>
								<FounderCard {...searchedUser} />
								<AppDivider />
							</React.Fragment>
						)
					)}
				</StackLayout>
			)}
			{hasResults && (
				<OffsetPagination
					pagesCount={
						(data?.user_profile_aggregate.aggregate?.count || 0) /
						10
					}
					pathname="/founders"
				/>
			)}
			)
		</StackLayout>
	);
};

export default FoundersContainer;
