import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import {
	IoAnalyticsOutline,
	IoBulbOutline,
	IoRocketOutline,
	IoTimeOutline
} from '@components/icons';
import { StackLayout } from '@components/layouts';
import { Loading, TitleEditAction } from '@components/shared';
import AppDivider from '@components/shared/AppDivider';
import ContentFieldAndValue from '@components/shared/ContentFieldAndValue';
import OverviewTags from '@components/shared/OverviewTags';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useQueryParam } from '@hooks/util';
import { convertCapacityToString } from '@utils/validators';
import React, { useContext } from 'react';
import useProfileFragment from '../../../../fragments/UserProfileFragment';
import ExperienceForm from './forms/ExperienceForm';
import ResumeUploader from './ResumeUploader';

const WorkExperienceTab = () => {
	const userProfile = useProfileFragment();
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const isChangeSuccess = useQueryParam('exp_success');
	const isChangeError = useQueryParam('exp_error');

	const {
		specialistIndustry,
		startups,
		statement,
		status,
		availability = 0,
		businessDescription,
		background,
		skills
	} = userProfile ?? {};

	const onClick = () => {
		setModalDrawer({
			title: 'Your experience',
			isOpen: true,
			actions: (
				<SubmitButton
					name={'open-modal-drawer-experience-button'}
					form="editExperienceForm"
					label={'Save'}
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
			<StackLayout spacing={0}>
				<TitleEditAction title="Your experience" onClick={onClick} />

				{isChangeSuccess && (
					<AlertFeedback
						status={'success'}
						message={
							'Your experience has been updated successfully'
						}
					/>
				)}

				{isChangeError && (
					<AlertFeedback
						status={'error'}
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
						value: specialistIndustry ?? 'Not set',
						icon: IoBulbOutline
					},
					{
						title: 'Previous startups',
						value: startups ? `${startups} startups` : 'Not set',
						icon: IoRocketOutline
					},
					{
						title: 'Startup status',
						value: status ?? 'Not set',
						icon: IoAnalyticsOutline
					},
					{
						title: 'Capacity (hours per week)',
						value: availability
							? convertCapacityToString(availability)
							: 'Not set',
						icon: IoTimeOutline
					}
				]}
			/>

			<AppDivider />

			<StackLayout spacing={8}>
				<ContentFieldAndValue title={'Background'} value={background} />
				<ContentFieldAndValue
					title={'Personal statement'}
					value={statement}
				/>
				<ContentFieldAndValue
					title={'Overview of businesses'}
					value={businessDescription}
				/>
				<ContentFieldAndValue
					title={'Skills'}
					value={skills?.join(', ')}
				/>
			</StackLayout>

			<AppDivider />

			<TitleEditAction title="Your resume" />
			<ResumeUploader />
		</StackLayout>
	);
};

export default WorkExperienceTab;
