import { FormControl, Checkbox, Button } from '@chakra-ui/react';
import { SubmitButton } from '@components/buttons';
import { FormLabelText } from '@components/form';
import Form from '@components/form/Form';
import { FormSelect } from '@components/form/inputs/FormField';
import BaseHeading from '@components/heading/BaseHeading';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { AppDivider } from '@components/shared';
import ModalDrawerContext from '@context/ModalDrawerContext';
import {
	ALL_COUNTRIES,
	ALL_IDEA_CATEGORY_FIELDS,
	ALL_USER_OBJECTIVES,
	AVAILABILITY_IN_HOURS,
	EXPERIENCE_SKILLS,
	NUMBER_OF_STARTUPS,
	STARTUP_STATUS
} from '@utils/Constants';
import Router, { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

type TSearchFields = {
	status?: string;
	availability?: string;
	field?: string;
	startups?: string;
	country?: string;
	skills?: Array<string>;
	objective?: string;
};

const UsersSearchForm = () => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
	const { handleSubmit, control, register, resetField, setValue } =
		useForm<TSearchFields>();
	const router = useRouter();

	const onClick = (values: TSearchFields) => {
		setModalDrawer({
			isOpen: false
		});

		const queryParams = JSON.parse(JSON.stringify(values));

		for (const [k, _v] of Object.entries(values)) {
			if (!queryParams[k]) delete queryParams[k];
		}

		router.push(
			{
				pathname: '/users',
				query: { ...queryParams, page: 1 }
			},
			undefined,
			{
				shallow: true
			}
		);
	};

	const onSkillsToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const skill = e.target.name;
		const skillsCopy = [...selectedSkills];

		const index = skillsCopy.findIndex((s) => s === skill);
		index > -1 ? skillsCopy.splice(index, 1) : skillsCopy.push(skill);

		setSelectedSkills(skillsCopy);
		setValue('skills', skillsCopy);
	};

	const onResetField = (name: keyof TSearchFields) => {
		resetField(name);
		if (Router['query'][name]) {
			delete Router['query'][name];
			Router.push(
				{
					query: { ...Router.query }
				},
				undefined,
				{
					shallow: true
				}
			);
		}
	};

	return (
		<Form
			id="users-filter-form"
			name="users-filter-form"
			onSubmit={handleSubmit(onClick)}
		>
			<BaseHeading fontSize="sm" display={{ base: 'none', sm: 'flex' }}>
				Filters
			</BaseHeading>

			<FormSelect<TSearchFields>
				id="objective"
				name="objective"
				label="Looking for"
				placeholder="objective"
				options={ALL_USER_OBJECTIVES}
				register={register}
				control={control}
				onClear={onResetField}
			/>

			<FormSelect<TSearchFields>
				id="country"
				name="country"
				label="Country"
				placeholder="country"
				options={ALL_COUNTRIES}
				register={register}
				control={control}
				onClear={onResetField}
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
				onClear={onResetField}
			/>
			<FormSelect<TSearchFields>
				id="startups"
				name="startups"
				label="Startup status"
				placeholder="number of startups"
				options={NUMBER_OF_STARTUPS}
				register={register}
				control={control}
				onClear={onResetField}
			/>
			<FormSelect<TSearchFields>
				id="availability"
				name="availability"
				label="Availability (hours per week)"
				placeholder="availability"
				options={AVAILABILITY_IN_HOURS}
				register={register}
				control={control}
				onClear={onResetField}
			/>
			<FormSelect<TSearchFields>
				id="field"
				name="field"
				label="Specialist field"
				placeholder="field"
				options={ALL_IDEA_CATEGORY_FIELDS}
				register={register}
				control={control}
				onClear={onResetField}
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
							delete Router.query['skills'];
							resetField('skills');
							setSelectedSkills([]);
							Router.push(
								{
									pathname: Router.pathname,
									query: Router.query
								},
								undefined,
								{
									shallow: true
								}
							);
						}}
					>
						Clear
					</Button>
				</FlexLayout>

				<FlexLayout flexDirection="column">
					{EXPERIENCE_SKILLS.map((es: string) => (
						<Controller
							key={es}
							name="skills"
							render={({ field: { ref } }) => (
								<Checkbox
									name={es}
									rounded="none"
									focusBorderColor="gray.150"
									value={es}
									py={1}
									onChange={onSkillsToggle}
									colorScheme="fpPrimary"
									color="fpGrey.900"
									ref={ref}
									isChecked={selectedSkills.includes(es)}
								>
									<Label
										color="fpGrey.900"
										fontSize={{ base: 'small', sm: 'xs' }}
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
		</Form>
	);
};

export default UsersSearchForm;
