import { SubmitButton } from '@/components/buttons';
import { TMatchSettingsQuery } from '@/generated/api';
import { useModalDrawer } from '@/hooks/util';
import MatchmakeSettingsForm from '@/pages/match/components/MatchmakeSettingsForm';

export const useMatchModal = (data: TMatchSettingsQuery) => {
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
			body: <MatchmakeSettingsForm {...data?.settings} />
		});
	};

	return { onOpenModal, closeModalDrawer };
};

export default useMatchModal;
