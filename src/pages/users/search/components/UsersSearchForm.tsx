import { FormControl, Checkbox, Button } from '@chakra-ui/react';
import { SubmitButton } from '@components/buttons';
import { BaseForm, FormLabelText } from '@components/form';
import { FormSelect } from '@components/form/inputs/FormField';
import BaseHeading from '@components/heading/BaseHeading';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { AppDivider } from '@components/shared';
import { useCheckboxToggle, useModalDrawer, useQueryParam } from '@hooks/util';
import {
	ALL_COUNTRIES,
	ALL_IDEA_CATEGORY_FIELDS,
	ALL_USER_OBJECTIVES,
	AVAILABILITY_IN_HOURS,
	EXPERIENCE_SKILLS,
	NUMBER_OF_STARTUPS,
	STARTUP_STATUS
} from '@utils/Constants';
import { buildParams, deleteParam, deleteParams } from '@utils/routerUtils';
import { resetSearchField } from '@utils/validators';
import React from 'react';
import { Controller } from 'react-hook-form';

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
	const { setModalDrawer } = useModalDrawer();
	const defaultSkills = useQueryParam<string[]>('skills');

	const { values, clearValues, toggleValue, toggleAll, isAll } =
		useCheckboxToggle(defaultSkills, EXPERIENCE_SKILLS);

	const defaultValues = {
		objective: useQueryParam<string>('objective') || '',
		country: useQueryParam<string>('country') || '',
		status: useQueryParam<string>('status') || '',
		startups: useQueryParam<string>('startups') || '',
		availability: useQueryParam<string>('availability') || '',
		field: useQueryParam<string>('field') || '',
		skills: useQueryParam<string[]>('skills') || []
	};

	const onClick = (searchValues: TSearchFields) => {
		setModalDrawer({
			isOpen: false
		});
		buildParams<TSearchFields>({ ...searchValues, skills: values });
	};

	return (
		<BaseForm<TSearchFields>
			name="idea-search-form"
			onSubmit={onClick}
			defaultValues={defaultValues}
		>
			{({ register, control, resetField, reset, getValues }) => (
				<React.Fragment>
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
							onClick={() => {
								reset({
									objective: '',
									country: '',
									status: '',
									startups: '',
									availability: '',
									field: '',
									skills: []
								});
								clearValues();
								deleteParam<TSearchFields>('skills', false);
								deleteParams<TSearchFields>(getValues());
							}}
							textAlign="left"
							ml="auto"
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
						onClear={() => {
							resetField('objective');
							resetSearchField<TSearchFields>('objective');
						}}
					/>

					<FormSelect<TSearchFields>
						id="country"
						name="country"
						label="Country"
						placeholder="country"
						options={ALL_COUNTRIES}
						register={register}
						control={control}
						onClear={() => {
							resetField('country');
							resetSearchField<TSearchFields>('country');
						}}
					/>

					<AppDivider />

					<FormSelect<TSearchFields>
						id="status"
						name="status"
						label="Startup status"
						placeholder="status"
						options={STARTUP_STATUS}
						register={register}
						control={control}
						onClear={() => {
							resetField('status');
							resetSearchField<TSearchFields>('status');
						}}
					/>
					<FormSelect<TSearchFields>
						id="startups"
						name="startups"
						label="Number of startups"
						placeholder="number of startups"
						options={NUMBER_OF_STARTUPS}
						register={register}
						control={control}
						onClear={() => {
							resetField('startups');
							resetSearchField<TSearchFields>('startups');
						}}
					/>
					<FormSelect<TSearchFields>
						id="availability"
						name="availability"
						label="Availability (hours per week)"
						placeholder="availability"
						options={AVAILABILITY_IN_HOURS}
						register={register}
						control={control}
						onClear={() => {
							resetField('availability');
							resetSearchField<TSearchFields>('availability');
						}}
					/>
					<FormSelect<TSearchFields>
						id="field"
						name="field"
						label="Specialist field"
						placeholder="field"
						options={ALL_IDEA_CATEGORY_FIELDS}
						register={register}
						control={control}
						onClear={() => {
							resetField('field');
							resetSearchField<TSearchFields>('field');
						}}
					/>

					<AppDivider />

					<FormControl>
						<FlexLayout justifyContent="space-between">
							<FormLabelText label="Skills" />
							<Button
								fontSize="x-small"
								colorScheme="fpPrimary"
								variant="link"
								mb={1}
								onClick={() => {
									resetField('skills');
									clearValues();
									resetSearchField<TSearchFields>('skills');
								}}
							>
								Clear
							</Button>
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
				</React.Fragment>
			)}
		</BaseForm>
	);
};

export default UsersSearchForm;
