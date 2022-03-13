import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { BaseForm } from '@components/form';
import { FormInput } from '@components/form/inputs/FormField';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import { useLogin } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import { emailPattern } from '@utils/validators';
import React, { memo } from 'react';
import { TLoginFields } from '../../../../types/auth';

const defaultValues = {
	email: '',
	password: ''
};

const LoginForm = () => {
	const onLogin = useLogin();
	const isError = useQueryParam('error');
	const isVerifiedEmail = useQueryParam('type') === 'emailVerify';

	return (
		<React.Fragment>
			{isVerifiedEmail && (
				<AlertFeedback message="Email address successfully verified" />
			)}

			<BaseForm<TLoginFields>
				name="login-form"
				onSubmit={onLogin}
				defaultValues={defaultValues}
				stackProps={{
					alignItems: 'center',
					spacing: 2
				}}
			>
				{({
					register,
					control,
					resetField,
					formState: { errors, isSubmitting }
				}) => (
					<React.Fragment>
						<FormInput<TLoginFields>
							id="email"
							name="email"
							placeholder="Email"
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
							hideLimit={true}
							errors={errors}
							onClear={() => resetField('email')}
						/>

						<FormInput<TLoginFields>
							id="password"
							name="password"
							placeholder="Password"
							register={register}
							control={control}
							fieldProps={{
								placeholder: 'Password',
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
							onClear={() => resetField('password')}
						/>

						{isError && (
							<AlertFeedback
								status="error"
								message={
									'Failed to login. Incorrect email and/or password.'
								}
							/>
						)}

						<SubmitButton
							id="submit-login"
							name="submit-login"
							label="Log in"
							isLoading={isSubmitting}
							disabled={isSubmitting}
							size="md"
							fontSize="small"
							w={{ base: 'full', sm: '150px' }}
						/>
					</React.Fragment>
				)}
			</BaseForm>
			{/* <SocialLogins /> */}
			<LoginFooter />
		</React.Fragment>
	);
};

const LoginFooter = memo(() => (
	<FlexLayout justifyContent="space-between" alignItems="center" pt={8}>
		<Label color="gray.500" fontSize="x-small" alignSelf="center">
			No account?{' '}
			<PrimaryLink href="/register" title="Link to register an account">
				Register now
			</PrimaryLink>
		</Label>
		<PrimaryLink
			href="/resetpassword"
			title="Link to register an account"
			fontSize="x-small"
		>
			Forgotten password?
		</PrimaryLink>
	</FlexLayout>
));

export default LoginForm;
