import { useIdeaQuery } from '@/generated/api';
import { useQueryParam } from '@/hooks/util';
import { useUserId } from '@nhost/react';

export const useIdea = () => {
	const userId = useUserId();
	const ideaId = useQueryParam('id');

	useIdeaQuery({
		variables: {
			id: ideaId,
			userId
		}
	});
};

export default useIdea;
