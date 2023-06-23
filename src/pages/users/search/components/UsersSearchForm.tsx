import { FormControl, Checkbox, Button } from '@chakra-ui/react';
import { SubmitButton } from '@/components/buttons';
import { BaseForm, FormLabelText } from '@/components/form';
import { FormSelect } from '@/components/form/inputs/FormField';
import BaseHeading from '@/components/heading/BaseHeading';
import { Label } from '@/components/labels';
import { FlexLayout } from '@/components/layouts';
import { AppDivider } from '@/components/shared';
import { useCheckboxToggle, useModalDrawer, useQueryParam } from '@/hooks/util';
import {
	ALL_IDEA_CATEGORY_FIELDS,
	ALL_USER_OBJECTIVES,
	AVAILABILITY_IN_HOURS,
	EXPERIENCE_SKILLS,
	NUMBER_OF_STARTUPS,
	STARTUP_STATUS
} from '@/utils/Constants';
import { buildParams, deleteParams } from '@/utils/routerUtils';
import React, { useCallback } from 'react';
import { Controller, UseFormReset, UseFormResetField } from 'react-hook-form';

type TSearchFields = {
	objective?: string;
	country?: string;
	status?: string;
	availability?: string;
	field?: string;
	startups?: string;
	skills?: Array<string>;
};

const UsersSearchForm = () => {
	const { closeModalDrawer } = useModalDrawer();
	const defaultSkills = useQueryParam<string[]>('skills');

	const { values, clearValues, toggleValue, toggleAll, isAll } =
		useCheckboxToggle(defaultSkills, EXPERIENCE_SKILLS);

	const defaultValues: TSearchFields = {
		objective: useQueryParam<string>('objective') || '',
		country: useQueryParam<string>('country') || '',
		status: useQueryParam<string>('status') || '',
		startups: useQueryParam<string>('startups') || '',
		availability: useQueryParam<string>('availability') || '',
		field: useQueryParam<string>('field') || '',
		skills: useQueryParam<string[]>('skills') || []
	};

	const onClick = (searchValues: TSearchFields) => {
		closeModalDrawer();
		buildParams<TSearchFields>({ ...searchValues, skills: values });
	};

	const onClearAll = useCallback(
		(reset: UseFormReset<TSearchFields>, values: TSearchFields) => {
			const defaultValues: Partial<TSearchFields> = {
				objective: '',
				country: '',
				status: '',
				startups: '',
				availability: '',
				field: '',
				skills: []
			};

			reset(defaultValues);
			clearValues();
			deleteParams<TSearchFields>(values);
		},
		[clearValues]
	);

	const onClear = useCallback(
		(
			resetField: UseFormResetField<TSearchFields>,
			value: keyof TSearchFields,
			defaultValue: string | string[] = ''
		) => {
			resetField(value, { defaultValue });
			clearValues();
			deleteParams([value]);
		},
		[clearValues]
	);

	return (
		<BaseForm<TSearchFields>
			name="idea-search-form"
			onSubmit={onClick}
			defaultValues={defaultValues}
		>
			{({ register, control, resetField, reset, getValues }) => (
				<>
					<FlexLayout justifyContent="space-between">
						<BaseHeading
							fontSize="sm"
							display={{ base: 'none', sm: 'flex' }}
						>
							Filters
						</BaseHeading>

						<Button
							fontSize="x-small"
							colorScheme="fpPrimary"
							variant="link"
							mb={1}
							textAlign="left"
							ml="auto"
							onClick={() => onClearAll(reset, getValues())}
						>
							Clear all
						</Button>
					</FlexLayout>

					<FormSelect<TSearchFields>
						id="objective"
						name="objective"
						label="Looking for"
						placeholder="objective"
						options={ALL_USER_OBJECTIVES}
						register={register}
						control={control}
						onClear={() => onClear(resetField, 'objective')}
					/>

					{/* <FormSelect<TSearchFields>
						id="country"
						name="country"
						label="Country"
						placeholder="country"
						options={ALL_COUNTRIES}
						register={register}
						control={control}
						onClear={() => onClear(resetField, 'country')}
					/> */}

					<AppDivider />

					<FormSelect<TSearchFields>
						id="status"
						name="status"
						label="Startup status"
						placeholder="status"
						options={STARTUP_STATUS}
						register={register}
						control={control}
						onClear={() => onClear(resetField, 'status')}
					/>
					<FormSelect<TSearchFields>
						id="startups"
						name="startups"
						label="Number of startups"
						placeholder="number of startups"
						options={NUMBER_OF_STARTUPS}
						register={register}
						control={control}
						onClear={() => onClear(resetField, 'startups')}
					/>
					<FormSelect<TSearchFields>
						id="availability"
						name="availability"
						label="Availability (hours per week)"
						placeholder="availability"
						options={AVAILABILITY_IN_HOURS}
						register={register}
						control={control}
						onClear={() => onClear(resetField, 'availability')}
					/>
					<FormSelect<TSearchFields>
						id="field"
						name="field"
						label="Specialist field"
						placeholder="field"
						options={ALL_IDEA_CATEGORY_FIELDS}
						register={register}
						control={control}
						onClear={() => onClear(resetField, 'field')}
					/>

					<AppDivider />

					<FormControl>
						<FlexLayout justifyContent="space-between">
							<FormLabelText label="Skills" />
							{values.length > 0 && (
								<Button
									fontSize="x-small"
									colorScheme="fpPrimary"
									variant="link"
									mb={1}
									onClick={() =>
										onClear(resetField, 'skills')
									}
								>
									Clear
								</Button>
							)}
						</FlexLayout>

						<FlexLayout flexDirection="column">
							<Checkbox
								name="all-skills"
								colorScheme="fpPrimary"
								py={3}
								mb={3}
								borderBottomWidth={1}
								onChange={toggleAll}
								isChecked={isAll}
							>
								<Label
									color="fpGrey.900"
									fontSize={{
										base: 'small',
										sm: 'xs'
									}}
								>
									All
								</Label>
							</Checkbox>

							{EXPERIENCE_SKILLS.map((es: string) => (
								<Controller
									key={es}
									name="skills"
									defaultValue={values}
									render={({ field: { ref } }) => (
										<Checkbox
											name={es}
											rounded="none"
											value={es}
											py={1}
											onChange={toggleValue}
											colorScheme="fpPrimary"
											color="fpGrey.900"
											ref={ref}
											isChecked={values.includes(es)}
										>
											<Label
												color="fpGrey.900"
												fontSize={{
													base: 'small',
													sm: 'xs'
												}}
											>
												{es}
											</Label>
										</Checkbox>
									)}
									control={control}
								/>
							))}
						</FlexLayout>
					</FormControl>

					<SubmitButton
						name="filter-users-button"
						label="Show results"
						flex={2}
						title="Filter users"
					/>
				</>
			)}
		</BaseForm>
	);
};

export default UsersSearchForm;
