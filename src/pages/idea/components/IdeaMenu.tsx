import { SubmitButton } from '@components/buttons';
import { IoPencilSharp, IoTrashBin } from '@components/icons';
import { BaseMenuItem } from '@components/menu';
import { BaseMenu } from '@components/menu/BaseMenu';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useDeleteIdeaMutation } from '@generated/api';
import React, { memo, useCallback, useContext } from 'react';
import EditIdeaForm from './EditIdeaForm';

export const IdeaActions = memo(({ ideaId }: { ideaId: string }) => {
	// const [deleteIdea] = useDeleteIdea(ideaId);
	// const idea = useIdea();
	const [deleteIdeaMutation] = useDeleteIdeaMutation({
		variables: {
			id: ideaId
		}
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
	}, [deleteIdeaMutation, setModalDrawer]);

	const onEditClick = useCallback(() => {
		setModalDrawer({
			title: 'Edit idea',
			isOpen: true,
			body: <EditIdeaForm />,
			actions: (
				<SubmitButton
					name={'open-modal-drawer-edit-idea-button'}
					form={'editIdeaForm'}
					label={'Save'}
				/>
			),
			hideFooter: true,
			size: '2xl'
		});
	}, [setModalDrawer]);

	return (
		<BaseMenu>
			<BaseMenuItem
				title={'Edit'}
				subTitle={'Edit this idea'}
				icon={IoPencilSharp}
				onClick={onEditClick}
				divider={true}
			/>
			<BaseMenuItem
				title={'Delete'}
				subTitle={'Delete this idea'}
				icon={IoTrashBin}
				onClick={onDeleteClick}
				color={'red.500'}
			/>
		</BaseMenu>
	);
});

export default IdeaActions;
