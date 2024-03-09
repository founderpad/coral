import { FlexLayout } from '@/components/layouts';
import { OverviewTag } from '@/components/shared';
import React from 'react';
import useIdea from '../query/ideaQuery';

export const IdeaOverview = () => {
	const { idea } = useIdea() ?? {};

	const { status, field, user } = idea ?? {};
	const { address } = user ?? {};
	const { country, location } = address ?? {};

	return (
		<FlexLayout
			css={{
				'> *': {
					marginRight: 8
					// marginBottom: 8
				}
			}}
		>
			{status && <OverviewTag title="Stage" value={status} />}
			{field && <OverviewTag title="Field" value={field} />}
			{country && (
				<OverviewTag
					title="Location"
					value={location ? `${location}, ${country}` : country}
				/>
			)}
		</FlexLayout>
	);
};

export default IdeaOverview;
