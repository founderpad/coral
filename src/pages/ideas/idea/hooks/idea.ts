import { useIdeaQuery } from '@/generated/api';

const useIdea = (ideaId: string, userId: string) => {
	const result = useIdeaQuery({
		variables: {
			id: ideaId,
			userId: userId
		}
	});

	return result;
};

export default useIdea;
