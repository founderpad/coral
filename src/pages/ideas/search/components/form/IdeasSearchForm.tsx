import { Button, Checkbox, FormControl } from '@chakra-ui/react';
import { SubmitButton } from '@components/buttons';
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
import React, { useCallback, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useQueryParam } from '@hooks/util';
import Router from 'next/router';
import { BaseForm } from '@components/form';

type TSearchFields = {
	field?: string;
	name?: string;
	new?: boolean;
	status?: string;
	country?: string;
	popular?: string;
};

const IdeasSearchForm = () => {
	const { setModalDrawer } = useModalDrawer();
	const [isNewIdea, setIsNewIdea] = useState<boolean | undefined>(undefined);
	const [showClear, setShowClear] = useState(false);

	const onClick = (values: TSearchFields) => {
		setModalDrawer({
			isOpen: false
		});

		buildParams<TSearchFields>({ ...values, new: isNewIdea });
	};

	const onSetNewIdea = useCallback(() => {
		setIsNewIdea(!isNewIdea);
		setShowClear(true);
	}, [isNewIdea]);

	const onClearNewIdeas = () => {
		setIsNewIdea(false);
		setShowClear(false);
		deleteParam<TSearchFields>('new');
		navigateTo();
	};

	return (
		<BaseForm<TSearchFields>
			name="idea-search-form"
			onSubmit={onClick}
			defaultValues={{
				field: useQueryParam<string>('field') || '',
				name: useQueryParam<string>('name') || '',
				new: !!useQueryParam<string>('new') || undefined,
				status: useQueryParam<string>('status') || '',
				country: useQueryParam<string>('country') || '',
				popular: useQueryParam<string>('popular') || ''
			}}
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
							onClick={() => {
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
							}}
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
						onClear={() => {
							resetField('country', { defaultValue: '' });
							deleteParam<TSearchFields>('country');
							navigateTo();
						}}
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
						onClear={() => {
							resetField('name', { defaultValue: '' });
							deleteParam<TSearchFields>('name');
							navigateTo();
						}}
					/>

					<FormSelect<TSearchFields>
						id="field"
						name="field"
						label="Field"
						placeholder="field"
						options={ALL_IDEA_CATEGORY_FIELDS}
						register={register}
						control={control}
						onClear={() => {
							resetField('field', { defaultValue: '' });
							deleteParam<TSearchFields>('field');
							navigateTo();
						}}
					/>

					<FormSelect<TSearchFields>
						id="status"
						name="status"
						label="Status"
						placeholder="status"
						options={ALL_IDEA_STATUSES}
						register={register}
						control={control}
						onClear={() => {
							resetField('status', { defaultValue: '' });
							deleteParam<TSearchFields>('status');
							navigateTo();
						}}
					/>

					<FormSelect<TSearchFields>
						id="popular"
						name="popular"
						label="Most popular"
						placeholder="by most popular"
						options={BY_IDEA_POPULARITY}
						register={register}
						control={control}
						onClear={() => {
							resetField('popular', { defaultValue: '' });
							deleteParam<TSearchFields>('popular');
							navigateTo();
						}}
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
				</>
			)}
		</BaseForm>
	);
};

export default IdeasSearchForm;
