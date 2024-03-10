import { StackLayout } from '@/components/layouts';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import { TIdeas } from '@/generated/api';
import React from 'react';

type Props = Pick<
	TIdeas,
	'description' | 'team' | 'competitors' | 'additionalInformation'
>;

const IdeaMainContent = (props: Props) => {
	const { description, team, competitors, additionalInformation } = props;
	return (
		<StackLayout spacing={8}>
			<ContentFieldAndValue title="Description" value={description} />
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

export default IdeaMainContent;
