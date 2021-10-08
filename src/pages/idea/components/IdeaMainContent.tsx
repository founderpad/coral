import { SubheadingText } from 'components/heading';
import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import { Ideas } from 'generated/graphql';
import React from 'react';

type Props = Pick<
	Ideas,
	'description' | 'team' | 'competitors' | 'additional_information'
>;

export const IdeaMainContent = (props: Props): JSX.Element => {
	const { description, team, competitors, additional_information } = props;
	return (
		<StackLayout spacing={12}>
			<StackLayout spacing={2}>
				<SubheadingText label={'Description'} />
				<Label label={description} color={'fpGrey.300'} />
			</StackLayout>
			<StackLayout spacing={2}>
				<SubheadingText label={'Team'} />
				<Label label={team} color={'fpGrey.300'} />
			</StackLayout>
			<StackLayout spacing={2}>
				<SubheadingText label={'Competitors'} />
				<Label label={competitors} color={'fpGrey.300'} />
			</StackLayout>
			<StackLayout spacing={2}>
				<SubheadingText label={'Additional information'} />
				<Label label={additional_information} color={'fpGrey.300'} />
			</StackLayout>
		</StackLayout>
	);
};

export default IdeaMainContent;
