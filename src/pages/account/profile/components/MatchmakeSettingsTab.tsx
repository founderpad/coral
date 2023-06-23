import { StackLayout } from '@/components/layouts';
import { SkillsBadges, TitleEditAction } from '@/components/shared';
import React from 'react';
import { useMatchSettingsQuery } from '@/generated/api';
// import { useAuth } from '@/hooks/auth';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import useMatchModal from '@/components/shared/match/MatchModal';
import { useUserData } from '@nhost/react';

const MatchmakeSettingsTab = () => {
	const user = useUserData();
	const { data } = useMatchSettingsQuery({
		variables: {
			id: user?.id
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
