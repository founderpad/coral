import { BaseForm, FormLabelText } from '@/components/form';
import { FormSelect } from '@/components/form/inputs/FormField';
import { Label } from '@/components/labels';
import { FlexLayout } from '@/components/layouts';
import {
	MatchmakeSettingsDocument,
	TMatchmakeSettingsFieldsFragment,
	TMatchmake_Preferences_Set_Input,
	useUpdateMatchmakeSettingsMutation
} from '@/generated/api';
import { useCheckboxes, useModalDrawer } from '@/hooks/util';
import { ALL_MATCHMAKE_TYPES, EXPERIENCE_SKILLS } from '@/utils/Constants';
import { Button, Checkbox, FormControl } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { SimpleGrid } from '@chakra-ui/react';
import { useCurrentUser } from '@/hooks/auth';
import { redirectTo } from '@/utils/validators';

const MatchmakeSettingsForm = (
	matchmakePreferences: TMatchmakeSettingsFieldsFragment
) => {
	const { closeModalDrawer } = useModalDrawer();
	const { id } = useCurrentUser();
	const [updateMatchmakeSettings] = useUpdateMatchmakeSettingsMutation();

	const {
		clearValues,
		onToggle,
		values,
		isChecked,
		onToggleAll,
		isAllSelected
	} = useCheckboxes(EXPERIENCE_SKILLS, matchmakePreferences.skills);
	const { __typename, ...rest } = matchmakePreferences;
	const defaultValues = { ...rest };

	const onUpdateMatchmakeSettings = (
		matchmakeSettings: TMatchmake_Preferences_Set_Input
	) => {
		updateMatchmakeSettings({
			variables: {
				id,
				matchmake_settings: {
					...matchmakeSettings,
					skills: values
				}
			},
			onCompleted: (_data) => {
				closeModalDrawer();
				redirectTo(false, 'mm');
			},
			refetchQueries: [
				{
					query: MatchmakeSettingsDocument,
					variables: {
						id
					}
				}
			],
			onError: (_data) => {
				closeModalDrawer();
				redirectTo(true, 'mm');
			}
		});
	};

	return (
		<BaseForm<TMatchmake_Preferences_Set_Input>
			name="edit-matchmake-settings-form"
			onSubmit={onUpdateMatchmakeSettings}
			defaultValues={defaultValues}
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

export default MatchmakeSettingsForm;
