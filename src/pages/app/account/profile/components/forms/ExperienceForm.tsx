import { Checkbox } from '@chakra-ui/checkbox';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Stack } from '@chakra-ui/layout';
import Form from 'components/form/Form';
import { NumberField, SelectField, TextareaField } from 'components/input';
import ModalDrawerContext from 'context/ModalDrawerContext';
import {
	TUser_Profile,
	TUser_Profile_Set_Input,
	useUpdateUserProfileMutation
} from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import { useSuccessNotification } from 'hooks/toast';
import { ReactElement, useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setProfileComplete } from 'slices/auth';
import {
	EXPERIENCE_SKILLS,
	industriesList,
	STARTUP_STATUS
} from 'utils/Constants';

const ExperienceForm = (userProfile: TUser_Profile): ReactElement<any> => {
	const dispatch = useDispatch();
	const isProfileComplete = useCurrentUser().user_profile.is_complete;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { __typename, user_id, ...rest } = userProfile;
	const [selectedSkills, setSelectedSkills] = useState<string[]>(
		userProfile.skills ?? []
	);

	const { setModalDrawer } = useContext(ModalDrawerContext);
	const showSuccessNotification = useSuccessNotification();
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
			user_profile: { ...getValues(), is_complete: true }
		},
		onCompleted: (_data) => {
			setModalDrawer({
				isOpen: false
			});
			showSuccessNotification({
				title: 'Your experience has been updated'
			});

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
		>
			<TextareaField
				id="background"
				label="Background"
				placeholder="Your background"
				error={errors['background']}
				errorText="You must provide a background (max. 400 characters)"
				name="background"
				control={control}
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
				id="specialist_industry"
				name="specialist_industry"
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
				<NumberField
					id="availability"
					name="availability"
					label="Availablility for new projects? (hours per week)"
					error={errors['availability']}
					errorText="You must specify your availability"
					control={control}
					min={0}
					max={60}
					isRequired
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
				id="business_description"
				name="business_description"
				label="What were your previous businesses?"
				placeholder=""
				control={control}
			/>

			<FormControl>
				<FormLabel as={'label'} fontSize={'sm'} color={'gray.600'}>
					Your skills
				</FormLabel>
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
									color={'fpGrey.700'}
									ref={ref}
									size={'md'}
									isChecked={selectedSkills.includes(es)}
								>
									{es}
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
