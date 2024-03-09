import {
	TCreateIdeaMutation,
	TIdeas_Set_Input,
	useCreateIdeaMutation
} from '@/generated/api';
// import { useUserData } from '@nhost/react';

export const useCreateIdea = () => {
	const [createIdeaMutation] = useCreateIdeaMutation();
	// const user = useUserData();

	const onCreateIdea = (idea: TIdeas_Set_Input) => {
		createIdeaMutation({
			variables: {
				idea
			},
			onCompleted: ({ idea }: TCreateIdeaMutation) => {}
		});
	};

	return { onCreateIdea };
};

export default useCreateIdea;
