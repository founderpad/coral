import Form from 'components/form/Form';
import { InputField } from 'components/input/InputField';
import { SelectField } from 'components/input/SelectField';
import { SwitchField } from 'components/input/SwitchField';
import { TextareaField } from 'components/input/TextareaField';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { Ideas_Insert_Input, useUpdateIdeaMutation } from 'generated/graphql';
import { useSuccessNotification } from 'hooks/toast';
import React, { ReactElement, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ideasStatusList, industriesList } from 'utils/Constants';
import useIdeaFragment from '../fragments/IdeaFragment';

const EditIdeaForm = (): ReactElement<any> => {
	const idea = useIdeaFragment();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const showSuccessNotification = useSuccessNotification();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { __typename, id, user_id, idea_user, idea_votes, ...rest } = idea;

	const {
		handleSubmit,
		control,
		getValues,
		formState: { errors, isSubmitting, isValid }
	} = useForm<Ideas_Insert_Input>({
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
		onCompleted: (_data) => {
			setModalDrawer({
				isOpen: false
			});
			showSuccessNotification({
				title: 'Your idea has been updated'
			});
		}
	});

	return (
		<Form
			id={'editIdeaForm'}
			name={'editIdeaForm'}
			onSubmit={handleSubmit(updateIdeaMutation)}
			isSubmitting={isSubmitting}
			isValid={isValid}
			label={'Update idea'}
		>
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

			{/* <TextareaField
				id="missionstatement"
				label="Mission statement"
				name="mission_statement"
				placeholder="Write a mission statement about your idea (max. 500 characters)"
				error={errors['mission_statement']}
				errorText="Please enter your mission statement (max. 500 characters)"
				control={control}
				rules={{ maxLength: 500 }}
				isRequired
			/> */}

			<TextareaField
				id="description"
				label="Description of your idea"
				name="description"
				placeholder="Write a description about your idea (max. 500 characters)"
				error={errors['description']}
				errorText="Please enter your idea description (max. 500 characters)"
				control={control}
				rules={{ maxLength: 500 }}
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

			<TextareaField
				id="competitors"
				label="Your competitors"
				name="competitors"
				placeholder="List your competitors about your idea"
				control={control}
			/>

			<TextareaField
				id="team"
				label="Your team"
				name="team"
				placeholder="List each team member"
				control={control}
			/>

			<TextareaField
				id="additional_information"
				label="Additional information"
				name="additional_information"
				placeholder="Any additional information"
				h={'200px'}
				control={control}
			/>

			<SwitchField
				id="is_published"
				name="is_published"
				label="Publish your idea"
				helperText="Unpublished ideas will not be searchable by other users."
				defaultChecked={idea.is_published}
				control={control}
			/>
		</Form>
	);
};

export default EditIdeaForm;
