import { Divider, Stack } from '@chakra-ui/layout';
import NoResults from 'components/shared/NoResults';
import { Idea_Preview, Idea_Preview_Bool_Exp, useGetIdeasQuery } from 'generated/graphql';
import { useRouter } from 'next/router';
import React from 'react';
import IdeaCard from './components/ideacard/IdeaCard';
import IdeasActions from './components/IdeasActions';
import IdeasPagination from './IdeasPagination';
import Loading from 'components/shared/Loading';
import { auth } from 'utils/nhost';

const queryBuilder = (): Idea_Preview_Bool_Exp => {
    const router = useRouter();
    const where: Idea_Preview_Bool_Exp = {};

    if (router.query.name) {
        where.name = { _ilike: `%${router.query.name as string}%` };
    }

    if (router.query.industry) {
        where.industry = { _eq: router.query.industry as string };
    }

    if (router.query.status) {
        where.status = { _eq: router.query.status as string };
    }

    return where;
}

const IdeasContainer = (): JSX.Element => {
    const { data, loading } = useGetIdeasQuery({
        variables: {
            where: queryBuilder(),
            limit: 10,
            offset: (parseInt(useRouter().query.page as string) - 1) * 10,
            orderBy: {
                "created_at": "desc"
            },
            userId: auth.getClaim('x-hasura-user-id') as string,
        }
    });

    if (loading) return <Loading small />

    return (
        <React.Fragment>
            {(data?.idea_preview.length > 0 && data?.idea_preview_aggregate) && (
                <IdeasActions
                    total={
                        data?.idea_preview_aggregate
                            .aggregate.count
                    }
                    pageSize={data?.idea_preview.length}
                />
            )}
            {data?.idea_preview.length < 1 && (
                <NoResults />
            )}
            <Stack
                display={'flex'}
                flex={1}
                bg={'white'}
                spacing={4}
                mt={{ sm: 3 }}
            >
                {data?.idea_preview?.map(
                    (idea: Idea_Preview, key) => (
                        <React.Fragment key={idea.id}>
                            <IdeaCard {...idea} />
                            {key !==
                                data.idea_preview?.length -
                                1 && <Divider />}
                        </React.Fragment>
                    )
                )}
            </Stack>

            {data?.idea_preview?.length > 0 && (
                <IdeasPagination
                    pagesCount={
                        (data?.idea_preview_aggregate.aggregate
                            .count || 0) / 10
                    }
                />
            )}
        </React.Fragment>
    );
}

export default IdeasContainer;