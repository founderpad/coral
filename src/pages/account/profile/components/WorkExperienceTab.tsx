import { SubmitButton } from '@/components/buttons';
import { Label } from '@/components/labels';
import { StackLayout } from '@/components/layouts';
import {
	AppDivider,
	// Loading,
	SkillsBadges,
	TitleEditAction
} from '@/components/shared';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import OverviewTags from '@/components/shared/OverviewTags';
import useUserProfile from '@/hooks/user';
import { useModalDrawer, useNotification } from '@/hooks/util';
import React, { useEffect } from 'react';
// import useProfileFragment from '../../../../fragment
import ExperienceForm from './forms/experienceform/ExperienceForm';
import ResumeUploader from './ResumeUploader';
import { useProfileQuery } from '@/generated/api';
import { useUserId } from '@nhost/react';

const WorkExperienceTab = () => {
	// const userProfile = useProfileFragment();
	const { openModalDrawer } = useModalDrawer();
	const isProfileComplete = useUserProfile()?.isComplete;
	const { addNotification } = useNotification();
	const userId = useUserId();

	const { data } = useProfileQuery({
		variables: {
			userId
		}
	});

	const profile = data?.profile?.[0];

	useEffect(() => {
		if (!isProfileComplete) {
			addNotification({
				message: 'Provide some details for more accurate matches',
				status: 'info'
			});
		}
	}, [addNotification, isProfileComplete]);

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
			body: <ExperienceForm {...profile!} />,
			size: '2xl'
		});
	};

	// if (!userProfile) return <Loading small />;

	return (
		<StackLayout p={4} spacing={8}>
			<StackLayout spacing={0} mb={6}>
				<TitleEditAction title="Your details" onClick={onClick} />
			</StackLayout>

			<OverviewTags
				tags={[
					{
						title: 'Specialist field',
						value: profile?.specialistIndustry || 'Not set'
					},
					{
						title: 'Previous startups',
						value: profile?.startups
							? `${profile?.startups}`
							: 'Not set'
					},
					{
						title: 'Startup status',
						value: profile?.status || 'Not set'
					},
					{
						title: 'Capacity (hours per week)',
						value: profile?.availability || 'Not set'
					}
				]}
			/>

			<StackLayout>
				<ContentFieldAndValue
					title="Objective"
					value={profile?.objective || 'Not set'}
				/>
				<ContentFieldAndValue
					title="Background"
					value={profile?.background || 'Not set'}
				/>
				<ContentFieldAndValue
					title="Personal statement"
					value={profile?.statement || 'Not set'}
				/>

				<ContentFieldAndValue
					title="Skills"
					value={
						profile?.skills?.length ? (
							<SkillsBadges skills={profile?.skills} />
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
