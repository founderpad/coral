import { SubmitButton } from '@/components/buttons';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { TitleEditAction } from '@/components/shared';
import { useModalDrawer, useQueryParam } from '@/hooks/util';
import React, { memo } from 'react';
import MatchmakeSettingsForm from './forms/MatchmakeSettingsForm';
import { useMatchmakeSettingsQuery } from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import { AlertFeedback } from '@/components/alert';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import { Tag } from '@chakra-ui/react';

const MatchmakeSettingsTab = () => {
	const { openModalDrawer } = useModalDrawer();

	const isChangeSuccess = useQueryParam('mm_success');
	const isChangeError = useQueryParam('mm_error');

	const { data } = useMatchmakeSettingsQuery({
		variables: {
			id: useAuth().getUser()?.id
		}
	});

	const { looking_for, type, skills } = data?.preferences ?? {};

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
			body: <MatchmakeSettingsForm {...data?.preferences} />
		});
	};

	return (
		<StackLayout p={4} spacing={8}>
			<TitleEditAction
				title="Your matchmake settings"
				onClick={onClick}
			/>

			{isChangeSuccess && (
				<AlertFeedback
					status="success"
					message="Your matchmake preferences have been updated successfully"
				/>
			)}

			{isChangeError && (
				<AlertFeedback
					status="error"
					message="Failed to update matchmake preferences. Please try again later"
				/>
			)}

			<StackLayout>
				<ContentFieldAndValue title="I am" value={type || 'Not set'} />
				<ContentFieldAndValue
					title="And I am looking for"
					value={looking_for || 'Not set'}
				/>

				<ContentFieldAndValue
					title="Skills I am looking for"
					value={
						skills?.length ? (
							<SkillsBadges skills={skills} />
						) : (
							'No skills selected'
						)
					}
				/>
			</StackLayout>
		</StackLayout>
	);
};

const SkillsBadges = memo(({ skills }: { skills: Array<string> }) => {
	return (
		<FlexLayout flexWrap="wrap" direction="row" alignItems="center">
			{skills?.map((skill) => (
				<Tag fontSize="xs" size="sm" mr={1} mb={1} key={skill}>
					{skill}
				</Tag>
			))}
		</FlexLayout>
	);
});

export default MatchmakeSettingsTab;
