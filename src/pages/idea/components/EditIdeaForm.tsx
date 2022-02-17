// eslint-disable-line no-unused-vars
// eslint-disable-line @typescript-eslint/no-unused-vars
import Form from '@components/form/Form';
import { InputField } from '@components/input/InputField';
import { SelectField } from '@components/input/SelectField';
import { SwitchField } from '@components/input/SwitchField';
import { TextareaField } from '@components/input/TextareaField';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { TIdeas_Set_Input, useUpdateIdeaMutation } from '@generated/api';
import { useSuccessNotification } from '@hooks/toast';
import {
	ALL_IDEA_CATEGORY_FIELDS,
	ALL_IDEA_STATUSES,
	mobileIdeaCategoryFields,
	mobileIdeaStatuses
} from '@utils/Constants';
import React, { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useIdeaFragment } from '../query/ideaQuery';

export const EditIdeaForm = () => {
	const idea = useIdeaFragment();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const showSuccessNotification = useSuccessNotification();

	const { __typename, id, ...rest } = idea;

	const {
		handleSubmit,
		control,
		getValues,
		reset,
		formState: { errors, isSubmitting, isValid }
	} = useForm<TIdeas_Set_Input>({
		mode: 'all',
		defaultValues: {
			...rest
		}
	});

	const [updateIdeaMutation] = useUpdateIdeaMutation({
		variables: {
			id: idea.id,
			idea: getValues() // value for 'idea'
		},
		onCompleted: () => {
			setModalDrawer({
				isOpen: false
			});
			showSuccessNotification({
				title: 'Your idea has been updated'
			});
		}
	});

	const resetField = useCallback(
		(name: string) => {
			reset({
				...getValues(),
				[name]: ''
			});
		},
		[reset, getValues]
	);

	return (
		<Form
			id={'editIdeaForm'}
			name={'editIdeaForm'}
			onSubmit={handleSubmit(updateIdeaMutation)}
			isSubmitting={isSubmitting}
			isValid={isValid}
			label={'Update idea'}
			stackProps={{ spacing: 8 }}
		>
			<InputField
				id="name"
				label="Name of your idea"
				placeholder="Name of your idea"
				error={errors['name']}
				errorText="Please enter a name for your idea"
				name="name"
				control={control}
				onClear={() => resetField('name')}
				isRequired
			/>

			<TextareaField
				id="description"
				label="Description of your idea"
				name="description"
				placeholder="Write a description about your idea (max. 500 characters)"
				error={errors['description']}
				errorText="Please enter your idea description (max. 500 characters)"
				control={control}
				rules={{ maxLength: 500 }}
				onClear={() => resetField('description')}
				isRequired
			/>

			<SelectField
				id="status"
				name="status"
				label="What is its current status?"
				error={errors['status']}
				errorText="Please select the status for your idea."
				placeholder="status"
				size={'sm'}
				options={ALL_IDEA_STATUSES}
				mobileOptions={mobileIdeaStatuses()}
				control={control}
				onClear={() => resetField('status')}
				isRequired
			/>

			<SelectField
				id="field"
				name="field"
				label="What field is your idea?"
				error={errors['field']}
				errorText="Please select the field for your idea."
				placeholder="field"
				size={'sm'}
				options={ALL_IDEA_CATEGORY_FIELDS}
				mobileOptions={mobileIdeaCategoryFields()}
				control={control}
				onClear={() => resetField('field')}
				isRequired
			/>

			<TextareaField
				id="competitors"
				label="Your competitors"
				name="competitors"
				placeholder="List your competitors about your idea"
				onClear={() => resetField('competitors')}
				control={control}
			/>

			<TextareaField
				id="team"
				label="Your team"
				name="team"
				placeholder="List each team member"
				control={control}
				onClear={() => resetField('team')}
			/>

			<TextareaField
				id="additionalInformation"
				label="Additional information"
				name="additionalInformation"
				placeholder="Any additional information"
				h={'200px'}
				control={control}
				onClear={() => resetField('additionalInformation')}
			/>

			<SwitchField
				id="isPublished"
				name="isPublished"
				label="Publish your idea"
				helperText="Unpublished ideas will not be searchable by other users."
				defaultChecked={idea.isPublished}
				control={control}
			/>
		</Form>
	);
};

export default EditIdeaForm;
