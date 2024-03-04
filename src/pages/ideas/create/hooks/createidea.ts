import {
	TCreateIdeaMutation,
	TIdeas_Set_Input,
	useCreateIdeaMutation
} from '@/generated/api';
import Router from 'next/router';
import { event } from '@/lib/ga';
import { useUserData } from '@nhost/react';

export const useCreateIdea = () => {
	const [createIdeaMutation] = useCreateIdeaMutation();
	const user = useUserData();

	const onCreateIdea = (idea: TIdeas_Set_Input) => {
		createIdeaMutation({
			variables: {
				idea
			},
			onCompleted: ({ idea }: TCreateIdeaMutation) => {
				event({
					action: 'Create idea',
					params: {
						user_id: user?.id,
						display_name: user?.displayName,
						user_email: user?.email,
						idea_id: idea?.id,
						idea_name: idea?.name
					}
				});

				Router.push(`/idea/${idea?.id}`);
			}
		});
	};

	return { onCreateIdea };
};

export default useCreateIdea;
