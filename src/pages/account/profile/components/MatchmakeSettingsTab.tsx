import { SubmitButton } from '@/components/buttons';
import { StackLayout } from '@/components/layouts';
import { TitleEditAction } from '@/components/shared';
import { useModalDrawer } from '@/hooks/util';
import React from 'react';
import MatchmakeSettingsForm from './forms/MatchmakeSettingsForm';

const MatchmakeSettingsTab = () => {
	const { openModalDrawer } = useModalDrawer();

	const onClick = () => {
		openModalDrawer({
			title: 'Your matchmake settings',
			action: (
				<SubmitButton
					name="open-modal-drawer-matchmake-settings-button"
					form="edit-matchmake-settings-form"
					label="Save"
				/>
			),
			body: <MatchmakeSettingsForm />
		});
	};

	return (
		<StackLayout p={4} spacing={8}>
			<TitleEditAction
				title="Your matchmake settings"
				onClick={onClick}
			/>
		</StackLayout>
	);
};

export default MatchmakeSettingsTab;
