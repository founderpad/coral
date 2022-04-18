import { StackLayout } from '@components/layouts';
import ContentFieldAndValue from '@components/shared/ContentFieldAndValue';
import React from 'react';
import useIdea from '../query/ideaQuery';

export const IdeaDetails = () => {
	const { idea } = useIdea() ?? {};

	const { summary, description, team, competitors, additionalInformation } =
		idea ?? {};

	return (
		<StackLayout flex={1}>
			{summary && (
				<ContentFieldAndValue title="Summary of idea" value={summary} />
			)}
			{description && (
				<ContentFieldAndValue title="Description" value={description} />
			)}
			{team && <ContentFieldAndValue title="Team" value={team} />}
			{competitors && (
				<ContentFieldAndValue title="Competitors" value={competitors} />
			)}
			{additionalInformation && (
				<ContentFieldAndValue
					title="Additional information"
					value={additionalInformation}
				/>
			)}
		</StackLayout>
	);
};

export default IdeaDetails;
