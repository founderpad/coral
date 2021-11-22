import { ButtonGroup } from '@chakra-ui/react';
import { CancelButton, SubmitButton } from 'components/buttons';
import Form from 'components/form/Form';
import { useBaseForm } from 'components/form/hooks';
import { InputField } from 'components/input/InputField';
import { SelectField } from 'components/input/SelectField';
import { Label } from 'components/labels';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { ideasStatusList, industriesList } from 'utils/Constants';

type IdeaSearch = {
	field?: string;
	name?: string;
	is_new?: boolean;
	status?: string;
};

const IdeasSearchForm = (): JSX.Element => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const { handleSubmit, control, reset } = useBaseForm<IdeaSearch>();
	const router = useRouter();

	const onClick = (values: IdeaSearch) => {
		setModalDrawer({
			isOpen: false
		});

		const queryParams = JSON.parse(JSON.stringify(values));
		!queryParams.name && delete queryParams['name'];
		!queryParams.field && delete queryParams['field'];
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
			field: '',
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
		<Form
			id={'ideaSearchForm'}
			name={'ideaSearchForm'}
			onSubmit={handleSubmit(onClick)}
			stackProps={{ spacing: 4 }}
		>
			<Label
				display={{ base: 'none', md: 'block' }}
				fontSize={'md'}
				fontWeight={'semibold'}
				mb={4}
			>
				Search ideas
			</Label>
			<InputField
				id="name"
				name="name"
				placeholder="Search name"
				control={control}
				label={'Name'}
				variant={'filled'}
			/>
			<SelectField
				id="field"
				name="field"
				options={industriesList()}
				placeholder="field"
				control={control}
				label={'Field'}
				variant={'filled'}
			/>
			<SelectField
				id="status"
				name="status"
				options={ideasStatusList()}
				placeholder="status"
				control={control}
				label={'Status'}
				variant={'filled'}
			/>
			<InputField
				id="location"
				name="location"
				placeholder="Search location"
				control={control}
				label={'Location'}
				variant={'filled'}
			/>

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

export default IdeasSearchForm;
