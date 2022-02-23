import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { FormInput } from '@components/form/inputs/FormField';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import { useLogin } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import { emailPattern } from '@utils/validators';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { TLoginFields } from '../../../types/auth';

const LoginForm = () => {
	const {
		control,
		handleSubmit,
		register,
		resetField,
		formState: { errors, isSubmitting } // isValid
	} = useForm<TLoginFields>({
		mode: 'all',
		defaultValues: {
			email: '',
			password: ''
		}
	});
	const onLogin = useLogin();

	const isError = useQueryParam('error');

	return (
		<React.Fragment>
			<Form
				id="login-form"
				name="login-form"
				onSubmit={handleSubmit(onLogin)}
				stackProps={{
					alignItems: 'center'
				}}
			>
				<FormInput<TLoginFields>
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

				<FormInput<TLoginFields>
					id="password"
					name="password"
					register={register}
					control={control}
					type="password"
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
					fontSize="sm"
					w={{ base: 'full', sm: '175px' }}
				/>
			</Form>
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
