import IdeaCycleContext from '@/context/IdeaCycleContext';
import {
	TIdea_Preview_Bool_Exp,
	TIdea_Preview_Order_By,
	useIdeasQuery
} from '@/generated/api';
import { useClaim } from '@/hooks/auth';
import { useQueryParam } from '@/hooks/util';
import Router from 'next/router';
import { useContext } from 'react';

const queryBuilder = (): TIdea_Preview_Bool_Exp => {
	const { name, field, status, country, new: isNew } = Router.query;

	const where: TIdea_Preview_Bool_Exp = {};

	if (name) {
		where.name = { _ilike: `%${name}%` };
	}

	if (field) {
		where.field = { _eq: field as string };
	}

	if (status) {
		where.status = { _eq: status as string };
	}

	if (country) {
		where.user = {
			address: {
				country: { _eq: country as string }
			}
		};
	}

	if (isNew) {
		where.isNew = { _eq: !!isNew };
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

export const useIdeas = () => {
	const { onSetCachedIdeaIds } = useContext(IdeaCycleContext);
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

	return {
		data: data?.idea_preview,
		total: data?.idea_preview_aggregate?.aggregate?.count,
		loading
	};
};

export default useIdeas;
