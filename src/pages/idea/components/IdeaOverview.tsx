import {
	IoBulbSharp,
	IoLocationSharp,
	IoTrendingUpSharp
} from 'components/icons';
import { FlexLayout } from 'components/layouts';
import { OverviewTag } from 'components/shared';
import IdeaContext from 'context/idea/IdeaContext';
import React, { memo, useContext } from 'react';

export const IdeaOverview = memo(() => {
	const {
		data: { idea }
	} = useContext(IdeaContext);

	const {
		status,
		field,
		user: { country, location }
	} = idea;

	return (
		<FlexLayout
			css={{
				'> *': {
					marginRight: 8,
					marginBottom: 8
				}
			}}
		>
			<OverviewTag
				title={'Stage'}
				value={status}
				icon={IoTrendingUpSharp}
			/>
			<OverviewTag title={'Field'} value={field} icon={IoBulbSharp} />
			{location && (
				<OverviewTag
					title={'Location'}
					value={location ? `${location}, ${country}` : country}
					icon={IoLocationSharp}
				/>
			)}
		</FlexLayout>
	);
});

export default IdeaOverview;
