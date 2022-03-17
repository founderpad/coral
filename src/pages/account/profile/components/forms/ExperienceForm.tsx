import { FormControl } from '@chakra-ui/form-control';
import { Button, Checkbox } from '@chakra-ui/react';
import { FormLabelText } from '@components/form';
import { BaseForm } from '@components/form';
import { Label } from '@components/labels';
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
	NUMBER_OF_STARTUPS,
	STARTUP_STATUS
} from '@utils/Constants';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import React from 'react';
import { redirectTo } from '@utils/validators';
import { FormSelect, FormTextarea } from '@components/form/inputs/FormField';
import { FlexLayout, StackLayout } from '@components/layouts';
import { useModalDrawer } from '@hooks/util';

const ExperienceForm = (userProfile: TUser_Profile) => {
	const dispatch = useDispatch();
	const isProfileComplete = useCurrentUser()?.profile?.isComplete;

	const { __typename, userId, id, ...rest } = userProfile;
	const [selectedSkills, setSelectedSkills] = useState<string[]>(
		userProfile.skills ?? []
	);

	const defaultValues = { ...rest };

	const { setModalDrawer } = useModalDrawer();
	const [updateUserProfileMutation] = useUpdateUserProfileMutation();

	const onSkillsToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const skill = e.target.name;
		const skillsCopy = [...selectedSkills];

		const index = skillsCopy.findIndex((s) => s === skill);
		index > -1 ? skillsCopy.splice(index, 1) : skillsCopy.push(skill);

		setSelectedSkills(skillsCopy);
	};

	const onClearSkills = () => {
		setSelectedSkills([]);
	};

	const onUpdateExperience = (experienceValues: TUser_Profile_Set_Input) => {
		updateUserProfileMutation({
			variables: {
				id,
				user_profile: {
					...experienceValues,
					skills: selectedSkills,
					isComplete: true
				}
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
	};

	return (
		<BaseForm<TUser_Profile_Set_Input>
			name="edit-experience-form"
			onSubmit={onUpdateExperience}
			defaultValues={defaultValues}
			stackProps={{
				alignItems: 'center'
			}}
		>
			{({ register, control, resetField, formState: { errors } }) => (
				<React.Fragment>
					<FormSelect<TUser_Profile_Set_Input>
						id="objective"
						name="objective"
						label="What is your objective on this platform?"
						placeholder="your objective on this platform"
						options={ALL_USER_OBJECTIVES}
						register={register}
						control={control}
						rules={{
							required:
								'You must provide your objective on this platform'
						}}
						errors={errors}
						onClear={() =>
							resetField('objective', { defaultValue: '' })
						}
					/>

					<FormTextarea<TUser_Profile_Set_Input>
						id="background"
						name="background"
						label="Background"
						placeholder="Write about your background, such as past experiences in business (max. 400 characters)"
						register={register}
						control={control}
						rules={{
							maxLength: {
								value: 400,
								message:
									'Your background can not be more than 400 characters '
							}
						}}
						onClear={() =>
							resetField('background', { defaultValue: '' })
						}
					/>

					<FormTextarea<TUser_Profile_Set_Input>
						id="statement"
						name="statement"
						label="Personal statement"
						placeholder="Write about what you're looking to achieve (max. 400 characters)"
						register={register}
						control={control}
						rules={{
							maxLength: {
								value: 400,
								message:
									'Your personal statement can not be more than 400 characters '
							}
						}}
						onClear={() =>
							resetField('statement', { defaultValue: '' })
						}
					/>

					<StackLayout
						direction={{ base: 'column', sm: 'row' }}
						w="full"
					>
						<FormSelect<TUser_Profile_Set_Input>
							id="status"
							name="status"
							label="Your current startup status"
							placeholder="startup status"
							options={STARTUP_STATUS}
							register={register}
							control={control}
							rules={{
								required:
									'You must provide your current startup status'
							}}
							errors={errors}
							onClear={() =>
								resetField('status', { defaultValue: '' })
							}
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

					<StackLayout
						direction={{ base: 'column', sm: 'row' }}
						w="full"
					>
						<FormSelect<TUser_Profile_Set_Input>
							id="specialistIndustry"
							name="specialistIndustry"
							label="Your specialist field"
							placeholder="specialist field"
							options={ALL_IDEA_CATEGORY_FIELDS}
							register={register}
							control={control}
							onClear={() =>
								resetField('specialistIndustry', {
									defaultValue: ''
								})
							}
						/>

						<FormSelect<TUser_Profile_Set_Input>
							id="startups"
							name="startups"
							label="Startups have you have worked with"
							placeholder="number of startups"
							options={NUMBER_OF_STARTUPS}
							register={register}
							control={control}
							onClear={() =>
								resetField('startups', { defaultValue: '' })
							}
						/>
					</StackLayout>

					<FormControl>
						<FlexLayout justifyContent="space-between">
							<FormLabelText label="Your skills" />
							{selectedSkills.length > 0 && (
								<Button
									fontSize="x-small"
									colorScheme="fpPrimary"
									variant="link"
									mb={1}
									onClick={onClearSkills}
								>
									Clear
								</Button>
							)}
						</FlexLayout>
						{EXPERIENCE_SKILLS.map((es: string) => (
							<Controller
								key={es}
								name="skills"
								render={({ field: { ref } }) => (
									<Checkbox
										name={es}
										rounded="none"
										value={es}
										py={1}
										pr={2}
										onChange={onSkillsToggle}
										colorScheme="fpPrimary"
										color="fpGrey.900"
										ref={ref}
										size="md"
										fontSize="xs"
										isChecked={selectedSkills.includes(es)}
									>
										<Label
											color="fpGrey.900"
											fontWeight="normal"
											fontSize="xs"
										>
											{es}
										</Label>
									</Checkbox>
								)}
								control={control}
							/>
						))}
					</FormControl>
				</React.Fragment>
			)}
		</BaseForm>

		// <Form
		// 	id="edit-experience-form"
		// 	name="edit-experience-form"
		// 	onSubmit={handleSubmit(updateUserProfileMutation)}
		// >
		// 	<FormSelect<TUser_Profile_Set_Input>
		// 		id="objective"
		// 		name="objective"
		// 		label="What is your objective on this platform?"
		// 		placeholder="your objective on this platform"
		// 		options={ALL_USER_OBJECTIVES}
		// 		register={register}
		// 		control={control}
		// 		rules={{
		// 			required: 'You must provide your objective on this platform'
		// 		}}
		// 		errors={errors}
		// 		onClear={() => resetField('objective', { defaultValue: '' })}
		// 	/>

		// 	<FormTextarea<TUser_Profile_Set_Input>
		// 		id="background"
		// 		name="background"
		// 		label="Background"
		// 		placeholder="Write about your background, such as past experiences in business (max. 400 characters)"
		// 		register={register}
		// 		control={control}
		// 		rules={{
		// 			maxLength: {
		// 				value: 400,
		// 				message:
		// 					'Your background can not be more than 400 characters '
		// 			}
		// 		}}
		// 		errors={errors}
		// 		onClear={() => resetField('background', { defaultValue: '' })}
		// 	/>

		// 	<FormTextarea<TUser_Profile_Set_Input>
		// 		id="statement"
		// 		name="statement"
		// 		label="Personal statement"
		// 		placeholder="Write about what you're looking to achieve (max. 400 characters)"
		// 		register={register}
		// 		control={control}
		// 		rules={{
		// 			maxLength: {
		// 				value: 400,
		// 				message:
		// 					'Your personal statement can not be more than 400 characters '
		// 			}
		// 		}}
		// 		errors={errors}
		// 		onClear={() => resetField('statement', { defaultValue: '' })}
		// 	/>

		// 	<StackLayout direction={{ base: 'column', sm: 'row' }}>
		// 		<FormSelect<TUser_Profile_Set_Input>
		// 			id="status"
		// 			name="status"
		// 			label="Your current startup status"
		// 			placeholder="startup status"
		// 			options={STARTUP_STATUS}
		// 			register={register}
		// 			control={control}
		// 			onClear={() => resetField('status', { defaultValue: '' })}
		// 			rules={{
		// 				required: 'You must provide your current startup status'
		// 			}}
		// 			errors={errors}
		// 		/>

		// 		<FormSelect<TUser_Profile_Set_Input>
		// 			id="availability"
		// 			name="availability"
		// 			label="Capacity (hours per week)"
		// 			placeholder="capacity per week"
		// 			options={AVAILABILITY_IN_HOURS}
		// 			register={register}
		// 			control={control}
		// 			onClear={() =>
		// 				resetField('availability', { defaultValue: '' })
		// 			}
		// 		/>
		// 	</StackLayout>

		// 	<StackLayout direction={{ base: 'column', sm: 'row' }}>
		// 		<FormSelect<TUser_Profile_Set_Input>
		// 			id="specialistIndustry"
		// 			name="specialistIndustry"
		// 			label="Your specialist field"
		// 			placeholder="specialist field"
		// 			options={ALL_IDEA_CATEGORY_FIELDS}
		// 			register={register}
		// 			control={control}
		// 			onClear={() =>
		// 				resetField('specialistIndustry', { defaultValue: '' })
		// 			}
		// 		/>

		// 		<FormSelect<TUser_Profile_Set_Input>
		// 			id="startups"
		// 			name="startups"
		// 			label="Startups have you have worked with"
		// 			placeholder="number of startups"
		// 			options={NUMBER_OF_STARTUPS}
		// 			register={register}
		// 			control={control}
		// 			onClear={() => resetField('startups', { defaultValue: '' })}
		// 		/>
		// 	</StackLayout>

		// 	<FormControl>
		// 		<FlexLayout justifyContent="space-between">
		// 			<FormLabelText label="Your skills" />
		// 			{selectedSkills.length > 0 && (
		// 				<Button
		// 					fontSize="x-small"
		// 					colorScheme="fpPrimary"
		// 					variant="link"
		// 					mb={1}
		// 					onClick={onClearSkills}
		// 				>
		// 					Clear
		// 				</Button>
		// 			)}
		// 		</FlexLayout>
		// 		{EXPERIENCE_SKILLS.map((es: string) => (
		// 			<Controller
		// 				key={es}
		// 				name="skills"
		// 				render={({ field: { ref } }) => (
		// 					<Checkbox
		// 						name={es}
		// 						rounded="none"
		// 						focusBorderColor="gray.150"
		// 						value={es}
		// 						py={1}
		// 						pr={2}
		// 						onChange={onSkillsToggle}
		// 						colorScheme="fpPrimary"
		// 						color="fpGrey.900"
		// 						ref={ref}
		// 						size="md"
		// 						fontSize="xs"
		// 						isChecked={selectedSkills.includes(es)}
		// 					>
		// 						<Label
		// 							color="fpGrey.900"
		// 							fontWeight="normal"
		// 							fontSize="xs"
		// 						>
		// 							{es}
		// 						</Label>
		// 					</Checkbox>
		// 				)}
		// 				control={control}
		// 			/>
		// 		))}
		// 	</FormControl>
		// </Form>
	);
};

export default ExperienceForm;
