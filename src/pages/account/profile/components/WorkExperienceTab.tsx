import { SubmitButton } from '@/components/buttons';
import { Label } from '@/components/labels';
import { StackLayout } from '@/components/layouts';
import {
	AppDivider,
	Loading,
	SkillsBadges,
	TitleEditAction
} from '@/components/shared';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import OverviewTags from '@/components/shared/OverviewTags';
import useUserProfile from '@/hooks/user';
import { useModalDrawer, useNotification } from '@/hooks/util';
import React, { useEffect } from 'react';
import useProfileFragment from '../../../../fragments/UserProfileFragment';
import ExperienceForm from './forms/experienceform/ExperienceForm';
import ResumeUploader from './ResumeUploader';

const WorkExperienceTab = () => {
	const userProfile = useProfileFragment();
	const { openModalDrawer } = useModalDrawer();
	const isProfileComplete = useUserProfile()?.isComplete;
	const { addNotification } = useNotification();

	useEffect(() => {
		if (!isProfileComplete) {
			addNotification({
				message: 'Provide some details for more accurate matches',
				status: 'info'
			});
		}
	}, [addNotification, isProfileComplete]);

	const {
		specialistIndustry,
		startups,
		statement,
		status,
		availability,
		background,
		skills,
		objective
	} = userProfile ?? {};

	const onClick = () => {
		openModalDrawer({
			title: 'Your details',
			action: (
				<SubmitButton
					name="open-modal-drawer-experience-button"
					form="edit-experience-form"
					label="Save"
				/>
			),
			body: <ExperienceForm {...userProfile} />,
			size: '2xl'
		});
	};

	if (!userProfile) return <Loading small />;

	return (
		<StackLayout p={4} spacing={8}>
			<StackLayout spacing={0} mb={6}>
				<TitleEditAction title="Your details" onClick={onClick} />
			</StackLayout>

			<OverviewTags
				tags={[
					{
						title: 'Specialist field',
						value: specialistIndustry || 'Not set'
					},
					{
						title: 'Previous startups',
						value: startups ? `${startups}` : 'Not set'
					},
					{
						title: 'Startup status',
						value: status || 'Not set'
					},
					{
						title: 'Capacity (hours per week)',
						value: availability || 'Not set'
					}
				]}
			/>

			<StackLayout>
				<ContentFieldAndValue
					title="Objective"
					value={objective || 'Not set'}
				/>
				<ContentFieldAndValue
					title="Background"
					value={background || 'Not set'}
				/>
				<ContentFieldAndValue
					title="Personal statement"
					value={statement || 'Not set'}
				/>

				<ContentFieldAndValue
					title="Skills"
					value={
						skills?.length ? (
							<SkillsBadges skills={skills} />
						) : (
							'No skills selected'
						)
					}
				/>
			</StackLayout>

			<AppDivider />

			<TitleEditAction
				title="Your resume"
				subtitle={
					<Label fontSize="xs" color="fpGrey.500">
						Users will be able to view your resume by going to your
						profile
					</Label>
				}
			/>
			<ResumeUploader />
		</StackLayout>
	);
};

export default WorkExperienceTab;
