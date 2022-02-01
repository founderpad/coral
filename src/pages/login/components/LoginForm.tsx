import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { EmailField, PasswordField } from '@components/input';
import { Label } from '@components/labels';
import { PrimaryLink } from '@components/links';
// import SocialLogins from '@components/shared/SocialLogins';
import { useLogin } from '@hooks/auth';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { IAuthFormData } from 'src/types/auth';

const LoginForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useForm<IAuthFormData>({ mode: 'all' });
	const onLogin = useLogin();

	return (
		<React.Fragment>
			<Form
				id={'loginForm'}
				name={'loginForm'}
				onSubmit={handleSubmit(onLogin)}
			>
				<EmailField
					id="email"
					name="email"
					error={errors['email']}
					errorText="Please enter a valid email"
					control={control}
					autoComplete="email"
					size={'md'}
					fontSize={'sm'}
					isRequired
				/>
				<PasswordField
					id="password"
					name="password"
					error={errors['password']}
					rules={{ maxLength: 20, minLength: 6 }}
					control={control}
					size={'md'}
					fontSize={'sm'}
					isRequired
				/>

				<AlertFeedback />

				<SubmitButton
					id={'submit-login'}
					name={'submit-login'}
					label="Log in"
					isLoading={isSubmitting}
					disabled={!isValid || isSubmitting}
					size={'md'}
					fontSize={'sm'}
					w={'full'}
				/>
			</Form>
			{/* <SocialLogins /> */}
			<NoAccountFooter />
		</React.Fragment>
	);
};

const NoAccountFooter = memo(() => (
	<Label color={'gray.500'} fontSize={'x-small'} alignSelf={'center'} pt={6}>
		Don&apos;t have an account?
		<PrimaryLink href="/register" title={'Link to register an account'}>
			{' '}
			Create one here
		</PrimaryLink>
	</Label>
));

export default LoginForm;
