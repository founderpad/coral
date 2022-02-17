import { FormControl } from '@chakra-ui/form-control';
import { Stack } from '@chakra-ui/layout';
import { Checkbox } from '@chakra-ui/react';
import { FormLabelText } from '@components/form';
import Form from '@components/form/Form';
import { SelectField, TextareaField } from '@components/input';
import { Label } from '@components/labels';
import ModalDrawerContext from '@context/ModalDrawerContext';
import {
	TUser_Profile,
	TUser_Profile_Set_Input,
	useUpdateUserProfileMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { setProfileComplete } from '@slices/auth';
import {
	ALL_IDEA_CATEGORY_FIELDS,
	ALL_USER_OBJECTIVES,
	AVAILABILITY_IN_HOURS,
	EXPERIENCE_SKILLS,
	mobileAvailabilityOptions,
	mobileIdeaCategoryFields,
	mobileNumberOfStartups,
	mobileStartupStatuses,
	mobileUserObjectives,
	NUMBER_OF_STARTUPS,
	STARTUP_STATUS
} from '@utils/Constants';
import { useCallback, useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import React from 'react';
import { redirectTo } from '@utils/validators';

const ExperienceForm = (userProfile: TUser_Profile) => {
	const dispatch = useDispatch();
	const isProfileComplete = useCurrentUser()?.profile?.isComplete;

	/* eslint-disable @typescript-eslint/no-unused-vars */
	const { __typename, userId, id, ...rest } = userProfile;
	const [selectedSkills, setSelectedSkills] = useState<string[]>(
		userProfile.skills ?? []
	);

	const { setModalDrawer } = useContext(ModalDrawerContext);
	const { handleSubmit, control, reset, getValues, setValue, formState } =
		useForm<TUser_Profile_Set_Input>({
			mode: 'all',
			defaultValues: {
				...rest
			}
		});

	const [updateUserProfileMutation] = useUpdateUserProfileMutation({
		variables: {
			id: userProfile.id,
			user_profile: { ...getValues(), isComplete: true }
		},
		onCompleted: (_data) => {
			console.log('vlaues: ', getValues());
			setModalDrawer({
				isOpen: false
			});

			redirectTo(false, 'exp');

			if (!isProfileComplete) dispatch(setProfileComplete());
		},
		onError: (_data) => {
			setModalDrawer({
				isOpen: false
			});
			redirectTo(true, 'exp');
		}
	});

	const onSkillsToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const skill = e.target.name;
		const skillsCopy = [...selectedSkills];

		const index = skillsCopy.findIndex((s) => s === skill);
		index > -1 ? skillsCopy.splice(index, 1) : skillsCopy.push(skill);

		setSelectedSkills(skillsCopy);
		setValue('skills', skillsCopy);
	};

	const { errors, isSubmitting, isValid } = formState;

	const resetField = useCallback(
		(name: string) => {
			reset({
				...getValues(),
				[name]: ''
			});
		},
		[reset, getValues]
	);

	return (
		<Form
			id={'editExperienceForm'}
			name={'editExperienceForm'}
			onSubmit={handleSubmit(updateUserProfileMutation)}
			isSubmitting={isSubmitting}
			isValid={isValid}
			stackProps={{ spacing: 10 }}
		>
			<SelectField
				id="objective"
				name="objective"
				label="What is your objective on this platform?"
				placeholder="your objective on this platform"
				options={ALL_USER_OBJECTIVES}
				mobileOptions={mobileUserObjectives()}
				onClear={() => resetField('objective')}
				control={control}
				isRequired
			/>

			<TextareaField
				id="background"
				label="Background"
				placeholder="Your background"
				error={errors['background']}
				errorText="You must provide a background (max. 400 characters)"
				name="background"
				control={control}
				minH={'100px'}
				rules={{ maxLength: 400 }}
				onClear={() => resetField('background')}
				isRequired
			/>

			<TextareaField
				id="statement"
				label="Personal statement"
				placeholder="Your personal statement"
				error={errors['statement']}
				errorText="Your personal statement can not be more than 400 characters"
				name="statement"
				control={control}
				rules={{ maxLength: 400 }}
				onClear={() => resetField('statement')}
			/>

			<SelectField
				id="specialistIndustry"
				name="specialistIndustry"
				label="What is your specialist field?"
				placeholder="specialist field"
				options={ALL_IDEA_CATEGORY_FIELDS}
				mobileOptions={mobileIdeaCategoryFields()}
				control={control}
				onClear={() => resetField('specialistIndustry')}
			/>

			<Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
				<SelectField
					id="startups"
					name="startups"
					options={NUMBER_OF_STARTUPS}
					mobileOptions={mobileNumberOfStartups()}
					placeholder="number of startups"
					control={control}
					label={'How many startups have you worked with?'}
					onClear={() => resetField('startups')}
				/>

				<SelectField
					id="availability"
					name="availability"
					options={AVAILABILITY_IN_HOURS}
					mobileOptions={mobileAvailabilityOptions()}
					placeholder="capacity per week"
					control={control}
					label={'Capacity (hours per week)'}
					helperText={
						'How many hours you can contribute towards a new idea'
					}
					onClear={() => resetField('availability')}
				/>
			</Stack>

			<SelectField
				id="status"
				name="status"
				label="What is your current startup status?"
				error={errors['status']}
				errorText="You must specify your current startup status"
				placeholder="startup status"
				options={STARTUP_STATUS}
				mobileOptions={mobileStartupStatuses()}
				onClear={() => resetField('status')}
				control={control}
				isRequired
			/>

			<TextareaField
				id="businessDescription"
				name="businessDescription"
				label="What were your previous businesses?"
				placeholder="List your previous businesses"
				control={control}
				onClear={() => resetField('businessDescription')}
			/>

			<FormControl>
				<FormLabelText label={'Your skills'} />
				{EXPERIENCE_SKILLS.map((es: string) => (
					<Controller
						key={es}
						name={'skills'}
						render={({ field: { ref } }) => (
							<Checkbox
								name={es}
								rounded={'none'}
								focusBorderColor={'gray.150'}
								value={es}
								p={2}
								onChange={onSkillsToggle}
								colorScheme={'fpPrimary'}
								color={'fpGrey.900'}
								ref={ref}
								size={'md'}
								fontSize={'xs'}
								isChecked={selectedSkills.includes(es)}
							>
								<Label color={'fpGrey.900'} fontSize={'xs'}>
									{es}
								</Label>
							</Checkbox>
						)}
						control={control}
					/>
				))}
			</FormControl>
		</Form>
	);
};

export default ExperienceForm;
