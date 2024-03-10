import { SubmitButton } from '@/components/buttons';
import { MatchmakeSettingsForm } from '@/features/match/components';
import { TMatchSettingsQuery } from '@/generated/api';
import { useModalDrawer } from '@/hooks/util';

export const useMatchModal = (data: TMatchSettingsQuery, isInitial = false) => {
	const { openModalDrawer, closeModalDrawer } = useModalDrawer();

	const onOpenModal = () => {
		openModalDrawer({
			title: 'Your match settings',
			action: (
				<SubmitButton
					name="open-modal-drawer-match-settings-button"
					form="edit-match-settings-form"
					label="Save"
				/>
			),
			body: (
				<MatchmakeSettingsForm
					{...data?.settings}
					isInitial={isInitial}
				/>
			)
		});
	};

	return { onOpenModal, closeModalDrawer };
};

export default useMatchModal;
