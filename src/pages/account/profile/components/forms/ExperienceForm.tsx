import { FormControl } from '@chakra-ui/form-control';
import { Stack } from '@chakra-ui/layout';
import { Checkbox } from '@chakra-ui/react';
import { FormLabelText } from 'components/form';
import Form from 'components/form/Form';
import { NumberField, SelectField, TextareaField } from 'components/input';
import { Label } from 'components/labels';
import ModalDrawerContext from 'context/ModalDrawerContext';
import {
	TUser_Profile,
	TUser_Profile_Set_Input,
	useUpdateUserProfileMutation
} from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import { useNotification } from 'hooks/util';
import { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setProfileComplete } from 'slices/auth';
import {
	AVAILABILITY_IN_HOURS,
	EXPERIENCE_SKILLS,
	industriesList,
	STARTUP_STATUS
} from 'utils/Constants';

const ExperienceForm = (userProfile: TUser_Profile) => {
	const dispatch = useDispatch();
	const isProfileComplete = useCurrentUser().profile.isComplete;
	const { addNotification } = useNotification();

	/* eslint-disable @typescript-eslint/no-unused-vars */
	const { __typename, userId, id, ...rest } = userProfile;
	const [selectedSkills, setSelectedSkills] = useState<string[]>(
		userProfile.skills ?? []
	);

	const { setModalDrawer } = useContext(ModalDrawerContext);
	const { handleSubmit, control, getValues, setValue, formState } =
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
			setModalDrawer({
				isOpen: false
			});
			addNotification('Experience updated successfully', 'success');

			if (!isProfileComplete) dispatch(setProfileComplete());
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
			id={'editExperienceForm'}
			name={'editExperienceForm'}
			onSubmit={handleSubmit(updateUserProfileMutation)}
			isSubmitting={isSubmitting}
			isValid={isValid}
			stackProps={{ spacing: 10 }}
		>
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
			/>

			<SelectField
				id="specialistIndustry"
				name="specialistIindustry"
				label="What is your specialist field?"
				placeholder="specialist field"
				options={industriesList()}
				control={control}
			/>

			<Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
				<NumberField
					id="startups"
					name="startups"
					label="How many startups have you worked with?"
					error={errors['startups']}
					errorText="You must specify how many startups you have worked with"
					control={control}
					min={0}
					max={30}
					isRequired
				/>
				{/* <NumberField
					id="availability"
					name="availability"
					label="Availablility for new projects? (hours per week)"
					error={errors['availability']}
					errorText="You must specify your availability"
					control={control}
					min={0}
					max={60}
					isRequired
				/> */}

				<SelectField
					id="availability"
					name="availability"
					options={AVAILABILITY_IN_HOURS.map((availability) => (
						<option key={availability.key} value={availability.key}>
							{availability.value}
						</option>
					))}
					placeholder="capacity per week"
					control={control}
					label={'Capacity (hours per week)'}
					helperText={
						'How many hours you can contribute towards a new idea'
					}
				/>
			</Stack>

			<SelectField
				id="status"
				name="status"
				label="What is your current startup status?"
				error={errors['status']}
				errorText="You must specify your current startup status"
				placeholder="startup status"
				options={STARTUP_STATUS.map((status) => (
					<option key={status.key} value={status.value}>
						{status.value}
					</option>
				))}
				control={control}
				isRequired
			/>

			<TextareaField
				id="businessDescription"
				name="businessDescription"
				label="What were your previous businesses?"
				placeholder=""
				control={control}
			/>

			<FormControl>
				<FormLabelText label={'Your skills'} />
				{EXPERIENCE_SKILLS.map(
					(es: string): JSX.Element => (
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
									color={'fpGrey.400'}
									ref={ref}
									size={'sm'}
									fontSize={'xs'}
									isChecked={selectedSkills.includes(es)}
								>
									<Label
										color={'gray.500'}
										fontSize={'smaller'}
									>
										{es}
									</Label>
								</Checkbox>
							)}
							control={control}
						/>
					)
				)}
			</FormControl>
		</Form>
	);
};

export default ExperienceForm;
