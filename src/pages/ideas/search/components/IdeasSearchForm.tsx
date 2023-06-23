import { Button, Checkbox, FormControl } from '@chakra-ui/react';
import { SubmitButton } from '@/components/buttons';
import { FormInput, FormSelect } from '@/components/form/inputs/FormField';
import BaseHeading from '@/components/heading/BaseHeading';
import { Label } from '@/components/labels';
import { FlexLayout } from '@/components/layouts';
import { AppDivider } from '@/components/shared';
import { useModalDrawer } from '@/hooks/util';
import {
	ALL_IDEA_CATEGORY_FIELDS,
	ALL_IDEA_STATUSES,
	BY_IDEA_POPULARITY
} from '@/utils/Constants';
import { buildParams, deleteParams, navigateTo } from '@/utils/routerUtils';
import React, { useCallback, useState } from 'react';
import { Controller, UseFormReset, UseFormResetField } from 'react-hook-form';
import { useQueryParam } from '@/hooks/util';
import Router from 'next/router';
import { BaseForm } from '@/components/form';

type TSearchFields = {
	field?: string;
	name?: string;
	new?: boolean;
	status?: string;
	country?: string;
	popular?: string;
};

const IdeasSearchForm = () => {
	const { closeModalDrawer } = useModalDrawer();
	const [isNewIdea, setIsNewIdea] = useState<boolean | undefined>();
	const [showClear, setShowClear] = useState(false);

	const defaultField = useQueryParam<string>('field') || '';
	const defaultName = useQueryParam<string>('name') || '';
	const defaultIsNew = !!useQueryParam<string>('new') || undefined;
	const defaultStatus = useQueryParam<string>('status') || '';
	const defaultCountry = useQueryParam<string>('country') || '';
	const defaultPopular = useQueryParam<string>('popular') || '';

	const defaultValues: TSearchFields = {
		field: defaultField,
		name: defaultName,
		new: defaultIsNew,
		status: defaultStatus,
		country: defaultCountry,
		popular: defaultPopular
	};

	const onClick = (values: TSearchFields) => {
		closeModalDrawer();
		buildParams<TSearchFields>({ ...values, new: isNewIdea });
	};

	const onSetNewIdea = useCallback(() => {
		setIsNewIdea(!isNewIdea);
		setShowClear(true);
	}, [isNewIdea]);

	const onClearNewIdeas = () => {
		setIsNewIdea(false);
		setShowClear(false);
		deleteParams<TSearchFields>(['new']);
		navigateTo();
	};

	const onClearAll = useCallback(
		(reset: UseFormReset<TSearchFields>, values: TSearchFields) => {
			const defaultValues: Partial<TSearchFields> = {
				field: '',
				name: '',
				country: '',
				status: '',
				popular: '',
				new: false
			};

			reset(defaultValues);
			setIsNewIdea(false);
			deleteParams<TSearchFields>(values);
			setShowClear(false);
		},
		[setIsNewIdea]
	);

	const onClear = useCallback(
		(
			resetField: UseFormResetField<TSearchFields>,
			value: keyof TSearchFields,
			defaultValue: string = ''
		) => {
			resetField(value, { defaultValue });
			deleteParams([value]);
			navigateTo();
		},
		[]
	);

	return (
		<BaseForm<TSearchFields>
			name="idea-search-form"
			onSubmit={onClick}
			defaultValues={defaultValues}
		>
			{({ register, control, resetField, reset, getValues }) => (
				<>
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
							onClick={() => onClearAll(reset, getValues())}
							textAlign="left"
							ml="auto"
						>
							Clear all
						</Button>
					</FlexLayout>
					{/* <FormSelect<TSearchFields>
						id="country"
						name="country"
						label="Country"
						placeholder="country"
						options={ALL_COUNTRIES}
						register={register}
						control={control}
						onClear={() => onClear(resetField, 'country')}
					/> */}
					<FormInput<TSearchFields>
						id="name"
						name="name"
						label="Idea name"
						register={register}
						control={control}
						fieldProps={{
							placeholder: 'Search by idea name'
						}}
						onClear={() => onClear(resetField, 'name')}
					/>

					<FormSelect<TSearchFields>
						id="field"
						name="field"
						label="Field"
						placeholder="field"
						options={ALL_IDEA_CATEGORY_FIELDS}
						register={register}
						control={control}
						onClear={() => onClear(resetField, 'field')}
					/>

					<FormSelect<TSearchFields>
						id="status"
						name="status"
						label="Status"
						placeholder="status"
						options={ALL_IDEA_STATUSES}
						register={register}
						control={control}
						onClear={() => onClear(resetField, 'status')}
					/>

					<FormSelect<TSearchFields>
						id="popular"
						name="popular"
						label="Most popular"
						placeholder="by most popular"
						options={BY_IDEA_POPULARITY}
						register={register}
						control={control}
						onClear={() => onClear(resetField, 'popular')}
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
										py={1}
										onChange={onSetNewIdea}
										colorScheme="fpPrimary"
										ref={ref}
										size="lg"
										defaultChecked={!!Router.query['new']}
										isChecked={isNewIdea}
										borderColor="gray.200"
									>
										<Label
											color="fpGrey.900"
											fontSize={{
												base: 'small',
												sm: 'xs'
											}}
										>
											New ideas
										</Label>
									</Checkbox>
								)}
								control={control}
							/>
							{(showClear || Boolean(Router.query['new'])) && (
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
				</>
			)}
		</BaseForm>
	);
};

export default IdeasSearchForm;
