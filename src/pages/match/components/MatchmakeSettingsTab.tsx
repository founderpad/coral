import { StackLayout } from '@/components/layouts';
import { SkillsBadges, TitleEditAction } from '@/components/shared';
import React from 'react';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import useMatchModal from '@/components/shared/match/MatchModal';
import { useMatchSettings } from '../hooks/useMatchSettings';

const MatchmakeSettingsTab = () => {
	const { data } = useMatchSettings();

	const { onOpenModal } = useMatchModal(data ?? {});

	const { lookingFor, type, skills } = data?.settings ?? {};

	return (
		<StackLayout p={4} spacing={8}>
			<TitleEditAction
				title="Your match settings"
				onClick={onOpenModal}
			/>
			<StackLayout>
				<ContentFieldAndValue title="I consider myself" value={type} />
				<ContentFieldAndValue
					title="And I am looking for"
					value={lookingFor}
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

export default MatchmakeSettingsTab;
