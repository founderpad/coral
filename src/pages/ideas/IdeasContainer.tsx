import { StackLayout } from 'components/layouts';
import { Loading, NoResults } from 'components/shared';
import {
	TIdea_Preview,
	TIdea_Preview_Bool_Exp,
	useIdeasQuery
} from 'generated/api';
import { useClaim } from 'hooks/auth';
import { useQueryParam } from 'hooks/util';
import { useRouter } from 'next/router';
import React from 'react';
import IdeaCard from './components/ideacard/IdeaCard';
import IdeasActions from './components/IdeasActions';
import OffsetPagination from './OffsetPagination';

const queryBuilder = (): TIdea_Preview_Bool_Exp => {
	const router = useRouter();
	const where: TIdea_Preview_Bool_Exp = {};

	if (router.query.name) {
		where.name = { _ilike: `%${useQueryParam('name')}%` };
	}

	if (router.query.field) {
		where.field = { _eq: useQueryParam('field') };
	}

	if (router.query.status) {
		where.status = { _eq: useQueryParam('status') };
	}

	return where;
};

const IdeasContainer = (): JSX.Element => {
	const { data, loading } = useIdeasQuery({
		variables: {
			where: queryBuilder(),
			limit: 10,
			offset: (parseInt(useQueryParam('page')) - 1) * 10,
			orderBy: {
				createdAt: 'desc'
			},
			userId: useClaim()
		}
	});

	if (loading) return <Loading small />;
	if (!loading && data?.idea_preview.length < 1) return <NoResults />;

	return (
		<React.Fragment>
			{/* {data?.idea_preview.length > 0 && data?.idea_preview_aggregate && ( */}
			<IdeasActions
				total={data?.idea_preview_aggregate.aggregate.count}
				pageSize={data?.idea_preview.length}
				hasResults={data?.idea_preview.length > 0}
			/>
			{/* )} */}

			{!loading && data?.idea_preview.length < 1 && <NoResults back />}
			<StackLayout
				display={'flex'}
				flex={1}
				bg={'white'}
				spacing={6}
				mt={{ sm: 3 }}
			>
				{data?.idea_preview?.map((idea: TIdea_Preview) => (
					<React.Fragment key={idea.id}>
						<IdeaCard {...idea} />
					</React.Fragment>
				))}
			</StackLayout>

			{data?.idea_preview?.length > 0 && (
				<OffsetPagination
					pagesCount={
						(data?.idea_preview_aggregate.aggregate.count || 0) / 10
					}
					pathname="/ideas"
				/>
			)}
		</React.Fragment>
	);
};

export default IdeasContainer;