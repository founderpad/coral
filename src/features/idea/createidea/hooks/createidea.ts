import {
	TCreateIdeaMutation,
	TIdeas_Set_Input,
	useCreateIdeaMutation
} from '@/generated/api';
// import { event } from '@/lib/ga';
// import { useUserData } from '@nhost/react';
// import Router from 'next/router';

export const useCreateIdea = () => {
	// const user = useUserData();
	const [createIdeaMutation] = useCreateIdeaMutation();

	const onCreateIdea = (idea: TIdeas_Set_Input) => {
		createIdeaMutation({
			variables: {
				idea
			},
			onCompleted: ({ idea }: TCreateIdeaMutation) => {
				// event({
				// 	action: 'Create idea',
				// 	params: {
				// 		user_id: user?.id,
				// 		display_name: user?.displayName,
				// 		user_email: user?.email,
				// 		idea_id: idea?.id,
				// 		idea_name: idea?.name
				// 	}
				// });
				// Router.push(`/idea/${idea?.id}`);
			},
			onError: (error) => {
				throw new Error(error.message);
			}
		});
	};

	return { onCreateIdea };
};

export default useCreateIdea;
