import { StackLayout } from '@/components/layouts';
import { SkillsBadges, TitleEditAction } from '@/components/shared';
import React from 'react';
import { useMatchSettingsQuery } from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import useMatchModal from '@/components/shared/match/MatchModal';

const MatchmakeSettingsTab = () => {
	const { data } = useMatchSettingsQuery({
		variables: {
			id: useAuth().getUser()?.id
		}
	});

	const { onOpenModal } = useMatchModal(data ?? {});

	const { lookingFor, type, skills } = data?.settings ?? {};

	return (
		<StackLayout p={4} spacing={8}>
			<TitleEditAction
				title="Your match settings"
				onClick={onOpenModal}
			/>
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

export default MatchmakeSettingsTab;
