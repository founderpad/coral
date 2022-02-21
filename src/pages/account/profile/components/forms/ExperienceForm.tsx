import { FormControl } from '@chakra-ui/form-control';
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
	mobileIdeaCategoryFields,
	NUMBER_OF_STARTUPS,
	STARTUP_STATUS
} from '@utils/Constants';
import { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import React from 'react';
import { redirectTo } from '@utils/validators';
import { FormSelect, FormTextarea } from '@components/form/inputs/FormField';
import { StackLayout } from '@components/layouts';

const ExperienceForm = (userProfile: TUser_Profile) => {
	const dispatch = useDispatch();
	const isProfileComplete = useCurrentUser()?.profile?.isComplete;

	/* eslint-disable @typescript-eslint/no-unused-vars */
	const { __typename, userId, id, ...rest } = userProfile;
	const [selectedSkills, setSelectedSkills] = useState<string[]>(
		userProfile.skills ?? []
	);

	const { setModalDrawer } = useContext(ModalDrawerContext);
	const {
		handleSubmit,
		control,
		getValues,
		setValue,
		register,
		resetField,
		formState
	} = useForm<TUser_Profile_Set_Input>({
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

	return (
		<Form
			id="edit-experience-form"
			name="edit-experience-form"
			onSubmit={handleSubmit(updateUserProfileMutation)}
			isSubmitting={isSubmitting}
			isValid={isValid}
		>
			{/* <SelectField
				id="objective"
				name="objective"
				label="What is your objective on this platform?"
				placeholder="your objective on this platform"
				error={errors['objective']}
				errorText="You must provide your objective on this platform"
				options={ALL_USER_OBJECTIVES}
				mobileOptions={mobileUserObjectives()}
				onClear={() => resetField('objective')}
				control={control}
				isRequired
			/> */}

			<FormSelect<TUser_Profile_Set_Input>
				id="objective"
				name="objective"
				label="What is your objective on this platform?"
				placeholder="your objective on this platform"
				options={ALL_USER_OBJECTIVES}
				register={register}
				control={control}
				rules={{
					required: 'You must provide your objective on this platform'
				}}
				errors={errors}
				onClear={() => resetField('objective', { defaultValue: '' })}
			/>

			<FormTextarea<TUser_Profile_Set_Input>
				id="background"
				name="background"
				label="Background"
				placeholder="Write about your background, such as past experiences in business"
				register={register}
				control={control}
				rules={{
					maxLength: {
						value: 400,
						message:
							'Your background can not be more than 400 characters '
					}
				}}
				errors={errors}
				onClear={() => resetField('background', { defaultValue: '' })}
			/>

			<FormTextarea<TUser_Profile_Set_Input>
				id="statement"
				name="statement"
				label="Personal statement"
				placeholder="Write about what you're looking to achieve so that ther"
				register={register}
				control={control}
				rules={{
					maxLength: {
						value: 400,
						message:
							'Your personal statement can not be more than 400 characters '
					}
				}}
				errors={errors}
				onClear={() => resetField('statement', { defaultValue: '' })}
			/>

			<FormSelect<TUser_Profile_Set_Input>
				id="specialistIndustry"
				name="specialistIndustry"
				label="Your specialist field"
				placeholder="specialist field"
				options={ALL_IDEA_CATEGORY_FIELDS}
				register={register}
				control={control}
				onClear={() =>
					resetField('specialistIndustry', { defaultValue: '' })
				}
			/>

			<StackLayout direction={{ base: 'column', md: 'row' }} spacing={6}>
				<FormSelect<TUser_Profile_Set_Input>
					id="startups"
					name="startups"
					label="Startups have you have worked with"
					placeholder="number of startups"
					options={NUMBER_OF_STARTUPS}
					register={register}
					control={control}
					onClear={() => resetField('startups', { defaultValue: '' })}
				/>

				<FormSelect<TUser_Profile_Set_Input>
					id="availability"
					name="availability"
					label="Capacity (hours per week)"
					placeholder="capacity per week"
					options={AVAILABILITY_IN_HOURS}
					register={register}
					control={control}
					onClear={() =>
						resetField('availability', { defaultValue: '' })
					}
				/>
			</StackLayout>

			<FormSelect<TUser_Profile_Set_Input>
				id="status"
				name="status"
				label="Your current startup status"
				placeholder="startup status"
				options={STARTUP_STATUS}
				register={register}
				control={control}
				onClear={() => resetField('status', { defaultValue: '' })}
				rules={{
					required: 'You must provide your current startup status'
				}}
				errors={errors}
			/>

			{/* <TextareaField
				id="businessDescription"
				name="businessDescription"
				label="What were your previous businesses?"
				placeholder="List your previous businesses"
				control={control}
				onClear={() => resetField('businessDescription')}
			/> */}

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
								py={1}
								pr={2}
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
