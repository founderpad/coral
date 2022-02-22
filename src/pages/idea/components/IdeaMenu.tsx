import { DeleteButton, SubmitButton } from '@components/buttons';
import { IoPencilOutline, IoTrashBinOutline } from '@components/icons';
import { BaseMenuItem } from '@components/menu';
import { BaseMenu } from '@components/menu/BaseMenu';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useDeleteIdeaMutation } from '@generated/api';
import Router from 'next/router';
import React, { memo, useCallback, useContext } from 'react';
import EditIdeaForm from './EditIdeaForm';

export const IdeaActions = memo(({ ideaId }: { ideaId: string }) => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const [deleteIdeaMutation] = useDeleteIdeaMutation({
		variables: {
			id: ideaId
		},
		onCompleted: () => {
			Router.replace('/ideas?page=1');
			setModalDrawer({
				isOpen: false
			});
		}
	});

	const onDeleteClick = useCallback(() => {
		setModalDrawer({
			title: 'Delete idea',
			isOpen: true,
			body: 'Are you want to delete this idea? You will no longer be able to view its comments, workshop or metrics.',
			action: (
				<DeleteButton
					name="confirm-delete-idea-button"
					onClick={() => deleteIdeaMutation()}
					variant="outline"
				>
					Delete idea
				</DeleteButton>
			)
		});
	}, [deleteIdeaMutation, setModalDrawer]);

	const onEditClick = useCallback(() => {
		setModalDrawer({
			title: 'Edit idea',
			isOpen: true,
			body: <EditIdeaForm />,
			action: (
				<SubmitButton
					name="open-modal-drawer-edit-idea-button"
					form="edit-idea-form"
					label="Save"
				/>
			),
			size: '2xl'
		});
	}, [setModalDrawer]);

	return (
		<BaseMenu>
			<BaseMenuItem
				title={'Edit'}
				subTitle={'Edit this idea'}
				icon={IoPencilOutline}
				onClick={onEditClick}
				divider={true}
			/>
			<BaseMenuItem
				title={'Delete'}
				subTitle={'Delete this idea'}
				icon={IoTrashBinOutline}
				onClick={onDeleteClick}
				color={'red.500'}
			/>
		</BaseMenu>
	);
});

export default IdeaActions;
