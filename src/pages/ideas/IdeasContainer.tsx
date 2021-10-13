import { Divider, Stack } from '@chakra-ui/layout';
import { Loading, NoResults } from 'components/shared';
import {
	Idea_Preview,
	Idea_Preview_Bool_Exp,
	useGetIdeasQuery
} from 'generated/graphql';
import { useQueryParam } from 'hooks/util';
import { useRouter } from 'next/router';
import React from 'react';
import { auth } from 'utils/nhost';
import IdeaCard from './components/ideacard/IdeaCard';
import IdeasActions from './components/IdeasActions';
import IdeasPagination from './IdeasPagination';

const queryBuilder = (): Idea_Preview_Bool_Exp => {
	const router = useRouter();
	const where: Idea_Preview_Bool_Exp = {};

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
	const { data, loading } = useGetIdeasQuery({
		variables: {
			where: queryBuilder(),
			limit: 10,
			offset: (parseInt(useQueryParam('id')) - 1) * 10,
			orderBy: {
				created_at: 'desc'
			},
			userId: auth.getClaim('x-hasura-user-id') as string
		}
	});

	if (loading) return <Loading small />;
	if (!loading && data?.idea_preview.length < 1) return <NoResults back />;

	return (
		<React.Fragment>
			{data?.idea_preview.length > 0 && data?.idea_preview_aggregate && (
				<IdeasActions
					total={data?.idea_preview_aggregate.aggregate.count}
					pageSize={data?.idea_preview.length}
				/>
			)}
			<Stack
				display={'flex'}
				flex={1}
				bg={'white'}
				spacing={4}
				mt={{ sm: 3 }}
			>
				{data?.idea_preview?.map((idea: Idea_Preview, key) => (
					<React.Fragment key={idea.id}>
						<IdeaCard {...idea} />
						{key !== data.idea_preview?.length - 1 && <Divider />}
					</React.Fragment>
				))}
			</Stack>

			{data?.idea_preview?.length > 0 && (
				<IdeasPagination
					pagesCount={
						(data?.idea_preview_aggregate.aggregate.count || 0) / 10
					}
				/>
			)}
		</React.Fragment>
	);
};

export default IdeasContainer;
