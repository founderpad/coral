import { StackLayout } from 'components/layouts';
import { Loading, NoResults } from 'components/shared';
import AppDivider from 'components/shared/AppDivider';
import {
	TUser_Profile,
	TUser_Profile_Bool_Exp,
	useUsersQuery
} from 'generated/api';
import { useQueryParam } from 'hooks/util';
import { useRouter } from 'next/router';
import IdeasActions from 'pages/ideas/components/IdeasActions';
import OffsetPagination from 'pages/ideas/OffsetPagination';
import React from 'react';
import FounderCard from './components/FounderCard';

const queryBuilder = (): TUser_Profile_Bool_Exp => {
	const router = useRouter();
	const where: TUser_Profile_Bool_Exp = {};

	if (router.query.name) {
		where.status = { _eq: useQueryParam('status') };
	}

	// if (router.query.availability) {
	// 	where.availability = { _gt: useQueryParam('availability') };
	// }

	if (router.query.status) {
		where.status = { _eq: useQueryParam('status') };
	}

	if (router.query.field) {
		where.specialist_industry = {
			_eq: useQueryParam('specialist_industry')
		};
	}

	if (router.query.availability) {
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

		where.availability = { _eq: parseInt(useQueryParam('availability')) };
	}

	return where;
};

const FoundersContainer = (): JSX.Element => {
	const { data, loading } = useUsersQuery({
		variables: {
			where: queryBuilder(),
			limit: 10,
			offset: (parseInt(useQueryParam('id')) - 1) * 10,
			orderBy: {
				created_at: 'desc'
			}
		}
	});

	if (loading) return <Loading small />;

	return (
		<React.Fragment>
			{data?.user_profile.length > 0 && data?.user_profile_aggregate && (
				<IdeasActions
					total={data?.user_profile_aggregate.aggregate.count}
					pageSize={data?.user_profile.length}
					hasResults={data?.user_profile.length > 0}
				/>
			)}

			{!loading && data?.user_profile.length < 1 && <NoResults back />}
			<StackLayout
				display={'flex'}
				flex={1}
				bg={'white'}
				spacing={6}
				mt={{ sm: 3 }}
			>
				{data?.user_profile?.map((up: TUser_Profile) => (
					<React.Fragment key={up.id}>
						<FounderCard {...up} />
						<AppDivider />
					</React.Fragment>
				))}
			</StackLayout>

			{data?.user_profile?.length > 0 && (
				<OffsetPagination
					pagesCount={
						(data?.user_profile_aggregate.aggregate.count || 0) / 10
					}
					pathname="/founders"
				/>
			)}
		</React.Fragment>
	);
};

export default FoundersContainer;
