import { ButtonGroup } from '@chakra-ui/react';
import { SubmitButton } from '@components/buttons';
import Form from '@components/form/Form';
import { InputField } from '@components/input/InputField';
import { SelectField } from '@components/input/SelectField';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { ALL_INDUSTRIES, IDEA_STATUS } from '@utils/Constants';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

type SelectSearch = {
	label: string;
	value: string;
};

type IdeaSearch = {
	field?: SelectSearch;
	name?: string;
	is_new?: boolean;
	status?: SelectSearch;
};

const IdeasSearchForm = () => {
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const router = useRouter();
	const { page, ...rest } = router.query;

	const { handleSubmit, control, reset } = useForm<IdeaSearch>({
		defaultValues: {
			...rest
		}
	});

	const onClick = (values: IdeaSearch) => {
		setModalDrawer({
			isOpen: false
		});

		const formatSelectedValues: Record<string, string> = {};
		for (const [k, v] of Object.entries(values)) {
			if (v && typeof v === 'object') {
				formatSelectedValues[k] = v['value'];
			}
			if (typeof v === 'string') {
				formatSelectedValues[k] = v;
			}
		}

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

	// const onClear = () => {
	// 	setModalDrawer({
	// 		isOpen: false
	// 	});
	// 	reset({
	// 		name: '',
	// 		field: undefined,
	// 		status: undefined
	// 	});

	// 	router.push(
	// 		{
	// 			pathname: '/ideas',
	// 			query: { page: 1 }
	// 		},
	// 		undefined,
	// 		{
	// 			shallow: true
	// 		}
	// 	);
	// };

	return (
		<Form
			id={'ideaSearchForm'}
			name={'ideaSearchForm'}
			onSubmit={handleSubmit(onClick)}
			stackProps={{ spacing: 6 }}
		>
			<InputField
				id="name"
				name="name"
				placeholder="Search name"
				control={control}
				label={'Name'}
				variant={'filled'}
				onClear={() => {
					reset({
						name: ''
					});
				}}
				isUrl
			/>
			<SelectField
				id="field"
				name="field"
				options={ALL_INDUSTRIES}
				placeholder="field"
				control={control}
				label={'Field'}
				variant={'filled'}
				isUrl
			/>
			<SelectField
				id="status"
				name="status"
				options={IDEA_STATUS}
				placeholder="status"
				control={control}
				label={'Status'}
				variant={'filled'}
				isUrl
			/>

			<ButtonGroup spacing={4}>
				{/* <CancelButton label={'Clear'} flex={1} onClick={onClear} /> */}
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
