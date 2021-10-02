import { Flex, Text, VStack } from '@chakra-ui/layout';
import SubmitButton from 'components/buttons/SubmitButton';
import { Form } from 'components/form';
import { PasswordField } from 'components/input/InputFields';
import { PrimaryLink } from 'components/links';
import { useLogin } from 'hooks/auth';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormData } from 'types/auth';

const LoginForm = (): JSX.Element => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useForm<RegisterFormData>({ mode: 'all' });
	const onLogin = useLogin();

	return (
		<Form id={'login-form'} name={'loginform'} onSubmit={handleSubmit(onLogin)}>
			<VStack spacing={6} my={6}>
				{/* <EmailField
					id="email"
					name="email"
					error={errors['email']}
					errorText="Please enter a valid email"
					control={control}
					isRequired
				/> */}
				<PasswordField
					id="password"
					name="password"
					error={errors['password']}
					control={control}
					isRequired
				/>

				<SubmitButton
					label="Login now"
					isLoading={isSubmitting}
					disabled={!isValid || isSubmitting}
				/>
				<NoAccountFooter />
			</VStack>
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
			<PrimaryLink href="/register" fontSize={'xs'} title={'Link to register an account'}>
				Create one here
			</PrimaryLink>
		</Flex>
	)
);

export default LoginForm;
