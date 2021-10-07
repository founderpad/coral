import { Stack } from '@chakra-ui/layout';
import { EditButton, SubmitButton } from 'components/buttons';
import { DeleteIconButton } from 'components/buttons/DeleteButton';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { useDeleteIdeaMutation } from 'generated/graphql';
import React, { memo, useCallback, useContext } from 'react';
import EditIdeaForm from './EditIdeaForm';

const IdeaActions = memo(({ ideaId }: { ideaId: string }): JSX.Element => {
	// const [deleteIdea] = useDeleteIdea(ideaId);
	// const idea = useIdeaFragment();
	const [deleteIdeaMutation] = useDeleteIdeaMutation({
		variables: {
			id: ideaId
		}
		// onCompleted: (data) {

		// }
	});

	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onDeleteClick = useCallback(() => {
		setModalDrawer({
			title: 'Delete idea',
			isOpen: true,
			body: 'Are you want to delete this idea? You will no longer be able to view its comments, workshop or metrics.',
			handler: () => deleteIdeaMutation(),
			noBtnLabel: 'Cancel',
			yesBtnLabel: 'Delete idea',
			yesBtnColor: 'red'
		});
	}, []);

	const onEditClick = useCallback(() => {
		setModalDrawer({
			title: 'Edit idea',
			isOpen: true,
			body: <EditIdeaForm />,
			actions: (
				<SubmitButton
					name={'open-modal-drawer-edit-idea-button'}
					form="editIdeaForm"
					label={'Save'}
					size={'sm'}
				/>
			),
			hideFooter: true,
			size: '2xl'
		});
	}, []);

	return (
		<Stack
			direction={'row'}
			spacing={{ base: 2, sm: 4 }}
			justifySelf={'flex-end'}
		>
			<EditButton onClick={onEditClick} aria-label={'Edit idea'} />
			<DeleteIconButton onClick={onDeleteClick} />
		</Stack>
	);
});

export default IdeaActions;
