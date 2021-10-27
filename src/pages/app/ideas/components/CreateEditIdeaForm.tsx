import { Stack } from '@chakra-ui/layout';
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
	CloseButton,
	Link
} from '@chakra-ui/react';
import { SubmitButton } from 'components/buttons';
import { Form } from 'components/form';
import { InputField } from 'components/input/InputField';
import { SelectField } from 'components/input/SelectField';
import { SwitchField } from 'components/input/SwitchField';
import { TextareaField } from 'components/input/TextareaField';
import { TIdeas, useCreateIdeaMutation } from 'generated/api';
import NextLink from 'next/link';
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
			<Stack spacing={8} d={'flex'} bg={'white'}>
				<InputField
					id="name"
					name="name"
					label="Name of your idea"
					placeholder="Name of your idea"
					error={errors['name']}
					errorText="Please enter a name for your idea"
					control={control}
					isRequired
				/>

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

				{/* <TextareaField
					id="missionstatement"
					label="Mission statement"
					name="mission_statement"
					placeholder="Write a mission statement about your idea (max. 500 characters)"
					control={control}
					rules={{ maxLength: 500 }}
				/> */}

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
					placeholder="List your competitors about your idea"
					control={control}
					// rules={{ maxLength: 150 }}
				/>

				<TextareaField
					id="team"
					label="Your team"
					name="team"
					placeholder="List each team member"
					control={control}
					// rules={{ maxLength: 150 }}
				/>

				<TextareaField
					id="additional_information"
					label="Additional information"
					name="additional_information"
					placeholder="Any additional information"
					control={control}
					// rules={{ maxLength: 150 }}
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
					minW={'xs'}
					size={'md'}
				/>
			</Stack>
		</Form>
	);
};

const CreateUpdateSuccessAlert = ({
	isUpdate,
	ideaId
}: {
	isUpdate: boolean;
	ideaId: string;
}): JSX.Element => {
	return (
		<Alert status="success" variant={'left-accent'}>
			<AlertIcon />
			<Box flex="1">
				<AlertTitle color={'fpGrey.900'} fontWeight={'bold'}>
					Your idea has been {isUpdate ? 'updated' : 'created'}
				</AlertTitle>
				<AlertDescription display="block" fontSize={'sm'} mb={4}>
					Your {isUpdate ? 'updated' : 'new'} idea has been added and
					will be live to other founders.
				</AlertDescription>

				<NextLink href={`/app/idea/${ideaId}`} passHref>
					<Link color={'fpPrimary.500'} fontSize={'sm'}>
						Click here to view your idea
					</Link>
				</NextLink>
			</Box>
			<CloseButton position="absolute" right="8px" top="8px" />
		</Alert>
	);
};

export default CreateEditIdeaForm;
