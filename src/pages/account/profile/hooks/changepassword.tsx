import { SubmitButton } from '@/components/buttons';
import { useModalDrawer } from '@/hooks/util';
import ChangePasswordForm from '@/components/shared/ChangePasswordForm';

export const useChangePasswordModal = () => {
	const { openModalDrawer, closeModalDrawer } = useModalDrawer();

	const onOpenModal = () => {
		openModalDrawer({
			title: 'Your new password',
			action: (
				<SubmitButton
					name="open-modal-drawer-change-password-button"
					form="edit-change-password"
					label="Save"
				/>
			),
			body: (
				<ChangePasswordForm
					showPasswordLabel={true}
					showSubmit={false}
				/>
			)
		});
	};

	return { onOpenModal, closeModalDrawer };
};

export default useChangePasswordModal;
