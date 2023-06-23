import { BaseForm, FormLabelText } from '@/components/form';
import { FormSelect } from '@/components/form/inputs/FormField';
import { FlexLayout } from '@/components/layouts';
import { useCheckboxes, useModalDrawer, useNotification } from '@/hooks/util';
import { ALL_MATCHMAKE_TYPES, EXPERIENCE_SKILLS } from '@/utils/Constants';
import { Button, Checkbox, FormControl, Text } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { SimpleGrid } from '@chakra-ui/react';
import {
	MatchSettingsDocument,
	TMatchSettingsFieldsFragment,
	TMatch_Settings_Set_Input,
	useUpdateMatchSettingsMutation
} from '@/generated/api';
import { useUserData } from '@nhost/react';
import schema from '@/validation/match/validationSchema';

const MatchmakeSettingsForm = (
	matchmakeSettings: TMatchSettingsFieldsFragment
) => {
	const { closeModalDrawer } = useModalDrawer();
	const user = useUserData();
	const [updateMatchmakeSettings] = useUpdateMatchSettingsMutation();
	const { addNotification } = useNotification();

	const {
		clearValues,
		onToggle,
		values,
		isChecked,
		onToggleAll,
		isAllSelected
	} = useCheckboxes(EXPERIENCE_SKILLS, matchmakeSettings.skills);
	const { __typename, ...rest } = matchmakeSettings;
	const defaultValues = { ...rest };

	const onUpdateMatchmakeSettings = (
		matchSettings: TMatch_Settings_Set_Input
	) => {
		updateMatchmakeSettings({
			variables: {
				id: user?.id,
				match_settings: {
					...matchSettings,
					// skills: formatArrayForDb(values)
					skills: values
				}
			},
			onCompleted: (_data) => {
				closeModalDrawer();
				addNotification({
					message:
						'Your match preferences have been updated successfully.',
					status: 'success'
				});
			},
			refetchQueries: [
				{
					query: MatchSettingsDocument,
					variables: {
						id: user?.id
					}
				}
			],
			onError: (_data) => {
				closeModalDrawer();
				addNotification({
					message:
						'Failed to update match preferences. Please try again later.',
					status: 'error'
				});
			}
		});
	};

	return (
		<BaseForm<TMatch_Settings_Set_Input, typeof schema>
			name="edit-match-settings-form"
			onSubmit={onUpdateMatchmakeSettings}
			defaultValues={defaultValues}
			schema={schema}
		>
			{({ register, control, resetField, formState: { errors } }) => (
				<>
					<FormSelect<TMatch_Settings_Set_Input>
						id="type"
						name="type"
						label="I consider myself"
						options={ALL_MATCHMAKE_TYPES}
						register={register}
						control={control}
						errors={errors}
						hideLimit={true}
						onClear={() => resetField('type', { defaultValue: '' })}
						isRequired
					/>
					<FormSelect<TMatch_Settings_Set_Input>
						id="lookingFor"
						name="lookingFor"
						label="And I am looking for"
						options={ALL_MATCHMAKE_TYPES}
						register={register}
						control={control}
						errors={errors}
						hideLimit={true}
						onClear={() =>
							resetField('lookingFor', { defaultValue: '' })
						}
						isRequired
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
							<Text
								color="fpGrey.900"
								fontWeight="normal"
								fontSize="xs"
							>
								All
							</Text>
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
											<Text
												color="fpGrey.900"
												fontWeight="normal"
												fontSize="xs"
											>
												{es}
											</Text>
										</Checkbox>
									)}
									control={control}
								/>
							))}
						</SimpleGrid>
					</FormControl>
				</>
			)}
		</BaseForm>
	);
};

export default MatchmakeSettingsForm;
