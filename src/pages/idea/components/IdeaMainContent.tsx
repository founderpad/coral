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
		<StackLayout spacing={8}>
			<StackLayout spacing={2}>
				<SubheadingText label={'Description'} color={'fpGrey.900'} />
				<Label label={description} color={'fpGrey.300'} />
			</StackLayout>
			<StackLayout spacing={2}>
				<SubheadingText label={'Team'} color={'fpGrey.900'} />
				<Label label={team} color={'fpGrey.300'} />
			</StackLayout>
			<StackLayout spacing={2}>
				<SubheadingText label={'Competitors'} color={'fpGrey.900'} />
				<Label label={competitors} color={'fpGrey.300'} />
			</StackLayout>
			<StackLayout spacing={2}>
				<SubheadingText
					label={'Additional information'}
					color={'fpGrey.900'}
				/>
				<Label label={additional_information} color={'fpGrey.300'} />
			</StackLayout>
		</StackLayout>
	);
};

export default IdeaMainContent;
