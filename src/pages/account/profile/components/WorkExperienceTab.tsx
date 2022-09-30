import { Icon, Tag } from '@chakra-ui/react';
import { AlertFeedback } from '@/components/alert';
import { SubmitButton } from '@/components/buttons';
import { Label } from '@/components/labels';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { AppDivider, Loading, TitleEditAction } from '@/components/shared';
// import AppDivider from '@/components/shared/AppDivider';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import OverviewTags from '@/components/shared/OverviewTags';
import useUserProfile from '@/hooks/user';
import { useModalDrawer, useQueryParam } from '@/hooks/util';
import React, { memo } from 'react';
import { IoWarningSharp } from 'react-icons/io5';
import useProfileFragment from '../../../../fragments/UserProfileFragment';
import ExperienceForm from './forms/ExperienceForm';
import ResumeUploader from './ResumeUploader';
// import ResumeUploader from './ResumeUploader';

const WorkExperienceTab = () => {
	const userProfile = useProfileFragment();
	const { openModalDrawer } = useModalDrawer();
	const isProfileComplete = useUserProfile()?.isComplete;

	const isChangeSuccess = useQueryParam('exp_success');
	const isChangeError = useQueryParam('exp_error');

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
			title: 'Your experience',
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
				<TitleEditAction
					icon={
						!isProfileComplete ? (
							<Icon
								as={IoWarningSharp}
								color="red.500"
								fontSize="lg"
							/>
						) : undefined
					}
					title="Your experience"
					subtitle={
						!isProfileComplete && (
							<Label
								color="red.500"
								fontSize="xs"
								textAlign="start"
								pt={1}
							>
								Provide some more details and showcase your
								experience
							</Label>
						)
					}
					onClick={onClick}
				/>

				{isChangeSuccess && (
					<AlertFeedback
						status="success"
						message={
							'Your experience has been updated successfully'
						}
					/>
				)}

				{isChangeError && (
					<AlertFeedback
						status="error"
						message={
							'Failed to update experience. Please try again later'
						}
					/>
				)}
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

export default WorkExperienceTab;
