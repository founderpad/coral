import { DocumentTitle } from '@components/shared';
import IdeaContext from '@context/idea/IdeaContext';
import { TIdeaQuery, useIdeaQuery } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import AuthFilter from '@utils/AuthFilter';
import { NextPage } from 'next';
import React, { useState } from 'react';
import ViewIdeaTabLayout from './ViewIdeaTabLayout';

const ViewIdea: NextPage = () => {
	const user = useCurrentUser();
	const [data, setData] = useState<TIdeaQuery>({});

	useIdeaQuery({
		variables: {
			id: useQueryParam('id'),
			userId: user?.id
		},
		onCompleted: (data) => {
			setData(data);
		}
	});

	return (
		<React.Fragment>
			<DocumentTitle title="View idea" />
			<IdeaContext.Provider value={{ data, setData }}>
				<ViewIdeaTabLayout />
			</IdeaContext.Provider>
		</React.Fragment>
	);
};

export default AuthFilter(ViewIdea);
