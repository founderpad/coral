import { SubmitButton } from '@components/buttons';
import Form from '@components/form/Form';
import BaseHeading from '@components/heading/BaseHeading';
import { SelectField } from '@components/input';
import ModalDrawerContext from '@context/ModalDrawerContext';
import {
	// ALL_COUNTRIES,
	ALL_IDEA_CATEGORY_FIELDS,
	AVAILABILITY_IN_HOURS,
	mobileAvailabilityOptions,
	// mobileCountriesList,
	mobileIdeaCategoryFields,
	mobileNumberOfStartups,
	mobileStartupStatuses,
	NUMBER_OF_STARTUPS,
	STARTUP_STATUS
} from '@utils/Constants';
import { useRouter } from 'next/router';
import React, { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';

interface ISearchFields {
	status?: string;
	availability?: string;
	field?: string;
	startups?: string;
	country?: string;
}

const FounderSearchForm = () => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const { handleSubmit, reset, control, getValues } =
		useForm<ISearchFields>();
	const router = useRouter();

	const onClick = (values: ISearchFields) => {
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

	const resetField = useCallback(
		(name: string) => {
			reset({
				...getValues(),
				[name]: ''
			});
		},
		[reset, getValues]
	);

	return (
		<Form
			id={'ideaSearchForm'}
			name={'ideaSearchForm'}
			onSubmit={handleSubmit(onClick)}
		>
			<BaseHeading fontSize={'sm'}>Search</BaseHeading>

			{/* <SelectField
				id="country"
				name="country"
				label="Country"
				placeholder={'country'}
				options={ALL_COUNTRIES}
				mobileOptions={mobileCountriesList()}
				onClear={() => resetField('country')}
				control={control}
				isUrl
			/> */}
			<SelectField
				id="status"
				name="status"
				label="Current startup status"
				placeholder="startup status"
				options={STARTUP_STATUS}
				mobileOptions={mobileStartupStatuses()}
				onClear={() => resetField('status')}
				control={control}
				isUrl
			/>

			<SelectField
				id="startups"
				name="startups"
				options={NUMBER_OF_STARTUPS}
				mobileOptions={mobileNumberOfStartups()}
				placeholder="number of startups"
				control={control}
				label={'Previous number of startups'}
				onClear={() => resetField('startups')}
				isUrl
			/>

			<SelectField
				id="availability"
				name="availability"
				options={AVAILABILITY_IN_HOURS}
				mobileOptions={mobileAvailabilityOptions()}
				placeholder="capacity per week"
				control={control}
				label={'Availability (hours per week)'}
				onClear={() => resetField('availability')}
				isUrl
			/>

			<SelectField
				id="field"
				name="field"
				label="Specialist field"
				placeholder="field"
				size={'md'}
				options={ALL_IDEA_CATEGORY_FIELDS}
				mobileOptions={mobileIdeaCategoryFields()}
				control={control}
				onClear={() => resetField('field')}
				isUrl
			/>
			{/* <FormControl>
				<FormLabelText label={'Skills'} />
				{EXPERIENCE_SKILLS.map((es: string) => (
					<Checkbox
						key={es}
						name={es}
						rounded={'none'}
						focusBorderColor={'gray.150'}
						value={es}
						p={2}
						// onChange={onSkillsToggle}
						colorScheme={'fpPrimary'}
						size={'sm'}
						fontSize={'xs'}
						// isChecked={selectedSkills.includes(es)}
					>
						<Label color={'fpGrey.900'} fontSize={'xs'}>
							{es}
						</Label>
					</Checkbox>
				))}
			</FormControl> */}

			{/* business status  */}
			{/* ideas with questionnaires */}

			<SubmitButton
				name={'search-ideas-button'}
				label={'Search'}
				flex={2}
				title={'Search ideas'}
			/>
		</Form>
	);
};

export default FounderSearchForm;
