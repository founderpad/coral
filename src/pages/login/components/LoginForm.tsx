import { Flex, Text } from '@chakra-ui/layout';
import { SubmitButton } from 'components/buttons';
import { Form } from 'components/form';
import { useBaseForm } from 'components/form/hooks';
import { EmailField, PasswordField } from 'components/input';
import { StackLayout } from 'components/layouts';
import { PrimaryLink } from 'components/links';
import { useLogin } from 'hooks/auth';
import React, { memo } from 'react';
import { IAuthFormData } from 'types/auth';

const LoginForm = (): JSX.Element => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useBaseForm<IAuthFormData>();
	const onLogin = useLogin();

	return (
		<Form
			id={'login-form'}
			name={'loginform'}
			onSubmit={handleSubmit(onLogin)}
		>
			<StackLayout spacing={6} my={6}>
				<EmailField
					id="email"
					name="email"
					error={errors['email']}
					errorText="Please enter a valid email"
					control={control}
					isRequired
				/>
				<PasswordField
					id="password"
					name="password"
					error={errors['password']}
					rules={{ maxLength: 20, minLength: 6 }}
					control={control}
					isRequired
				/>

				<SubmitButton
					id={'submit-login'}
					name={'submit-login'}
					label="Login now"
					isLoading={isSubmitting}
					disabled={!isValid || isSubmitting}
					size={'md'}
					full
				/>
				<NoAccountFooter />
			</StackLayout>
		</Form>
	);
};

const NoAccountFooter = memo(
	(): JSX.Element => (
		<Flex
			spacing={6}
			justifyContent={'center'}
			w="full"
			mt={'auto'}
			mx={'auto'}
		>
			<Text color={'gray.500'} fontSize={'xs'}>
				Don&apos;t have an account?
			</Text>
			&nbsp;
			<PrimaryLink
				href="/register"
				fontSize={'xs'}
				title={'Link to register an account'}
			>
				Create one here
			</PrimaryLink>
		</Flex>
	)
);

export default LoginForm;
