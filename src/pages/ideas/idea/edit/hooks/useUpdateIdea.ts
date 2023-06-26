import { TIdeas_Set_Input, useUpdateIdeaMutation } from '@/generated/api';
import { useModalDrawer, useNotification } from '@/hooks/util';
import { useIdeaFragment } from '../../query/ideaQuery';

const useUpdateIdea = () => {
	const idea = useIdeaFragment();
	const [updateIdeaMutation] = useUpdateIdeaMutation();
	const { addNotification } = useNotification();
	const { closeModalDrawer } = useModalDrawer();

	const onUpdateIdea = (updatedIdea: TIdeas_Set_Input) => {
		updateIdeaMutation({
			variables: {
				id: idea?.id,
				idea: updatedIdea
			},
			onCompleted: (_data) => {
				closeModalDrawer();
				addNotification({
					message: 'Your idea has been updated successfully.',
					status: 'success'
				});
			},
			onError: (_data) => {
				closeModalDrawer();
				addNotification({
					message: 'Failed to update idea. Please try again later.',
					status: 'error'
				});

				throw new Error(`Failed to update idea with id: ${idea?.id}`);
			}
		});
	};

	return { onUpdateIdea };
};

export default useUpdateIdea;
