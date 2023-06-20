import { AlertFeedback } from '@/components/alert';
import { SubmitButton } from '@/components/buttons';
import { BaseForm } from '@/components/form';
import { FormInput } from '@/components/form/inputs/FormField';
import { Label } from '@/components/labels';
import { StackLayout } from '@/components/layouts';
import { PrimaryLink } from '@/components/links';
import { useResetPassword } from '@/hooks/auth';
import { useNotification } from '@/hooks/util';
import schema from '@/validation/auth/resetpassword/validationSchema';
import React, { memo } from 'react';

type TResetPasswordFields = {
	email: string;
};

const defaultValues = {
	email: ''
};

const ResetPasswordForm = () => {
	const { onResetPassword } = useResetPassword();
	const { notification } = useNotification();

	return (
		<>
			<BaseForm<TResetPasswordFields, typeof schema>
				name="reset-password-form"
				onSubmit={onResetPassword}
				defaultValues={defaultValues}
				schema={schema}
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
					<>
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
							errors={errors}
							hideClear
							onClear={() => resetField('email')}
						/>

						{notification && (
							<AlertFeedback
								status={notification.status}
								message={notification.message}
							/>
						)}

						{!notification && (
							<SubmitButton
								id="submit-reset-password"
								name="submit-reset-password"
								label="Reset password"
								isLoading={isSubmitting && !notification}
								disabled={isSubmitting && !notification}
								size="md"
								fontSize="small"
								w={{ base: 'full', sm: '200px' }}
							/>
						)}
					</>
				)}
			</BaseForm>
			<ResetPasswordFooter />
		</>
	);
};

const ResetPasswordFooter = memo(() => (
	<StackLayout
		spacing={2}
		pt={8}
		alignItems="center"
		direction={{ base: 'column-reverse', sm: 'row' }}
		justifyContent={{ sm: 'space-between' }}
		display="flex"
		w="full"
	>
		<Label color="fpGrey.500" fontSize="xs" alignSelf="center">
			No account?{' '}
			<PrimaryLink href="/register" title="Link to register an account">
				Register now
			</PrimaryLink>
		</Label>
		<PrimaryLink
			href="/login"
			title="Link to register an account"
			fontSize="xs"
		>
			Go to login
		</PrimaryLink>
	</StackLayout>
));

export default ResetPasswordForm;
