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
					size={'sm'}
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
					{ title: 'Background', value: userProfile?.background },
					{
						title: 'Personal statement',
						value: userProfile?.statement
					},
					{
						title: 'Overview of businesses',
						value: userProfile?.statement
					},
					{ title: 'Skills', value: userProfile?.skills.join(', ') }
				]}
				highlights={[
					{
						title: 'Specialist field',
						value: userProfile?.specialist_industry ?? 'Not set'
					},
					{
						title: 'No. of startups',
						value: userProfile?.startups
							? `${userProfile?.startups} previous startups`
							: 'Not set'
					},
					{
						title: 'Current start-up status',
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
