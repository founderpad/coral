import { BaseForm, FormLabelText } from '@/components/form';
import { FormSelect } from '@/components/form/inputs/FormField';
import { Label } from '@/components/labels';
import { FlexLayout } from '@/components/layouts';
import { TMatchmake_Preferences_Set_Input } from '@/generated/api';
import { ALL_MATCHMAKE_TYPES, EXPERIENCE_SKILLS } from '@/utils/Constants';
import { Button, Checkbox, FormControl } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

const MatchmakeSettingsForm = () => {
	// const { closeModalDrawer } = useModalDrawer();
	// const [updateMatchmakeSettings] = useUpdateMatchmakeSettingsMutation();
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

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

	// const onUpdateMatchmakeSettings = (
	// 	matchmakeSettings: TMatchmake_Preferences_Set_Input
	// ) => {};

	return (
		<BaseForm<TMatchmake_Preferences_Set_Input>
			name="edit-matchmake-settings-form"
			onSubmit={() => {}}
		>
			{({ register, control, resetField, formState: { errors } }) => (
				<React.Fragment>
					<FormSelect<TMatchmake_Preferences_Set_Input>
						id="type"
						name="type"
						label="I am"
						options={ALL_MATCHMAKE_TYPES}
						register={register}
						control={control}
						errors={errors}
						hideLimit={true}
						onClear={() => resetField('type', { defaultValue: '' })}
					/>
					<FormSelect<TMatchmake_Preferences_Set_Input>
						id="looking_for"
						name="looking_for"
						label="And I am looking for"
						options={ALL_MATCHMAKE_TYPES}
						register={register}
						control={control}
						errors={errors}
						hideLimit={true}
						onClear={() =>
							resetField('looking_for', { defaultValue: '' })
						}
					/>
					<FormControl>
						<FlexLayout justifyContent="space-between">
							<FormLabelText label="Skills I am looking for" />
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
	);
};

export default MatchmakeSettingsForm;
