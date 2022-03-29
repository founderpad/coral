import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { BaseForm } from '@components/form';
import { FormInput } from '@components/form/inputs/FormField';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import { useResetPassword } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import { emailPattern } from '@utils/validators';
import React, { memo } from 'react';

type TResetPasswordFields = {
	email: string;
};

const defaultValues = {
	email: ''
};

const ResetPasswordForm = () => {
	const isResetSuccess = useQueryParam('rp_success');
	const isResetError = useQueryParam('rp_error');

	const onResetPassword = useResetPassword();

	return (
		<React.Fragment>
			<BaseForm<TResetPasswordFields>
				name="reset-password-form"
				onSubmit={onResetPassword}
				defaultValues={defaultValues}
				stackProps={{
					alignItems: 'center',
					spacing: 3
				}}
			>
				{({
					register,
					control,
					resetField,
					formState: { errors, isSubmitting }
				}) => (
					<React.Fragment>
						<Label fontSize="small" mb={4}>
							Please enter your email address below and we will
							send you an email with instructions to reset your
							password.
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
								required:
									'You must enter a valid email address',
								pattern: emailPattern
							}}
							errors={errors}
							hideClear
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

						{!isResetSuccess && (
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
						)}
					</React.Fragment>
				)}
			</BaseForm>
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
