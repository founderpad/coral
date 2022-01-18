import { StackLayout } from '@components/layouts';
import { Loading, NoResults } from '@components/shared';
import {
	TIdeaPreviewFieldsFragment,
	TIdea_Preview_Bool_Exp,
	useIdeasQuery
} from '@generated/api';
import { useClaim } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import { useRouter } from 'next/router';
import React from 'react';
import IdeaCard from './components/ideacard/IdeaCard';
import IdeasActions from './components/IdeasActions';
import OffsetPagination from './OffsetPagination';

// type TIdeaPreview = Omit<TIdea_Preview, 'comments' | 'nodes'>;

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

const IdeasContainer = () => {
	const { data, loading } = useIdeasQuery({
		variables: {
			where: queryBuilder(),
			limit: 10,
			offset: (parseInt(useQueryParam('page')) - 1) * 10,
			orderBy: {
				created_at: 'desc'
			},
			userId: useClaim()
		}
	});

	const hasResults = data?.idea_preview?.length ?? 0;

	if (loading) return <Loading small />;
	if (!loading && hasResults < 1) return <NoResults />;

	return (
		<React.Fragment>
			{/* {data?.idea_preview.length > 0 && data?.idea_preview_aggregate && ( */}
			<IdeasActions
				total={data?.idea_preview_aggregate?.aggregate?.count ?? 0}
				pageSize={data?.idea_preview?.length ?? 0}
				hasResults={hasResults > 0}
			/>
			{/* )} */}

			{!loading && hasResults < 1 && <NoResults back />}
			<StackLayout
				display={'flex'}
				flex={1}
				bg={'white'}
				spacing={6}
				mt={{ sm: 3 }}
			>
				{data?.idea_preview?.map((idea: TIdeaPreviewFieldsFragment) => (
					<React.Fragment key={idea.id}>
						<IdeaCard {...idea} />
					</React.Fragment>
				))}
			</StackLayout>

			{hasResults && (
				<OffsetPagination
					pagesCount={
						(data?.idea_preview_aggregate?.aggregate?.count || 0) /
						10
					}
					pathname="/ideas"
				/>
			)}
		</React.Fragment>
	);
};

export default IdeasContainer;
