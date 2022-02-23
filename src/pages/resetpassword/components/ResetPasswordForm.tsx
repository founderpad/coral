import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { FormInput } from '@components/form/inputs/FormField';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import { useResetPassword } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import { emailPattern } from '@utils/validators';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';

type TResetPasswordFields = {
	email: string;
};

const ResetPasswordForm = () => {
	const {
		handleSubmit,
		control,
		resetField,
		register,
		formState: { errors, isSubmitting }
	} = useForm<TResetPasswordFields>({
		mode: 'all',
		defaultValues: {
			email: ''
		}
	});

	const isResetSuccess = useQueryParam('rp_success');
	const isResetError = useQueryParam('rp_error');

	const onResetPassword = useResetPassword();

	return (
		<React.Fragment>
			<Form
				id="reset-password-form"
				name="reset-password-form"
				onSubmit={handleSubmit(onResetPassword)}
				actions={
					!isResetSuccess && (
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
				<Label fontSize="small">
					Please enter your email address below and we will send you
					an email with instructions to reset your password.
				</Label>

				<FormInput<TResetPasswordFields>
					id="email"
					name="email"
					register={register}
					control={control}
					fieldProps={{
						placeholder: 'Email'
					}}
					rules={{
						required: 'You must enter a valid email address',
						pattern: emailPattern
					}}
					errors={errors}
					onClear={() => resetField('email')}
				/>

				{isResetSuccess && (
					<AlertFeedback
						status="success"
						message="Email sent with instructions to reset your password"
					/>
				)}

				{isResetError && (
					<AlertFeedback
						status="error"
						message="Failed to reset password. Please try again later."
					/>
				)}
			</Form>
			<ResetPasswordFooter />
		</React.Fragment>
	);
};

const ResetPasswordFooter = memo(() => (
	<FlexLayout justifyContent="space-between" alignItems="center" pt={8}>
		<Label color="fpGrey.500" fontSize="x-small" alignSelf="center">
			No account?{' '}
			<PrimaryLink href="/register" title="Link to register an account">
				Register now
			</PrimaryLink>
		</Label>
		<PrimaryLink
			href="/login"
			title="Link to register an account"
			fontSize="x-small"
		>
			Go to login
		</PrimaryLink>
	</FlexLayout>
));

export default ResetPasswordForm;
