import { PageHeader } from 'components/shared';
import { useGetIdea } from 'hooks/ideas';
import { useQueryParam } from 'hooks/util';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import CreateEditIdeaForm from '../components/CreateEditIdeaForm';

const EditIdea = () => {
	const data = useGetIdea(useQueryParam('id'));
	const idea = data?.data;

	return (
		<React.Fragment>
			<PageHeader title="Edit your idea" />
			{idea && <CreateEditIdeaForm idea={idea} />}
		</React.Fragment>
	);
};

// export const getServerSideProps = (context) => {
// 	const router = useRouter();

// 	console.log('router: ', context);
// 	const idea = useGetIdea(router.query.slug as string);

// 	return { props: idea };
// };

export default AuthFilter(EditIdea);
