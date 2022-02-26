import { StackLayout } from '@components/layouts';
import { AppDivider, Loading, NoResults, PageHeader } from '@components/shared';
import {
	TIdeaPreviewFieldsFragment,
	TIdea_Preview_Bool_Exp,
	TIdea_Preview_Order_By,
	useIdeasQuery
} from '@generated/api';
import { useClaim } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import React, { useContext } from 'react';
import IdeaCard from './components/ideacard/IdeaCard';
import IdeasActions from './components/IdeasActions';
import OffsetPagination from './OffsetPagination';
import Router from 'next/router';
import IdeaCycleContext from '@context/IdeaCycleContext';

const queryBuilder = (): TIdea_Preview_Bool_Exp => {
	const queryParamName = Router.query['name'] as string;
	const queryParamField = Router.query['field'] as string;
	const queryParamStatus = Router.query['status'] as string;
	const queryParamCountry = Router.query['country'] as string;

	const where: TIdea_Preview_Bool_Exp = {};

	if (Router.query.name) {
		where.name = { _ilike: `%${queryParamName}%` };
	}

	if (Router.query.field) {
		where.field = { _eq: queryParamField };
	}

	if (Router.query.status) {
		where.status = { _eq: queryParamStatus };
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

	if (Router.query['new']) {
		where['isNew'] = { _eq: !!Router.query['new'] };
	}

	return where;
};

const orderBuilder = (): TIdea_Preview_Order_By => {
	const order: TIdea_Preview_Order_By = {};
	if (Router.query['popular']) {
		const popularity = Router.query['popular'] as string;
		if (popularity === 'Upvotes') {
			order['votes_aggregate'] = { count: 'desc' };
		}

		order['comments_aggregate'] = { count: 'desc' };
	} else {
		order['createdAt'] = 'desc';
	}

	return order;
};

const IdeasContainer = () => {
	const { onSetCachedIdeaIds } = useContext(IdeaCycleContext);
	// const isReportSuccess = useQueryParam('rp_success');
	// const isReportError = useQueryParam('rp_error');

	const { data, loading } = useIdeasQuery({
		variables: {
			where: {
				isPublished: { _eq: true },
				...queryBuilder()
			},
			limit: 10,
			offset: (parseInt(useQueryParam('page')) - 1) * 10,
			orderBy: orderBuilder(),
			userId: useClaim()
		},
		onCompleted: (data) => {
			onSetCachedIdeaIds(
				Array.from(data?.['idea_preview'], (idea) => idea.id)
			);
		},
		fetchPolicy: 'network-only'
	});

	const hasResults = data?.idea_preview?.length ?? 0;

	if (loading) return <Loading small />;
	// if (!loading && hasResults < 1) return <NoResults back />;

	return (
		<>
			<PageHeader
				title="All ideas"
				subtitle="The latest ideas from the community"
				// action={
				// 	<>
				// 		{isReportSuccess && (
				// 			<AlertFeedback
				// 				status="success"
				// 				message="Your idea has been updated successfully"
				// 				w="auto"
				// 				ml="auto"
				// 			/>
				// 		)}

				// 		{isReportError && (
				// 			<AlertFeedback
				// 				status="error"
				// 				message={
				// 					'Failed to update idea. Please try again later'
				// 				}
				// 				w="auto"
				// 				ml="auto"
				// 			/>
				// 		)}
				// 	</>
				// }
			/>
			<StackLayout p={{ base: 4, sm: 6 }} flex={1}>
				<IdeasActions
					total={data?.idea_preview_aggregate?.aggregate?.count ?? 0}
					pageSize={data?.idea_preview?.length ?? 0}
				/>

				{!loading && hasResults < 1 ? (
					<NoResults back />
				) : (
					<StackLayout display="flex" spacing={6}>
						{data?.idea_preview?.map(
							(idea: TIdeaPreviewFieldsFragment) => (
								<React.Fragment key={idea.id}>
									<IdeaCard {...idea} />

									<AppDivider />
								</React.Fragment>
							)
						)}
					</StackLayout>
				)}

				{hasResults && (
					<OffsetPagination
						pagesCount={
							(data?.idea_preview_aggregate?.aggregate?.count ||
								0) / 10
						}
						pathname="/ideas"
					/>
				)}
			</StackLayout>
		</>
	);
};

export default IdeasContainer;
