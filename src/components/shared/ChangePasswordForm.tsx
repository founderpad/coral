import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { FormInput } from '@components/form/inputs/FormField';
import { useChangePassword } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import React from 'react';
import { useForm } from 'react-hook-form';

type TChangePasswordFields = {
	newPassword: string;
};
interface Props {
	showPasswordLabel?: boolean;
	showSubmit?: boolean;
	isSuccess?: boolean;
	isError?: boolean;
}

const ConfirmChangePasswordForm = (props: Props) => {
	const { showPasswordLabel = false, showSubmit = false } = props;
	const {
		handleSubmit,
		control,
		resetField,
		register,
		formState: { errors, isSubmitting }
	} = useForm<TChangePasswordFields>({
		mode: 'all',
		defaultValues: {
			newPassword: ''
		}
	});

	const onChangePassword = useChangePassword();

	const isChangeSuccess = useQueryParam('cp_success');
	const isChangeError = useQueryParam('cp_error');

	return (
		<Form
			id="edit-change-password"
			name="edit-change-password"
			onSubmit={handleSubmit(onChangePassword)}
			actions={
				!isChangeSuccess &&
				showSubmit && (
					<SubmitButton
						id="submit-reset-password"
						name="submit-reset-password"
						label="Reset password"
						isLoading={isSubmitting}
						disabled={isSubmitting}
						size="md"
						fontSize="small"
						w={{ base: 'full', sm: '150px' }}
					/>
				)
			}
			stackProps={{
				alignItems: 'center'
			}}
		>
			<FormInput<TChangePasswordFields>
				id="newPassword"
				name="newPassword"
				type="password"
				label={showPasswordLabel ? 'New password' : undefined}
				register={register}
				control={control}
				fieldProps={{
					placeholder: 'Password *',
					type: 'password'
				}}
				rules={{
					required: 'You must enter a valid password',
					minLength: {
						value: 6,
						message:
							'Your password must be a minimum of 6 characters'
					},
					maxLength: {
						value: 20,
						message:
							'Your password must be a maximum of 20 characters'
					}
				}}
				hideLimit={true}
				errors={errors}
				onClear={() => resetField('newPassword')}
			/>

			{isChangeSuccess && (
				<AlertFeedback
					status="success"
					message="Your password has been updated successfully"
				/>
			)}

			{isChangeError && (
				<AlertFeedback
					status="error"
					message="Failed to change password. Please try again later"
				/>
			)}

			{/* {!isChangeSuccess && showSubmit && (
				<SubmitButton
					id="submit-reset-password"
					name="submit-reset-password"
					label="Reset password"
					isLoading={isSubmitting}
					disabled={isSubmitting}
					size="md"
					fontSize="sm"
					w={{ base: 'full', sm: '175px' }}
				/>
			)} */}
		</Form>
	);
};

export default ConfirmChangePasswordForm;
