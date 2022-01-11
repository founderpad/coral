import { SubmitButton } from 'components/buttons';
import { Form } from 'components/form';
import { InputField } from 'components/input/InputField';
import { SelectField } from 'components/input/SelectField';
import { SwitchField } from 'components/input/SwitchField';
import { TextareaField } from 'components/input/TextareaField';
import AppDivider from 'components/shared/AppDivider';
import {
	TCreateIdeaMutation,
	TIdeas,
	TIdeas_Insert_Input,
	useCreateIdeaMutation
} from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import * as ga from 'lib/ga';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ideasStatusList, industriesList } from 'utils/Constants';

type TEditIdea = Omit<TIdeas_Insert_Input, 'user' | 'votes' | 'comments'>;

// type TEditIdea = Omit<TIdeas_Insert_Input, 'votes'>;

const CreateEditIdeaForm = ({ idea }: { idea?: TIdeas }): JSX.Element => {
	const user = useCurrentUser();
	const router = useRouter();
	const {
		handleSubmit,
		control,
		getValues,
		formState: { errors, isSubmitting, isValid }
	} = useForm<TEditIdea>({
		mode: 'all',
		defaultValues: {
			...idea,
			isPublished: true
		}
	});

	const [createIdeaMutation] = useCreateIdeaMutation({
		variables: {
			idea: getValues() // value for 'idea'
		},
		onCompleted: ({ idea }: TCreateIdeaMutation) => {
			ga.event({
				action: 'Create idea',
				params: {
					user_id: user.id,
					display_name: user.displayName,
					user_email: user.email,
					idea_id: idea.id,
					idea_name: idea.name
				}
			});
			router.push(`/idea/${idea.id}`);
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
				isRequired
			/>
			<AppDivider />
			<TextareaField
				id="description"
				name="description"
				label="Description of your idea"
				placeholder="Write a description about your idea (max. 500 characters)"
				error={errors['description']}
				errorText={
					errors['description']?.type === 'required'
						? 'Please enter a description for your idea'
						: 'Description can not be more than 500 characters'
				}
				maxRows={5}
				control={control}
				rules={{ required: true, maxLength: 500 }}
				isRequired
			/>
			<SelectField
				id="field"
				name="field"
				label="What field is your idea?"
				error={errors['field']}
				errorText="Please select the field for your idea"
				placeholder="field"
				size={'md'}
				options={industriesList()}
				control={control}
				isRequired
			/>
			<SelectField
				id="status"
				name="status"
				label="What is its current status?"
				error={errors['status']}
				errorText="Please select the status for your idea"
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
				errorText="Additional information must not be more than 200 characters"
				rules={{ maxLength: 200 }}
			/>
			{/* <FormControl>
					<Heading as={'h5'} size={'sm'} color={'fpGrey.900'}>
						Supporting material
					</Heading>
					<Text fontSize={'sm'} color={'fpGrey.500'}>
						Any supporting material you wish to share such as pitch
						decks, business plans and accelerators.
					</Text>
					<FormHelperText>
						<em>Max. file size: 5mb</em>
						<br />
						<em>Supported types are .doc, .docx, .pdf, .txt</em>
					</FormHelperText>
				</FormControl>

				<Stack
					w={'full'}
					flex={1}
					justifyContent={'flex-start'}
					spacing={4}
					direction={{ base: 'column', sm: 'row' }}
					pb={4}
				>
					<FileUploader label="Business Plan" />
					<FileUploader label="Pitch Deck" />
					<FileUploader label="Other" />
				</Stack> */}
			<SwitchField
				id="is_published"
				name="is_published"
				label="Publish your idea"
				helperText="You can change this after it's been created"
				defaultChecked={true}
				control={control}
			/>
			<SubmitButton
				name={'create-idea-button'}
				label={(idea ? 'Update your ' : 'Create your ') + 'idea'}
				alignSelf={'center'}
				isLoading={isSubmitting}
				disabled={!isValid || isSubmitting}
				mt={'auto'}
				w={{ base: 'full', sm: 'xs' }}
				size={'md'}
			/>
			{/* </StackLayout> */}
		</Form>
	);
};

export default CreateEditIdeaForm;