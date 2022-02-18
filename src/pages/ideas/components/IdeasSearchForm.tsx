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
import Router, { useRouter } from 'next/router';
import React, { useCallback, useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

type SelectSearch = {
	label: string;
	value: string;
};

type IdeaSearch = {
	field?: SelectSearch;
	name?: string;
	isNew?: boolean;
	status?: SelectSearch;
};

const IdeasSearchForm = () => {
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const router = useRouter();
	const { page, ...rest } = router.query;
	const [isNewIdea, setIsNewIdea] = useState(false);

	const { handleSubmit, control, reset, getValues, setValue } =
		useForm<IdeaSearch>({
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
		!queryParams.country && delete queryParams['country'];
		!queryParams.isNew && delete queryParams['is_new'];

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

	const resetField = (name: string) => {
		reset({
			...getValues(),
			[name]: ''
		});
	};

	const onSetNewIdea = useCallback(() => {
		setValue('isNew', !isNewIdea);
		setIsNewIdea(!isNewIdea);
	}, [isNewIdea]);

	const onClearNewIdeas = () => {
		delete Router.query['isNew'];
		setValue('isNew', false);
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

	return (
		<Form
			id={'ideaSearchForm'}
			name={'ideaSearchForm'}
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
				placeholder={'country'}
				options={ALL_COUNTRIES}
				mobileOptions={mobileCountriesList()}
				onClear={() => resetField('country')}
				control={control}
				isUrl
			/>
			<InputField
				id="name"
				name="name"
				placeholder="Search name"
				control={control}
				label={'Idea name'}
				variant={'filled'}
				onClear={() => resetField('name')}
				isUrl
			/>
			<SelectField
				id="field"
				name="field"
				options={ALL_IDEA_CATEGORY_FIELDS}
				mobileOptions={mobileIdeaCategoryFields()}
				onClear={() => resetField('field')}
				placeholder="field"
				control={control}
				label={'Field'}
				variant={'filled'}
				isUrl
			/>
			<SelectField
				id="status"
				name="status"
				options={ALL_IDEA_STATUSES}
				mobileOptions={mobileIdeaStatuses()}
				onClear={() => resetField('status')}
				placeholder="status"
				control={control}
				label={'Status'}
				variant={'filled'}
				isUrl
			/>

			<SelectField
				id="popularity"
				name="popularity"
				options={BY_IDEA_POPULARITY}
				mobileOptions={mobileIdeaPopularity()}
				onClear={() => resetField('popularity')}
				placeholder="most popular"
				control={control}
				label={'Most popular'}
				variant={'filled'}
				isUrl
			/>

			<AppDivider />

			<FormControl>
				<FlexLayout justifyContent={'space-between'}>
					<Controller
						name={'isNew'}
						render={({ field: { ref } }) => (
							<Checkbox
								name={'isNew'}
								rounded={'none'}
								focusBorderColor={'gray.150'}
								value={1}
								py={1}
								onChange={onSetNewIdea}
								colorScheme={'fpPrimary'}
								color={'fpGrey.900'}
								ref={ref}
								isChecked={isNewIdea}
							>
								<Label
									color={'fpGrey.900'}
									fontSize={{ base: 'small', sm: 'xs' }}
								>
									New ideas
								</Label>
							</Checkbox>
						)}
						control={control}
					/>
					<Button
						fontSize={'x-small'}
						colorScheme={'fpPrimary'}
						variant={'link'}
						mb={1}
						onClick={onClearNewIdeas}
					>
						Clear
					</Button>
				</FlexLayout>
			</FormControl>

			<SubmitButton
				name={'filter-ideas-button'}
				label={'Filter'}
				flex={2}
				title={'Filter ideas'}
			/>
		</Form>
	);
};

export default IdeasSearchForm;
