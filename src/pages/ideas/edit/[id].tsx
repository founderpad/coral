import PageHeader from 'components/shared/PageHeader';
import { useGetIdea } from 'hooks/ideas';
import { useRouter } from 'next/router';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import CreateEditIdeaForm from '../components/CreateEditIdeaForm';

const EditIdea = () => {
	const router = useRouter();
	const data = useGetIdea(router.query.id as string);
	const idea = data.data;

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
