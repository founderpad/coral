import { Button, Checkbox, FormControl } from '@chakra-ui/react';
import { SubmitButton } from '@components/buttons';
import Form from '@components/form/Form';
import BaseHeading from '@components/heading/BaseHeading';
import { InputField } from '@components/input/InputField';
import { SelectField } from '@components/input/SelectField';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { AppDivider } from '@components/shared';
import ModalDrawerContext from '@context/ModalDrawerContext';
import {
	ALL_COUNTRIES,
	ALL_IDEA_CATEGORY_FIELDS,
	ALL_IDEA_STATUSES,
	BY_IDEA_POPULARITY,
	mobileCountriesList,
	mobileIdeaCategoryFields,
	mobileIdeaPopularity,
	mobileIdeaStatuses
} from '@utils/Constants';
import Router from 'next/router';
import React, { useCallback, useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

type SelectSearch = {
	label: string;
	value: string;
};

type TIdeaSearch = {
	field?: SelectSearch;
	name?: string;
	new?: boolean;
	status?: SelectSearch;
	country?: string;
	popularity?: string;
};

// interface IQueryParams<T extends TIdeaSearch> {
// 	[key: string]: T;
// }

const IdeasSearchForm = () => {
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const { page, ...rest } = Router.query;
	const [isNewIdea, setIsNewIdea] = useState<boolean | undefined>(undefined);

	// const queryParams: IQueryParams<['field', 'name', 'new', 'status', 'country', 'popularity']>;
	// const queryParamsArr = [
	// 	'field',
	// 	'name',
	// 	'new',
	// 	'status',
	// 	'country',
	// 	'popularity'
	// ];

	const { handleSubmit, control, resetField, setValue } =
		useForm<TIdeaSearch>({
			defaultValues: {
				...rest
			}
		});

	const onClick = (values: TIdeaSearch) => {
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

		// for (const param in queryParamsArr) {
		// 	if (!queryParams[param]) delete queryParams[param];
		// }

		!queryParams.name && delete queryParams['name'];
		!queryParams.field && delete queryParams['field'];
		!queryParams.status && delete queryParams['status'];
		!queryParams.country && delete queryParams['country'];
		!queryParams.new && delete queryParams['new'];
		!queryParams.popularity && delete queryParams['popularity'];

		Router.push(
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

	const onSetNewIdea = useCallback(() => {
		setValue('new', !isNewIdea);
		setIsNewIdea(!isNewIdea);
	}, [isNewIdea, setValue]);

	const onClearNewIdeas = () => {
		delete Router.query['new'];
		setValue('new', undefined);
		setIsNewIdea(false);

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
	};

	// const onClearAll = () => {
	// 	reset({
	// 		...getValues(),
	// 		country: '',
	// 		field: undefined,
	// 		name: '',
	// 		new: undefined,
	// 		popularity: '',
	// 		status: undefined
	// 	});

	// 	Router.push(
	// 		{
	// 			pathname: Router.pathname,
	// 			query: { page: Router.query['page'] }
	// 		},
	// 		undefined,
	// 		{
	// 			shallow: true
	// 		}
	// 	);
	// };

	return (
		<Form
			id="idea-filter-form"
			name="idea-filter-form"
			onSubmit={handleSubmit(onClick)}
			stackProps={{ spacing: 6 }}
		>
			<BaseHeading fontSize={'sm'} display={{ base: 'none', sm: 'flex' }}>
				Filters
			</BaseHeading>
			<SelectField
				id="country"
				name="country"
				label="Country"
				placeholder="country"
				options={ALL_COUNTRIES}
				mobileOptions={mobileCountriesList()}
				onClear={() => resetField('country', { defaultValue: '' })}
				control={control}
				isUrl
			/>
			<InputField
				id="name"
				name="name"
				label="Idea name"
				placeholder="Search name"
				variant="filled"
				control={control}
				onClear={() => resetField('name', { defaultValue: '' })}
				isUrl
			/>
			<SelectField
				id="field"
				name="field"
				label="Field"
				placeholder="field"
				variant="filled"
				options={ALL_IDEA_CATEGORY_FIELDS}
				mobileOptions={mobileIdeaCategoryFields()}
				onClear={() => resetField('field', { defaultValue: '' })}
				control={control}
				isUrl
			/>
			<SelectField
				id="status"
				name="status"
				label="Status"
				placeholder="status"
				variant="filled"
				options={ALL_IDEA_STATUSES}
				mobileOptions={mobileIdeaStatuses()}
				onClear={() => resetField('status', { defaultValue: '' })}
				control={control}
				isUrl
			/>

			<SelectField
				id="popularity"
				name="popularity"
				label="Most popular"
				placeholder="most popular"
				variant="filled"
				options={BY_IDEA_POPULARITY}
				mobileOptions={mobileIdeaPopularity()}
				onClear={() => resetField('popularity', { defaultValue: '' })}
				control={control}
				isUrl
			/>

			<AppDivider />

			<FormControl>
				<FlexLayout justifyContent="space-between">
					<Controller
						name="new"
						render={({ field: { ref } }) => (
							<Checkbox
								id="new"
								name="new"
								rounded="none"
								focusBorderColor="fpGrey.150"
								value={1}
								py={1}
								onChange={onSetNewIdea}
								colorScheme="fpPrimary"
								ref={ref}
								size="lg"
								isChecked={isNewIdea}
								borderColor="gray.200"
								// sx={{
								// 	'[data-checked]': {
								// 		background: 'transparent',
								// 		borderColor: 'gray.200',
								// 		color: 'fpPrimary.300'
								// 	}
								// }}
							>
								<Label
									color="fpGrey.900"
									fontSize={{ base: 'small', sm: 'xs' }}
								>
									New ideas
								</Label>
							</Checkbox>
						)}
						control={control}
					/>
					<Button
						fontSize="x-small"
						colorScheme="fpPrimary"
						variant="link"
						mb={1}
						onClick={onClearNewIdeas}
					>
						Clear
					</Button>
				</FlexLayout>
			</FormControl>

			<SubmitButton
				display={{ base: 'none', sm: 'flex' }}
				name="filter-search-button"
				label="Show results"
				title="Filter ideas"
			/>
		</Form>
	);
};

export default IdeasSearchForm;
