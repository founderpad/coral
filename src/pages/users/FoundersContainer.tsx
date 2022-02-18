import { StackLayout } from '@components/layouts';
import { Loading, NoResults } from '@components/shared';
import AppDivider from '@components/shared/AppDivider';
import { TUser_Profile_Bool_Exp, useUsersQuery } from '@generated/api';
import { useQueryParam } from '@hooks/util';
import IdeasActions from '@pages/ideas/components/IdeasActions';
import OffsetPagination from '@pages/ideas/OffsetPagination';
import Router from 'next/router';
import React from 'react';
import { TFounderUsers } from 'src/types/founders';
import FounderCard from './components/FounderCard';

const queryBuilder = (): TUser_Profile_Bool_Exp => {
	const queryParamStatus = Router.query['status'] as string;
	const queryParamIndustry = Router.query['field'] as string;
	const queryParamAvailability = Router.query['availability'] as string;
	const queryParamStartups = Router.query['startups'] as string;
	const queryParamCountry = Router.query['country'] as string;

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

	if (Router.query['country']) {
		where = {
			user: {
				address: {
					country: {
						_eq: queryParamCountry
					}
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
		<StackLayout p={{ base: 4, sm: 6 }}>
			{/* {data?.user_profile?.length < 1 && <NoResults back />} */}
			{data?.user_profile_aggregate && (
				<IdeasActions
					total={data?.user_profile_aggregate?.aggregate?.count || 0}
					pageSize={data?.user_profile.length}
					hasResults={data?.user_profile.length > 0}
				/>
			)}
			{!loading && hasResults < 1 ? (
				<NoResults back />
			) : (
				<StackLayout display={'flex'} flex={1} spacing={6}>
					{data?.user_profile?.map((user: TFounderUsers) => (
						<React.Fragment key={user.id}>
							<FounderCard {...user} />
							<AppDivider />
						</React.Fragment>
					))}
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
