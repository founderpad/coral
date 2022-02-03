import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { EmailField, PasswordField } from '@components/input';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
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
		formState: { errors, isSubmitting } // isValid
	} = useForm<IAuthFormData>({ mode: 'all' });
	const onLogin = useLogin();

	return (
		<React.Fragment>
			<Form
				id={'loginform'}
				name={'loginform'}
				onSubmit={handleSubmit(onLogin)}
				stackProps={{
					alignItems: 'center'
				}}
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

				{/* <AlertFeedback /> */}

				<SubmitButton
					id={'submit-login'}
					name={'submit-login'}
					label="Log in"
					isLoading={isSubmitting}
					// disabled={!isValid || isSubmitting}
					disabled={isSubmitting}
					size={'md'}
					fontSize={'sm'}
					w={{ base: 'full', sm: '175px' }}
				/>
			</Form>
			{/* <SocialLogins /> */}
			<LoginFooter />
		</React.Fragment>
	);
};

const LoginFooter = memo(() => (
	<FlexLayout justifyContent={'space-between'} alignItems={'center'} pt={8}>
		<Label color={'gray.500'} fontSize={'x-small'} alignSelf={'center'}>
			No account?
			<PrimaryLink href="/register" title={'Link to register an account'}>
				{' '}
				Register now
			</PrimaryLink>
		</Label>
		<PrimaryLink
			href="/forgottenpassword"
			title={'Link to register an account'}
			fontSize={'x-small'}
		>
			{' '}
			Forgotten password?
		</PrimaryLink>
	</FlexLayout>
));

export default LoginForm;
