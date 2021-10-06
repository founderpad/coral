import { Stack, Text } from '@chakra-ui/layout';
import { Grid, GridItem } from '@chakra-ui/react';
import SubmitButton from 'components/buttons/SubmitButton';
import Loading from 'components/shared/Loading';
import TitleEditAction from 'components/shared/TitleEditAction';
import ModalDrawerContext from 'context/ModalDrawerContext';
import React, { memo, useContext } from 'react';
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
			<Grid
				py={4}
				templateColumns="repeat(12, 1fr)"
				gap={{ md: 4 }}
				display={{ base: 'bock', md: 'grid' }}
			>
				<ExperienceLabel
					label={'Background'}
					value={userProfile?.background ?? 'Not set'}
				/>
				<ExperienceLabel
					label={'Personal statement'}
					value={userProfile?.statement ?? 'Not set'}
				/>

				<ExperienceLabel
					label={'Your specialist industry'}
					value={userProfile?.specialist_industry ?? 'Not set'}
				/>

				<ExperienceLabel
					label={'No. of startups'}
					value={
						userProfile?.startups
							? `Worked with ${userProfile?.startups} startups`
							: 'Not set'
					}
				/>
				<ExperienceLabel
					label={'Current start-up status'}
					value={userProfile?.status ?? 'Not set'}
				/>

				<ExperienceLabel
					label={'Availability'}
					value={
						userProfile?.availability
							? `Can commit to ${userProfile?.availability} hours per week`
							: 'Not set'
					}
				/>

				<ExperienceLabel
					label={'Overview of businesses'}
					value={userProfile?.business_description ?? 'Not set'}
				/>

				<ExperienceLabel
					label={'Skills'}
					value={
						userProfile?.skills
							? userProfile?.skills.join(', ')
							: 'Not set'
					}
				/>
			</Grid>
			<TitleEditAction title="Your resume" />
			<ResumeUploader />
		</Stack>
	);
};

const ExperienceLabel = memo(
	({
		label,
		value
	}: {
		label: string;
		value: string | number;
	}): JSX.Element => {
		return (
			<React.Fragment>
				<GridItem colSpan={{ base: 12, md: 3 }}>
					<Text
						color={'fpGrey.900'}
						fontSize={'md'}
						fontWeight={'medium'}
					>
						{label}
					</Text>
				</GridItem>
				<GridItem
					colSpan={{ base: 12, md: 9 }}
					mb={{ base: 4, md: 0 }}
					fontSize={{ base: 'sm', md: 'md' }}
				>
					<Text color={'fpGrey.700'}>{value}</Text>
				</GridItem>
			</React.Fragment>
		);
	}
);

export default WorkExperienceTab;
