import { BaseForm } from '@/components/form';
import {
	TProfileFieldsFragment,
	TUser_Profile_Set_Input
} from '@/generated/api';
import {
	ALL_IDEA_CATEGORY_FIELDS,
	ALL_USER_OBJECTIVES,
	AVAILABILITY_IN_HOURS,
	EXPERIENCE_SKILLS,
	NUMBER_OF_STARTUPS,
	STARTUP_STATUS
} from '@/utils/Constants';
import React from 'react';
import { FormSelect, FormTextarea } from '@/components/form/inputs/FormField';
import { StackLayout } from '@/components/layouts';
import schema from '@/validation/profile/experience/validationSchema';
import CheckboxGroup from '@/components/checkboxgroup/CheckboxGroup';
import useUpdateUserExperience from './hooks/useUpdateExperience';

const ExperienceForm = (profile: TProfileFieldsFragment) => {
	const { __typename, id, userId, ...rest } = profile;
	const defaultValues = {
		...rest
	};

	const { onUpdateExperience } = useUpdateUserExperience();

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
				<>
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

					<CheckboxGroup
						name="skills"
						label="Your skills"
						options={EXPERIENCE_SKILLS}
						defaultValues={profile?.skills}
						isRequired
					/>
				</>
			)}
		</BaseForm>
	);
};

export default ExperienceForm;
