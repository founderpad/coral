import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { InputField } from '@components/input/InputField';
import { SelectField } from '@components/input/SelectField';
import { SwitchField } from '@components/input/SwitchField';
import { TextareaField } from '@components/input/TextareaField';
import { Label } from '@components/labels';
import {
	TCreateIdeaMutation,
	TIdeas_Insert_Input,
	useCreateIdeaMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { event } from '@lib/ga';
import { ideasStatusList, industriesList } from '@utils/Constants';
import Router from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

type TEditIdea = Omit<TIdeas_Insert_Input, 'user' | 'votes' | 'comments'>;

const CreateIdeaForm = () => {
	const user = useCurrentUser();
	const {
		handleSubmit,
		control,
		getValues,
		formState: { errors, isSubmitting, isValid }
	} = useForm<TEditIdea>({
		mode: 'all',
		defaultValues: {
			isPublished: true
		}
	});

	const [createIdeaMutation] = useCreateIdeaMutation({
		variables: {
			idea: getValues()
		},
		onCompleted: ({ idea }: TCreateIdeaMutation) => {
			event({
				action: 'Create idea',
				params: {
					user_id: user?.id,
					display_name: user?.displayName,
					user_email: user?.email,
					idea_id: idea?.id,
					idea_name: idea?.name
				}
			});

			Router.push(`/idea/${idea?.id}`);
		}
	});

	return (
		<Form
			id={'create-edit-idea-form'}
			name={'create-edit-Create edit idea form-form'}
			onSubmit={handleSubmit(createIdeaMutation)}
			noValidate
			stackProps={{ spacing: 10 }}
		>
			<InputField
				id="name"
				name="name"
				label="Name of your idea"
				placeholder="Name of your idea (max. 100 characters)"
				error={errors['name']}
				errorText={
					errors['name']?.type === 'required'
						? 'Please enter a name for your idea'
						: 'Idea name can not be more than 100 characters'
				}
				control={control}
				rules={{ required: true, maxLength: 100 }}
				size={'lg'}
				fontSize={'lg'}
				variant={'flushed'}
				isRequired
			/>
			{/* <AppDivider /> */}

			<TextareaField
				id="description"
				name="description"
				label="Summary of idea"
				placeholder="Write a summary about your idea (max. 200 characters)"
				error={errors['description']}
				errorText={
					errors['description']?.type === 'required'
						? 'Please enter a description for your idea'
						: 'Description can not be more than 500 characters'
				}
				maxRows={5}
				control={control}
				rules={{ required: true, maxLength: 200 }}
				isRequired
			/>

			<TextareaField
				id="description"
				name="description"
				label="Description of your idea"
				placeholder="Write a description about your idea (max. 1000 characters)"
				error={errors['description']}
				errorText={
					errors['description']?.type === 'required'
						? 'Please enter a description for your idea'
						: 'Description can not be more than 500 characters'
				}
				maxRows={5}
				control={control}
				rules={{ required: true, maxLength: 1000 }}
				isRequired
			/>
			<SelectField
				id="field"
				name="field"
				label="What field is the idea?"
				error={errors['field']}
				errorText="Please select the field for the idea"
				placeholder="field"
				size={'md'}
				options={industriesList()}
				control={control}
				isRequired
			/>
			<SelectField
				id="status"
				name="status"
				label="What is the idea's current status?"
				error={errors['status']}
				errorText="Please select the status for the idea"
				placeholder="status"
				size={'md'}
				options={ideasStatusList()}
				control={control}
				isRequired
			/>
			<TextareaField
				id="competitors"
				name="competitors"
				label="Your competitors"
				placeholder="List your competitors (max. 200 characters)"
				control={control}
				error={errors['competitors']}
				errorText="Competitors must not be more than 200 characters"
				rules={{ maxLength: 200 }}
			/>
			<TextareaField
				id="team"
				label="Your team"
				name="team"
				placeholder="List your team (max. 200 characters)"
				control={control}
				error={errors['team']}
				errorText="Team must not be more than 200 characters"
				rules={{ maxLength: 200 }}
			/>
			<TextareaField
				id="additionalInformation"
				label="Additional information"
				name="additionalInformation"
				placeholder="Any additional information"
				control={control}
				error={errors['additionalInformation']}
				errorText="Additional information must not be more than 500 characters"
				rules={{ maxLength: 500 }}
			/>

			<SwitchField
				id="isPublished"
				name="isPublished"
				label="Publish your idea"
				helperText="You can change this after it's been created"
				defaultChecked={true}
				control={control}
			/>

			<SubmitButton
				name={'create-idea-button'}
				label={'Create your idea'}
				alignSelf={'center'}
				isLoading={isSubmitting}
				disabled={!isValid || isSubmitting}
				mt={'auto'}
				w={{ base: 'full', sm: '200px' }}
				size={'md'}
			/>

			<Label fontSize={'9px'} color={'gray.500'}>
				The content on our site is provided for general information only
				(including such content uploaded by third parties). This
				includes any community assessment of business ideas on the
				sites. None of this content is intended to amount to advice on
				which you should rely. You must obtain professional or
				specialist advice before taking, or refraining from, any action
				on the basis of any of the content on our site, including such
				content published by any third parties.
			</Label>
		</Form>
	);
};

export default CreateIdeaForm;
