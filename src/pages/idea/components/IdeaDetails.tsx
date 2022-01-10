import { StackLayout } from 'components/layouts';
import ContentFieldAndValue from 'components/shared/ContentFieldAndValue';
import IdeaContext from 'context/idea/IdeaContext';
import { TIdeas } from 'generated/api';
import React, { useContext } from 'react';

const IdeaDetails = () => {
	const {
		data: { idea = {} as TIdeas }
	} = useContext(IdeaContext);

	const { description, team, competitors, additionalInformation } = idea;

	return (
		<StackLayout flex={1}>
			<ContentFieldAndValue title={'Description'} value={description} />
			{team && <ContentFieldAndValue title={'Team'} value={team} />}
			{competitors && (
				<ContentFieldAndValue
					title={'Competitors'}
					value={competitors}
				/>
			)}
			{additionalInformation && (
				<ContentFieldAndValue
					title={'Additional information'}
					value={additionalInformation}
				/>
			)}
		</StackLayout>
	);
};

export default IdeaDetails;
