import { SubmitButton } from '@/components/buttons';
import { BaseForm } from '@/components/form';
import {
	FormInput,
	FormSelect,
	FormTextarea
} from '@/components/form/inputs/FormField';
import { TIdeas_Set_Input } from '@/generated/api';
import { TCreateIdeaMutation, useCreateIdeaMutation } from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import { event } from '@/lib/ga';
import { ALL_IDEA_CATEGORY_FIELDS, ALL_IDEA_STATUSES } from '@/utils/Constants';
import Router from 'next/router';
import React from 'react';
import { SwitchField } from '@/components/input';
import { StackLayout } from '@/components/layouts';
// import { AppDivider } from '@/components/shared';
// import { useDispatch } from 'react-redux';
// import { addEsteemPoints } from '@/slices/auth';
// import { useSuccessNotification } from '@/hooks/toast';
import schema from '@/validation/idea/create/validationSchema';
import { AppDivider } from '@/components/shared';

const defaultValues = {
	name: '',
	summary: '',
	description: '',
	status: '',
	field: '',
	competitors: '',
	team: '',
	isPublished: true
};

const CreateIdeaForm = () => {
	const user = useAuth().getUser();
	// const dispatch = useDispatch();
	// const showNotification = useSuccessNotification();

	const [createIdeaMutation] = useCreateIdeaMutation();

	const onCreateIdea = (idea: TIdeas_Set_Input) => {
		createIdeaMutation({
			variables: {
				idea
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

				// dispatch(addEsteemPoints(50));
				// showNotification({
				// 	title: '+50 Esteem Points',
				// 	description: 'You have earned 50 Esteem Points'
				// });
				Router.push(`/idea/${idea?.id}`);
			}
		});
	};

	return (
		<BaseForm<TIdeas_Set_Input, typeof schema>
			name="edit-idea-form"
			onSubmit={onCreateIdea}
			defaultValues={defaultValues}
			schema={schema}
			stackProps={{
				alignItems: 'center',
				spacing: 10
			}}
		>
			{({
				register,
				control,
				resetField,
				formState: { errors, isSubmitting }
			}) => (
				<React.Fragment>
					<FormInput<TIdeas_Set_Input>
						id="name"
						name="name"
						label="Name of your idea"
						placeholder="Write the idea name (max. 75 characters)"
						helperText="Make your idea name stand out"
						register={register}
						control={control}
						fieldProps={{
							placeholder:
								'Write the idea name (max. 75 characters)',
							variant: 'flushed',
							size: 'lg',
							fontSize: 'lg',
							rounded: 'none'
						}}
						errors={errors}
						onClear={resetField}
						isRequired
					/>

					<FormTextarea<TIdeas_Set_Input>
						id="summary"
						name="summary"
						label="Summary"
						placeholder="Write a brief summary of your idea (max. 200 characters)"
						helperText="Make your summary pop! This is what people will see when they search"
						register={register}
						control={control}
						errors={errors}
						onClear={resetField}
						isRequired
					/>

					<FormTextarea<TIdeas_Set_Input>
						id="description"
						name="description"
						label="Description"
						placeholder="Write a description of your idea (max. 750 characters)"
						register={register}
						control={control}
						errors={errors}
						onClear={resetField}
					/>

					<StackLayout
						direction={{ base: 'column', sm: 'row' }}
						w="full"
					>
						<FormSelect<TIdeas_Set_Input>
							id="status"
							name="status"
							label="Current status"
							placeholder="status"
							options={ALL_IDEA_STATUSES}
							register={register}
							control={control}
							errors={errors}
							onClear={resetField}
							isRequired
						/>

						<FormSelect<TIdeas_Set_Input>
							id="field"
							name="field"
							label="Field"
							placeholder="field"
							options={ALL_IDEA_CATEGORY_FIELDS}
							register={register}
							control={control}
							errors={errors}
							onClear={resetField}
							isRequired
						/>
					</StackLayout>

					<FormTextarea<TIdeas_Set_Input>
						id="competitors"
						name="competitors"
						label="Competitors"
						placeholder="Write about what competitors your idea may face (max. 250 characters)"
						register={register}
						control={control}
						errors={errors}
						onClear={resetField}
					/>

					<FormTextarea<TIdeas_Set_Input>
						id="team"
						name="team"
						label="Team"
						placeholder="Write about your team for this idea (max. 250 characters)"
						register={register}
						control={control}
						errors={errors}
						onClear={resetField}
					/>

					<FormTextarea<TIdeas_Set_Input>
						id="additionalInformation"
						name="additionalInformation"
						label="Additional information"
						placeholder="Write any additional information about your idea (max. 500 characters)"
						register={register}
						control={control}
						errors={errors}
						onClear={resetField}
					/>

					<AppDivider />
					<SwitchField
						id="isPublished"
						name="isPublished"
						label="Publish your idea"
						helperText="Unpublished ideas will not be searchable by other users. You can change this after it's been created."
						defaultChecked={true}
						control={control}
					/>

					<SubmitButton
						id="create-idea"
						name="create-idea-button"
						label="Create your idea"
						alignSelf="center"
						isLoading={isSubmitting}
						disabled={isSubmitting}
						size="md"
						fontSize="small"
						w={{ base: 'full', sm: '200px' }}
					/>
				</React.Fragment>
			)}
		</BaseForm>
	);
};

export default CreateIdeaForm;
