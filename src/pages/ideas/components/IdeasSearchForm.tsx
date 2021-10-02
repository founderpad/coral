import { ButtonGroup, Heading } from '@chakra-ui/react';
import { CancelButton } from 'components/buttons';
import SubmitButton from 'components/buttons/SubmitButton';
import Form from 'components/form/Form';
import { InputField } from 'components/input/InputFields';
import { SelectField } from 'components/input/SelectFields';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ideasStatusList, industriesList } from 'utils/Constants';

type IdeaSearch = {
	industry?: string;
	name?: string;
	is_new?: boolean;
	status?: string;
};

const IdeasSearchForm = (): JSX.Element => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const { handleSubmit, control, reset } = useForm<IdeaSearch>();
	const router = useRouter();

	const onClick = (values: IdeaSearch) => {
		setModalDrawer({
			isOpen: false
		});

		const queryParams = JSON.parse(JSON.stringify(values));
		!queryParams.name && delete queryParams['name'];
		!queryParams.industry && delete queryParams['industry'];
		!queryParams.status && delete queryParams['status'];

		router.push(
			{
				pathname: '/ideas',
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
			name: '',
			industry: '',
			status: ''
		});

		router.push(
			{
				pathname: '/ideas',
				query: { page: 1 }
			},
			undefined,
			{
				shallow: true
			}
		);
	};

	return (
		<Form id={'ideaSearchForm'} name={'ideaSearchForm'} onSubmit={handleSubmit(onClick)}>
			<Heading
				as={'h6'}
				fontSize={'md'}
				color={'fpGrey.900'}
				display={{ base: 'none', md: 'block' }}
				mb={4}
			>
				Search ideas
				</Heading>
			<InputField
				id="name"
				name="name"
				placeholder="Search name"
				control={control}
				label={'Name'}
				size={'sm'}
			/>
			<SelectField
				id="industry"
				name="industry"
				options={industriesList()}
				placeholder="industry"
				control={control}
				label={'Industry'}
				size={'sm'}
			/>
			<SelectField
				id="status"
				name="status"
				options={ideasStatusList()}
				placeholder="status"
				control={control}
				label={'Status'}
				size={'sm'}
			/>
			<InputField
				id="location"
				name="location"
				placeholder="Search location"
				control={control}
				label={'Location'}
				size={'sm'}
			/>

			{/* business status  */}
			{/* ideas with questionnaires */}
			<ButtonGroup pt={4} spacing={4}>
				<CancelButton label={'Clear'} flex={1} onClick={onClear} />
				<SubmitButton
					label={'Search'}
					flex={2}
					mt={0}
					title={'Search ideas'}
				/>
			</ButtonGroup>
		</Form>
	);
};

export default IdeasSearchForm;
