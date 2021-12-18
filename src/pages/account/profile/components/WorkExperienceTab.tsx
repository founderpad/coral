import { Stack } from '@chakra-ui/layout';
import { SubmitButton } from 'components/buttons';
import ContentHighlightsLayout from 'components/layouts/ContentHighlightsLayout';
import { Loading, TitleEditAction } from 'components/shared';
import ModalDrawerContext from 'context/ModalDrawerContext';
import React, { useContext } from 'react';
import useProfileFragment from '../fragments/UserProfileFragment';
import ExperienceForm from './forms/ExperienceForm';
import ResumeUploader from './ResumeUploader';

const WorkExperienceTab = (): JSX.Element => {
	const userProfile = useProfileFragment();
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onClick = () => {
		setModalDrawer({
			title: 'Your experience',
			isOpen: true,
			actions: (
				<SubmitButton
					name={'open-modal-drawer-experience-button'}
					form="editExperienceForm"
					label={'Save'}
					size={'xs'}
				/>
			),
			body: <ExperienceForm {...userProfile} />,
			noBtnLabel: 'Cancel',
			yesBtnLabel: 'Update',
			yesBtnColor: 'red',
			hideFooter: true,
			size: '3xl'
		});
	};

	if (!userProfile) return <Loading small />;

	return (
		<Stack>
			<TitleEditAction title="Your experience" onClick={onClick} />
			<ContentHighlightsLayout
				content={[
					{
						title: 'Background',
						value: userProfile?.background ?? 'Not set'
					},
					{
						title: 'Personal statement',
						value: userProfile?.statement ?? 'Not set'
					},
					{
						title: 'Overview of businesses',
						value: userProfile?.business_description ?? 'Not set'
					},
					{
						title: 'Skills',
						value:
							userProfile?.skills?.join(', ') ??
							'No skills selected'
					}
				]}
				highlights={[
					{
						title: 'Specialist field',
						value: userProfile?.specialist_industry ?? 'Not set'
					},
					{
						title: 'Previous startups',
						value: userProfile?.startups
							? `${userProfile?.startups} startups`
							: 'Not set'
					},
					{
						title: 'Start-up  status',
						value: userProfile?.status ?? 'Not set'
					},
					{
						title: 'Availability',
						value: userProfile?.availability
							? `${userProfile?.availability} hours per week`
							: 'Not set'
					}
				]}
			/>
			<TitleEditAction title="Your resume" />
			<ResumeUploader />
		</Stack>
	);
};

export default WorkExperienceTab;
