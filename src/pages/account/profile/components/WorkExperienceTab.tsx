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
import { convertCapacityToString } from 'utils/validators';
import useProfileFragment from '../../../../fragments/UserProfileFragment';
import ExperienceForm from './forms/ExperienceForm';
import ResumeUploader from './ResumeUploader';

const WorkExperienceTab = (): JSX.Element => {
	const userProfile = useProfileFragment();
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const {
		specialist_industry,
		startups,
		statement,
		status,
		availability,
		business_description,
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
			<AppDivider />
			<OverviewTags
				tags={[
					{
						title: 'Specialist field',
						value: specialist_industry ?? 'Not set',
						icon: IoBulbSharp
					},
					{
						title: 'Previous startups',
						value: startups ? `${startups} startups` : 'Not set',
						icon: IoRocketSharp
					},
					{
						title: 'Startup status',
						value: status ?? 'Not set',
						icon: IoAnalyticsSharp
					},
					{
						title: 'Capacity (hours per week)',
						value: availability
							? convertCapacityToString(availability)
							: 'Not set',
						icon: IoTimeSharp
					}
				]}
			/>

			<AppDivider />

			<StackLayout spacing={8}>
				<ContentFieldAndValue
					title={'Background'}
					value={background ?? 'Not set'}
				/>
				<ContentFieldAndValue
					title={'Personal statement'}
					value={statement ?? 'Not set'}
				/>
				<ContentFieldAndValue
					title={'Overview of businesses'}
					value={business_description ?? 'Not set'}
				/>
				<ContentFieldAndValue
					title={'Skills'}
					value={skills?.join(', ') ?? 'No skills selected'}
				/>
			</StackLayout>

			<AppDivider />

			<TitleEditAction title="Your resume" />
			<ResumeUploader />
		</StackLayout>
	);
};

export default WorkExperienceTab;
