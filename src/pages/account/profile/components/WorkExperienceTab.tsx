import { Tag } from '@chakra-ui/react';
import { AlertFeedback } from '@/components/alert';
import { SubmitButton } from '@/components/buttons';
import { Label } from '@/components/labels';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { AppDivider, Loading, TitleEditAction } from '@/components/shared';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import OverviewTags from '@/components/shared/OverviewTags';
import useUserProfile from '@/hooks/user';
import { useModalDrawer } from '@/hooks/util';
import React, { memo } from 'react';
import useProfileFragment from '../../../../fragments/UserProfileFragment';
import ExperienceForm from './forms/experienceform/ExperienceForm';
import ResumeUploader from './ResumeUploader';
// import ResumeUploader from './ResumeUploader';

const WorkExperienceTab = () => {
	const userProfile = useProfileFragment();
	const { openModalDrawer } = useModalDrawer();
	const isProfileComplete = useUserProfile()?.isComplete;

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
				<TitleEditAction
					title="Your details"
					subtitle={
						!isProfileComplete && (
							<AlertFeedback
								message="Provide some details for more accurate matches"
								status="error"
							/>
						)
					}
					onClick={onClick}
				/>
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
