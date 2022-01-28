import { Button, Icon } from '@chakra-ui/react';
import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { EmailField, PasswordField } from '@components/input';
import { Label } from '@components/labels';
import { StackLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import { useLogin, useSocialLogin } from '@hooks/auth';
import React, { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5';
import { IAuthFormData, TAuthProvider } from 'src/types/auth';

const LoginForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useForm<IAuthFormData>({ mode: 'all' });
	const onLogin = useLogin();

	// const { isAuthenticated } = useAuth();
	// useEffect(() => {
	// 	console.log('is auth: ', isAuthenticated);
	// }, [isAuthenticated]);

	return (
		<>
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
			<SocialLogins />
			<NoAccountFooter />
		</>
	);
};

const SocialLogins = memo(() => {
	const onLogin = useSocialLogin();

	const onSocialLogin = useCallback(
		(provider: TAuthProvider) => {
			onLogin(provider);
		},
		[onLogin]
	);

	return (
		<StackLayout>
			<Label textAlign={'center'} fontSize={'xs'} color={'gray.400'}>
				Or
			</Label>
			<Button
				leftIcon={<Icon as={IoLogoGoogle} />}
				rounded={'none'}
				onClick={() => onSocialLogin('google')}
			>
				Sign in with Google
			</Button>
			<Button leftIcon={<Icon as={IoLogoGithub} />} rounded={'none'}>
				Sign in with GitHub
			</Button>
		</StackLayout>
	);
});

const NoAccountFooter = memo(() => (
	<Label color={'gray.500'} fontSize={'x-small'} alignSelf={'center'}>
		Don&apos;t have an account?
		<PrimaryLink href="/register" title={'Link to register an account'}>
			{' '}
			Create one here
		</PrimaryLink>
	</Label>
));

export default LoginForm;
