import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import { Heading, Stack, Text } from '@chakra-ui/layout';
import SubmitButton from 'components/buttons/SubmitButton';
import { InputField } from 'components/input/InputFields';
import { SelectField } from 'components/input/SelectFields';
import { TextareaField } from 'components/input/TextareaFields';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TIdea } from 'types/idea';
import { industriesList } from 'utils/Constants';

const EditCreateEditIdeaForm = ({ idea }: { idea: TIdea }): JSX.Element => {
	// const showSuccessNotification = useSuccessNotification();

	const {
		handleSubmit,
		control,
		// getValues,
		formState: { errors, isSubmitting, isValid }
	} = useForm<TIdea>({
		mode: 'all',
		defaultValues: {
			...idea
		}
	});

	// const [updateIdea, { data }] = useUpdateIdea(getValues());

	// useEffect(() => {
	// 	if (data) {
	// 		showSuccessNotification({
	// 			title: 'Idea updated',
	// 			description: 'Idea updated successfully'
	// 		});
	// 	}
	// }, [data]);

	const onUpdate = () => {
		console.log('');
	};

	return (
		// <form onSubmit={handleSubmit(updateIdea)} noValidate>
		<form onSubmit={handleSubmit(onUpdate)} noValidate>
			{' '}
			<Stack spacing={8} mt={8} d={'flex'}>
				<InputField
					id="name"
					label="Name of your idea"
					placeholder="Name of your idea"
					error={errors['name']}
					errorText="Please enter a name for your idea"
					name="name"
					control={control}
					isRequired
				/>

				<TextareaField
					id="mission_statement"
					label="Mission statement"
					name="mission_statement"
					placeholder="Write a mission statement about your idea (max. 150 characters)"
					error={errors['mission_statement']}
					errorText="Please enter your mission statement."
					control={control}
					rules={{ maxLength: 150 }}
					isRequired
				/>

				<TextareaField
					id="description"
					label="Description of your idea"
					name="description"
					placeholder="Write a description about your idea (max. 150 characters)"
					error={errors['description']}
					errorText="Please enter your idea description (max. 150 characters)"
					helperText="aaaa"
					control={control}
					rules={{ maxLength: 150 }}
					isRequired
				/>

				<SelectField
					id="industry"
					name="industry"
					label="What industry is your idea?"
					error={errors['industry']}
					errorText="Please select the industry for your idea."
					options={industriesList()}
					control={control}
					isRequired
				/>

				<TextareaField
					id="competitors"
					label="Your competitors"
					name="competitors"
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

				<FormControl>
					<Heading as={'h5'} size={'sm'} color={'gray.700'}>
						Supporting material
					</Heading>
					<Text fontSize={'sm'} color={'gray.500'}>
						Any supporting material you wish to share such as pitch
						decks, business plans and accelerators.
					</Text>
					<FormHelperText>
						<em>Max. file size: 5mb</em>
						<br />
						<em>Supported types are .doc, .docx, .pdf, .txt</em>
					</FormHelperText>
				</FormControl>

				{/* <Stack
					w={'full'}
					flex={1}
					justifyContent={'flex-start'}
					spacing={4}
					direction={{ base: 'column', sm: 'row' }}
				>
					<FileUploader label="Business Plan" />
					<FileUploader label="Pitch Deck" />
					<FileUploader label="Other" />
				</Stack> */}

				<SubmitButton
					label="Update your idea"
					alignSelf={'center'}
					isLoading={isSubmitting}
					disabled={!isValid || isSubmitting}
					mt={'auto'}
				/>
			</Stack>
		</form>
	);
};

export default EditCreateEditIdeaForm;
