import { SubmitButton } from '@/components/buttons';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { TitleEditAction } from '@/components/shared';
import { useModalDrawer } from '@/hooks/util';
import React, { memo } from 'react';
import { useMatchSettingsQuery } from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import { Tag } from '@chakra-ui/react';
import MatchmakeSettingsForm from './forms/matchsettingsform/MatchmakeSettingsForm';

const MatchmakeSettingsTab = () => {
	const { openModalDrawer } = useModalDrawer();

	const { data } = useMatchSettingsQuery({
		variables: {
			id: useAuth().getUser()?.id
		}
	});

	const { lookingFor, type, skills } = data?.settings ?? {};

	const onClick = () => {
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

	return (
		<StackLayout p={4} spacing={8}>
			<TitleEditAction title="Your match settings" onClick={onClick} />
			<StackLayout>
				<ContentFieldAndValue title="I am" value={type || 'Not set'} />
				<ContentFieldAndValue
					title="And I am looking for"
					value={lookingFor || 'Not set'}
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

const SkillsBadges = memo(({ skills }: { skills: string }) => {
	return (
		<FlexLayout flexWrap="wrap" direction="row" alignItems="center">
			{skills?.split(',')?.map((skill) => (
				<Tag fontSize="xs" size="sm" mr={1} mb={1} key={skill}>
					{skill}
				</Tag>
			))}
		</FlexLayout>
	);
});

export default MatchmakeSettingsTab;
