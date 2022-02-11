import { DocumentTitle } from '@components/shared';
import { useIdeaQuery } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import AuthFilter from '@utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import ViewIdeaTabLayout from './ViewIdeaTabLayout';

const ViewIdea: NextPage = () => {
	const user = useCurrentUser();
	// const [data, setData] = useState<TIdeaQuery>({});

	useIdeaQuery({
		variables: {
			id: useQueryParam('id'),
			userId: user?.id
		}
	});

	return (
		<React.Fragment>
			<DocumentTitle title="View idea" />
			<ViewIdeaTabLayout />
		</React.Fragment>
	);
};

export default AuthFilter(ViewIdea);
