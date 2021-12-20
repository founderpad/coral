import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	CloseButton
} from '@chakra-ui/react';
import { SubmitButton } from 'components/buttons';
import { Form } from 'components/form';
import { InputField } from 'components/input/InputField';
import { SelectField } from 'components/input/SelectField';
import { SwitchField } from 'components/input/SwitchField';
import { TextareaField } from 'components/input/TextareaField';
import { FlexLayout, StackLayout } from 'components/layouts';
import { PrimaryLink } from 'components/links';
import AppDivider from 'components/shared/AppDivider';
import { TIdeas, useCreateIdeaMutation } from 'generated/api';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ideasStatusList, industriesList } from 'utils/Constants';

type TEditIdea = Omit<TIdeas, 'idea_user' | 'idea_votes'>;

const CreateEditIdeaForm = ({ idea }: { idea?: TIdeas }): JSX.Element => {
	const {
		handleSubmit,
		control,
		getValues,
		reset,
		formState: { errors, isSubmitting, isValid }
	} = useForm<TEditIdea>({
		mode: 'all',
		defaultValues: {
			...idea,
			is_published: true
		}
	});

	const [createIdeaMutation, { data: createSucess }] = useCreateIdeaMutation({
		variables: {
			idea: getValues() // value for 'idea'
		}
	});

	useEffect(() => {
		if (createSucess) {
			reset({
				name: '',
				mission_statement: '',
				description: '',
				field: '',
				competitors: '',
				team: '',
				additional_information: '',
				status: ''
			});
		}
	}, [createSucess]);

	return (
		<Form
			id={'create-edit-idea-form'}
			name={'create-edit-Create edit idea form-form'}
			onSubmit={handleSubmit(createIdeaMutation)}
			noValidate
		>
			{' '}
			<StackLayout spacing={10}>
				<InputField
					id="name"
					name="name"
					label="Name of your idea"
					placeholder="Name of your idea (max. 100 characters)"
					error={errors['name']}
					errorText="Please enter a name for your idea"
					control={control}
					rules={{ maxLength: 100 }}
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
					errorText="Please enter your idea description (max. 500 characters)"
					control={control}
					rules={{ maxLength: 500 }}
					isRequired
				/>

				<SelectField
					id="field"
					name="field"
					label="What field is your idea?"
					error={errors['field']}
					errorText="Please select the field for your idea."
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
					errorText="Please select the status for your idea."
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
					id="additional_information"
					label="Additional information"
					name="additional_information"
					placeholder="Any additional information"
					control={control}
					error={errors['additional_information']}
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

				{/* {(updateSuccess || createSucess) && (
					<CreateUpdateSuccessAlert
						isUpdate={!!updateSuccess}
						ideaId={updateSuccess ? idea.id : createSucess.idea.id}
					/>
				)} */}

				{createSucess && (
					<CreateUpdateSuccessAlert
						isUpdate={false}
						ideaId={createSucess.idea.id}
					/>
				)}

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
			</StackLayout>
		</Form>
	);
};

const CreateUpdateSuccessAlert = ({
	isUpdate,
	ideaId
}: {
	isUpdate: boolean;
	ideaId: string;
}): JSX.Element => (
	<Alert status="success" variant={'left-accent'}>
		<AlertIcon />
		<FlexLayout flexDirection={'column'}>
			<AlertTitle color={'black'} fontWeight={'medium'} fontSize={'md'}>
				Your idea has been {isUpdate ? 'updated' : 'created'}
			</AlertTitle>
			<AlertDescription
				display="block"
				fontSize={'small'}
				mb={4}
				color={'gray.500'}
			>
				Your {isUpdate ? 'updated' : 'new'} idea has been created and,
				if published, will be live to other users.
			</AlertDescription>

			<PrimaryLink
				title={'View your idea'}
				href={`/idea/${ideaId}`}
				fontSize={'smaller'}
			>
				Click here to view your idea
			</PrimaryLink>
		</FlexLayout>
		<CloseButton position="absolute" right="8px" top="8px" />
	</Alert>
);

export default CreateEditIdeaForm;
