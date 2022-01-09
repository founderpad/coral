import { StackLayout } from 'components/layouts';
import ContentFieldAndValue from 'components/shared/ContentFieldAndValue';
import { TIdeas } from 'generated/api';
import React from 'react';

type Props = Pick<
	TIdeas,
	'description' | 'team' | 'competitors' | 'additionalInformation'
>;

export const IdeaMainContent = (props: Props): JSX.Element => {
	const { description, team, competitors, additionalInformation } = props;
	return (
		<StackLayout spacing={8}>
			<ContentFieldAndValue title={'Description'} value={description} />
			<ContentFieldAndValue title={'Team'} value={team} />
			<ContentFieldAndValue title={'Competitors'} value={competitors} />
			<ContentFieldAndValue
				title={'Additional information'}
				value={additionalInformation}
			/>
		</StackLayout>
	);
};

export default IdeaMainContent;
