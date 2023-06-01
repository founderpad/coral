import { FormControl } from '@chakra-ui/form-control';
import { Button, Checkbox } from '@chakra-ui/react';
import { FormLabelText } from '@/components/form';
import { BaseForm } from '@/components/form';
import { Label } from '@/components/labels';
import {
	TUser_Profile,
	TUser_Profile_Set_Input,
	useUpdateUserProfileMutation
} from '@/generated/api';
import { useCurrentUser } from '@/hooks/auth';
import { setProfileComplete } from '@/slices/auth';
import {
	ALL_IDEA_CATEGORY_FIELDS,
	ALL_USER_OBJECTIVES,
	AVAILABILITY_IN_HOURS,
	EXPERIENCE_SKILLS,
	NUMBER_OF_STARTUPS,
	STARTUP_STATUS
} from '@/utils/Constants';
import { Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import React, { useContext } from 'react';
import { FormSelect, FormTextarea } from '@/components/form/inputs/FormField';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { useCheckboxes, useModalDrawer } from '@/hooks/util';
import { SimpleGrid } from '@chakra-ui/react';
import schema from '@/validation/profile/experience/validationSchema';
import NotificationContext from '@/context/NotificationContext';

const ExperienceForm = (userProfile: TUser_Profile) => {
	const dispatch = useDispatch();
	const isProfileComplete = useCurrentUser()?.profile?.isComplete;
	const { __typename, userId, id, ...rest } = userProfile;
	const {
		values,
		clearValues,
		onToggle,
		onToggleAll,
		isChecked,
		isAllSelected
	} = useCheckboxes(EXPERIENCE_SKILLS, userProfile.skills);

	const defaultValues = { ...rest };

	const { closeModalDrawer } = useModalDrawer();
	const [updateUserProfileMutation] = useUpdateUserProfileMutation();
	const { addNotification } = useContext(NotificationContext);

	const onUpdateExperience = (experienceValues: TUser_Profile_Set_Input) => {
		updateUserProfileMutation({
			variables: {
				id,
				user_profile: {
					...experienceValues,
					skills: values,
					isComplete: true
				}
			},
			onCompleted: (_data) => {
				closeModalDrawer();
				addNotification({
					message: 'Your details have been updated successfully',
					status: 'success'
				});
				if (!isProfileComplete) dispatch(setProfileComplete());
			},
			onError: (_data) => {
				closeModalDrawer();
				addNotification({
					message: 'Failed to update details. Please try again later',
					status: 'error'
				});
			}
		});
	};

	return (
		<BaseForm<TUser_Profile_Set_Input, typeof schema>
			name="edit-experience-form"
			onSubmit={onUpdateExperience}
			defaultValues={defaultValues}
			schema={schema}
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
						errors={errors}
						onClear={() =>
							resetField('objective', { defaultValue: '' })
						}
						isRequired
					/>

					<FormTextarea<TUser_Profile_Set_Input>
						id="background"
						name="background"
						label="Background"
						placeholder="Write about your background, such as past experiences in business (max. 400 characters)"
						register={register}
						control={control}
						errors={errors}
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
						errors={errors}
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
							errors={errors}
							onClear={() =>
								resetField('status', { defaultValue: '' })
							}
							isRequired
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
							{values.length > 0 && (
								<Button
									fontSize="x-small"
									colorScheme="fpPrimary"
									variant="link"
									mb={1}
									onClick={clearValues}
								>
									Clear
								</Button>
							)}
						</FlexLayout>
						<Checkbox
							onChange={onToggleAll}
							isChecked={isAllSelected}
							w="full"
							pb={2}
							colorScheme="fpPrimary"
							color="fpGrey.900"
						>
							<Label
								color="fpGrey.900"
								fontWeight="normal"
								fontSize="xs"
							>
								All
							</Label>
						</Checkbox>
						<SimpleGrid columns={2} row={6}>
							{EXPERIENCE_SKILLS.map((es) => (
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
											onChange={onToggle}
											colorScheme="fpPrimary"
											color="fpGrey.900"
											ref={ref}
											size="md"
											fontSize="xs"
											isChecked={isChecked(es)}
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
						</SimpleGrid>
					</FormControl>
				</React.Fragment>
			)}
		</BaseForm>
	);
};

export default ExperienceForm;
