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
	const queryParamName = Router.query['name'] as string;
	const queryParamStatus = Router.query['status'] as string;
	const queryParamIndustry = Router.query['specialist_industry'] as string;
	const queryParamAvailability = Router.query['availability'] as string;

	const where: TUser_Profile_Bool_Exp = {};

	if (Router.query.name) {
		where.status = { _eq: queryParamName };
	}

	// if (router.query.availability) {
	// 	where.availability = { _gt: useQueryParam('availability') };
	// }

	if (Router.query.status) {
		where.status = { _eq: queryParamStatus };
	}

	if (Router.query.field) {
		where.specialistIndustry = {
			_eq: queryParamIndustry
		};
	}

	if (Router.query.availability) {
		// const minMaxAvailability = router.query.availability as string;

		// console.log('minmax: ', minMaxAvailability);
		// const splitMinMax = minMaxAvailability.split('-');
		// if (splitMinMax?.length > 1) {
		// 	where.availability = {
		// 		_gte: parseInt(splitMinMax[0]),
		// 		_lte: parseInt(splitMinMax[1])
		// 	};
		// } else {
		// 	where.availability = { _gte: parseInt(splitMinMax[0]) };
		// }

		// console.log('split min max: ', where.availability);
		// where.specialist_industry = { _eq: useQueryParam('field') };

		where.availability = { _eq: parseInt(queryParamAvailability) };
	}

	return where;
};

const FoundersContainer = () => {
	const {
		// data = {
		// 	user_profile: {} as TUser_Profile,
		// 	user_profile_aggregate: {} as TUser_Profile_Aggregate
		// },
		data,
		loading
	} = useUsersQuery({
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
		<React.Fragment>
			{/* {data?.user_profile?.length < 1 && <NoResults back />} */}
			{hasResults ? (
				<>
					{data?.user_profile_aggregate && (
						<IdeasActions
							total={
								data?.user_profile_aggregate?.aggregate
									?.count || 0
							}
							pageSize={data?.user_profile.length}
							hasResults={data?.user_profile.length > 0}
						/>
					)}

					<StackLayout
						display={'flex'}
						flex={1}
						bg={'white'}
						spacing={6}
						mt={{ sm: 3 }}
					>
						{data?.user_profile?.map((up: TFounderUsers) => {
							<React.Fragment key={up.id}>
								<FounderCard {...up} />
								<AppDivider />
							</React.Fragment>;
						})}
					</StackLayout>

					{hasResults && (
						<OffsetPagination
							pagesCount={
								(data?.user_profile_aggregate.aggregate
									?.count || 0) / 10
							}
							pathname="/founders"
						/>
					)}
				</>
			) : (
				<NoResults back />
			)}
		</React.Fragment>
	);
};

export default FoundersContainer;
