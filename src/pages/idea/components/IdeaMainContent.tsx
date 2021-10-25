import { StackLayout } from 'components/layouts';
import ContentFieldAndValue from 'components/shared/ContentFieldAndValue';
import { TIdeas } from 'generated/graphql';
import React from 'react';

type Props = Pick<
	TIdeas,
	'description' | 'team' | 'competitors' | 'additional_information'
>;

export const IdeaMainContent = (props: Props): JSX.Element => {
	const { description, team, competitors, additional_information } = props;
	return (
		<StackLayout spacing={8}>
			<ContentFieldAndValue title={'Description'} value={description} />
			<ContentFieldAndValue title={'Team'} value={team} />
			<ContentFieldAndValue title={'Competitors'} value={competitors} />
			<ContentFieldAndValue
				title={'Additional information'}
				value={additional_information}
			/>
		</StackLayout>
	);
};

export default IdeaMainContent;
