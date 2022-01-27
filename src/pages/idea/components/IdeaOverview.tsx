import { IoBulbSharp, IoTrendingUpSharp } from '@components/icons';
import { FlexLayout } from '@components/layouts';
import { OverviewTag } from '@components/shared';
import React, { memo, useContext } from 'react';
import useIdea from '../query/ideaQuery';

export const IdeaOverview = () => {
	const { idea } = useIdea();

	const { status, field } = idea ?? {};

	return (
		<FlexLayout
			css={{
				'> *': {
					marginRight: 8,
					marginBottom: 8
				}
			}}
		>
			{status && (
				<OverviewTag
					title={'Stage'}
					value={status}
					icon={IoTrendingUpSharp}
				/>
			)}
			{field && (
				<OverviewTag title={'Field'} value={field} icon={IoBulbSharp} />
			)}
			{/* {location && (
				<OverviewTag
					title={'Location'}
					value={location ? `${location}, ${country}` : country}
					icon={IoLocationSharp}
				/>
			)} */}
		</FlexLayout>
	);
};

export default IdeaOverview;
