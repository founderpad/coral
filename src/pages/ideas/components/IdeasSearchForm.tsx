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
import {
	buildParams,
	deleteParam,
	deleteParams,
	navigateTo
} from '@utils/routerUtils';
import Router from 'next/router';
import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useQueryParam } from '@hooks/util';

type TSearchFields = {
	field?: string;
	name?: string;
	new?: boolean;
	status?: string;
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
			field: useQueryParam<string>('field') || '',
			name: useQueryParam<string>('name') || '',
			new: !!useQueryParam<string>('new') || undefined,
			status: useQueryParam<string>('status') || '',
			country: useQueryParam<string>('country') || '',
			popular: useQueryParam<string>('popular') || ''
		}
	});

	const [showClear, setShowClear] = useState(false);

	const onClick = (values: TSearchFields) => {
		setModalDrawer({
			isOpen: false
		});

		buildParams<TSearchFields>(values);
	};

	const onSetNewIdea = useCallback(() => {
		setValue('new', !isNewIdea);
		setIsNewIdea(!isNewIdea);
		setShowClear(true);
	}, [isNewIdea, setValue]);

	const onClearNewIdeas = () => {
		setValue('new', undefined);
		setIsNewIdea(false);
		setShowClear(false);
		deleteParam<TSearchFields>('new');
		navigateTo();
	};

	const onResetField = (name: keyof TSearchFields) => {
		resetField(name, { defaultValue: '' });
		deleteParam<TSearchFields>(name);
		navigateTo();
	};

	const onResetAll = useCallback(() => {
		reset({
			field: '',
			name: '',
			country: '',
			status: '',
			popular: '',
			new: false
		});

		setIsNewIdea(false);
		deleteParams<TSearchFields>(getValues());
	}, [getValues, reset]);

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
				name="filter-search-button"
				label="Show results"
				title="Filter ideas"
			/>
		</Form>
	);
};

export default IdeasSearchForm;
