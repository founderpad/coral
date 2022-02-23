import { Button, Checkbox, FormControl } from '@chakra-ui/react';
import { SubmitButton } from '@components/buttons';
import Form from '@components/form/Form';
import { FormInput, FormSelect } from '@components/form/inputs/FormField';
import BaseHeading from '@components/heading/BaseHeading';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { AppDivider } from '@components/shared';
import { useModalDrawer } from '@hooks/util';
import {
	ALL_COUNTRIES,
	ALL_IDEA_CATEGORY_FIELDS,
	ALL_IDEA_STATUSES,
	BY_IDEA_POPULARITY
} from '@utils/Constants';
import Router from 'next/router';
import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

type SelectSearch = {
	label: string;
	value: string;
};

type TSearchFields = {
	field?: SelectSearch;
	name?: string;
	new?: boolean;
	status?: SelectSearch;
	country?: string;
	popular?: string;
};

/** TODO: Build out reusable generic form component (e.g. BaseForm) **/
const IdeasSearchForm = () => {
	const { setModalDrawer } = useModalDrawer();
	const [isNewIdea, setIsNewIdea] = useState<boolean | undefined>(undefined);

	const {
		handleSubmit,
		control,
		register,
		resetField,
		reset,
		setValue,
		getValues
	} = useForm<TSearchFields>({
		mode: 'all',
		defaultValues: {
			field: undefined,
			name: '',
			new: false,
			status: undefined,
			country: '',
			popular: ''
		}
	});

	const [showClear, setShowClear] = useState(false);

	const onClick = (values: TSearchFields) => {
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
		!queryParams.country && delete queryParams['country'];
		!queryParams.new && delete queryParams['new'];
		!queryParams.popular && delete queryParams['popular'];

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
		setShowClear(true);
	}, [isNewIdea, setValue]);

	const onClearNewIdeas = () => {
		delete Router.query['new'];
		setValue('new', undefined);
		setIsNewIdea(false);
		setShowClear(false);

		Router.push(
			{
				query: { ...Router.query }
			},
			undefined,
			{
				shallow: true
			}
		);
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

	const onResetAll = useCallback(() => {
		reset();
		setIsNewIdea(false);

		Object.keys(getValues()).forEach(
			(param) => delete Router['query'][param]
		);

		Router.push(
			{
				query: { ...Router.query }
			},
			undefined,
			{
				shallow: true
			}
		);
	}, []);

	return (
		<Form
			id="idea-filter-form"
			name="idea-filter-form"
			onSubmit={handleSubmit(onClick)}
		>
			<FlexLayout justifyContent="space-between">
				<BaseHeading
					fontSize="sm"
					display={{ base: 'none', sm: 'flex' }}
				>
					Filters
				</BaseHeading>
				{/* {!Object.values(getValues()).includes('undefined') && ( */}
				<Button
					fontSize="x-small"
					colorScheme="fpPrimary"
					variant="link"
					mb={1}
					onClick={onResetAll}
					textAlign="left"
					ml="auto"
				>
					Clear all
				</Button>
				{/* )} */}
			</FlexLayout>
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

			<FormInput<TSearchFields>
				id="name"
				name="name"
				label="Idea name"
				register={register}
				control={control}
				fieldProps={{
					placeholder: 'Search by idea name'
				}}
				onClear={onResetField}
			/>

			<FormSelect<TSearchFields>
				id="field"
				name="field"
				label="Field"
				placeholder="field"
				options={ALL_IDEA_CATEGORY_FIELDS}
				register={register}
				control={control}
				onClear={onResetField}
			/>

			<FormSelect<TSearchFields>
				id="status"
				name="status"
				label="Status"
				placeholder="status"
				options={ALL_IDEA_STATUSES}
				register={register}
				control={control}
				onClear={onResetField}
			/>

			<FormSelect<TSearchFields>
				id="popular"
				name="popular"
				label="Most popular"
				placeholder="by most popular"
				options={BY_IDEA_POPULARITY}
				register={register}
				control={control}
				onClear={onResetField}
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
								py={1}
								onChange={onSetNewIdea}
								colorScheme="fpPrimary"
								ref={ref}
								size="lg"
								defaultChecked={!!Router.query['new']}
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
					{(showClear || !!Router.query['new']) && (
						<Button
							fontSize="x-small"
							colorScheme="fpPrimary"
							variant="link"
							mb={1}
							onClick={onClearNewIdeas}
						>
							Clear
						</Button>
					)}
				</FlexLayout>
			</FormControl>

			<SubmitButton
				// display={{ base: 'none', sm: 'flex' }}
				name="filter-search-button"
				label="Show results"
				title="Filter ideas"
			/>
		</Form>
	);
};

export default IdeasSearchForm;
