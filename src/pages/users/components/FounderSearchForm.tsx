import { ButtonGroup, Checkbox, FormControl } from '@chakra-ui/react';
import { CancelButton, SubmitButton } from '@components/buttons';
import { FormLabelText } from '@components/form';
import Form from '@components/form/Form';
import { SelectField } from '@components/input/SelectField';
import { Label } from '@components/labels';
import AppDivider from '@components/shared/AppDivider';
import ModalDrawerContext from '@context/ModalDrawerContext';
import {
	AVAILABILITY_IN_HOURS,
	EXPERIENCE_SKILLS,
	industriesList,
	STARTUP_STATUS
} from '@utils/Constants';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

interface ISearchFields {
	status?: string;
	availability?: string;
	specialist_field?: string;
}

const FounderSearchForm = () => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const { handleSubmit, control, reset } = useForm<ISearchFields>();
	const router = useRouter();

	const onClick = (values: ISearchFields) => {
		setModalDrawer({
			isOpen: false
		});

		const queryParams = JSON.parse(JSON.stringify(values));
		!queryParams.status && delete queryParams['status'];
		!queryParams.availability && delete queryParams['availability'];
		!queryParams.specialist_field && delete queryParams['specialist_field'];

		router.push(
			{
				pathname: '/founders',
				query: { ...queryParams, page: 1 }
			},
			undefined,
			{
				shallow: true
			}
		);
	};

	const onClear = () => {
		setModalDrawer({
			isOpen: false
		});
		reset({
			status: '',
			availability: '',
			specialist_field: ''
		});

		router.push(
			{
				pathname: '/founders',
				query: { page: 1 }
			},
			undefined,
			{
				shallow: true
			}
		);
	};

	return (
		<Form
			id={'ideaSearchForm'}
			name={'ideaSearchForm'}
			onSubmit={handleSubmit(onClick)}
		>
			<Label
				display={{ base: 'none', md: 'block' }}
				fontSize={'md'}
				fontWeight={'semibold'}
				mb={4}
			>
				Search founders
			</Label>

			<SelectField
				id="status"
				name="status"
				options={STARTUP_STATUS.map((status) => (
					<option key={status.key} value={status.value}>
						{status.value}
					</option>
				))}
				placeholder="start-up status"
				control={control}
				label={'Current start-up status'}
				variant={'filled'}
			/>

			<SelectField
				id="availability"
				name="availability"
				options={AVAILABILITY_IN_HOURS.map((availability) => (
					<option key={availability.key} value={availability.key}>
						{availability.value}
					</option>
				))}
				placeholder="availability per week"
				control={control}
				label={'Availability in hours per week'}
				variant={'filled'}
			/>

			<SelectField
				id="specialist_industry"
				name="specialist_industry"
				label="Specialist field"
				placeholder="specialist field"
				options={industriesList()}
				control={control}
			/>
			<AppDivider />
			<FormControl>
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
						color={'fpGrey.400'}
						size={'sm'}
						fontSize={'xs'}
						// isChecked={selectedSkills.includes(es)}
					>
						<Label color={'gray.500'} fontSize={'smaller'}>
							{es}
						</Label>
					</Checkbox>
				))}
			</FormControl>

			{/* business status  */}
			{/* ideas with questionnaires */}
			<ButtonGroup pt={4} spacing={4}>
				<CancelButton label={'Clear'} flex={1} onClick={onClear} />
				<SubmitButton
					name={'search-ideas-button'}
					label={'Search'}
					flex={2}
					title={'Search ideas'}
				/>
			</ButtonGroup>
		</Form>
	);
};

export default FounderSearchForm;
