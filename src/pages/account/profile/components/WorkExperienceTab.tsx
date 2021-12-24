import { SubmitButton } from 'components/buttons';
import { StackLayout } from 'components/layouts';
import { Loading, TitleEditAction } from 'components/shared';
import AppDivider from 'components/shared/AppDivider';
import ContentFieldAndValue from 'components/shared/ContentFieldAndValue';
import OverviewTags from 'components/shared/OverviewTags';
import ModalDrawerContext from 'context/ModalDrawerContext';
import React, { useContext } from 'react';
import {
	IoAnalyticsSharp,
	IoBulbSharp,
	IoRocketSharp,
	IoTimeSharp
} from 'react-icons/io5';
import useProfileFragment from '../../../../fragments/UserProfileFragment';
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
		<StackLayout p={4}>
			<TitleEditAction title="Your experience" onClick={onClick} />
			<OverviewTags
				tags={[
					{
						title: 'Specialist field',
						value: userProfile?.specialist_industry ?? 'Not set',
						icon: IoBulbSharp
					},
					{
						title: 'Previous startups',
						value: userProfile?.startups
							? `${userProfile?.startups} startups`
							: 'Not set',
						icon: IoRocketSharp
					},
					{
						title: 'Startup status',
						value: userProfile?.status ?? 'Not set',
						icon: IoAnalyticsSharp
					},
					{
						title: 'Availability (hours)',
						value: userProfile?.availability
							? `${userProfile?.availability} hours per week`
							: 'Not set',
						icon: IoTimeSharp
					}
				]}
			/>

			<AppDivider display={{ base: 'block', md: 'none' }} />

			<StackLayout>
				<ContentFieldAndValue
					title={'Background'}
					value={userProfile?.background ?? 'Not set'}
				/>
				<ContentFieldAndValue
					title={'Personal statement'}
					value={userProfile?.statement ?? 'Not set'}
				/>
				<ContentFieldAndValue
					title={'Overview of businesses'}
					value={userProfile?.business_description ?? 'Not set'}
				/>
				<ContentFieldAndValue
					title={'Skills'}
					value={
						userProfile?.skills?.join(', ') ?? 'No skills selected'
					}
				/>
			</StackLayout>
			<AppDivider />

			<TitleEditAction title="Your resume" />
			<ResumeUploader />
		</StackLayout>
	);
};

export default WorkExperienceTab;
