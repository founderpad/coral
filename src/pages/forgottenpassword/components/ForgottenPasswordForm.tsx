import { Button } from '@chakra-ui/button';
import {
	FormControl,
	FormErrorMessage,
	FormLabel
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useForgottenPassword } from 'hooks/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormData } from 'types/auth';
import { EMAIL_REGEX } from 'utils/validators';

const ForgottenPasswordForm = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<RegisterFormData>({ mode: 'onBlur' });
	const onForgottenPassword = useForgottenPassword();

	return (
		<form onSubmit={handleSubmit(onForgottenPassword)} noValidate>
			<FormControl id="email" isInvalid={!!errors.email} isRequired>
				<FormLabel as="label" fontSize={'sm'} color={'gray.500'}>
					Email
				</FormLabel>
				<Input
					type="email"
					placeholder="Email"
					rounded="sm"
					focusBorderColor="gray.150"
					{...register('email', {
						required: true,
						pattern: EMAIL_REGEX
					})}
				/>
				<FormErrorMessage alignItems="flex-start">
					{errors.email && (
						<span>Please enter a valid email address.</span>
					)}
				</FormErrorMessage>
			</FormControl>
			<Button
				mx="auto"
				alignSelf="center"
				w={'full'}
				mt={6}
				colorScheme="blue"
				isLoading={isSubmitting}
				type="submit"
				disabled={!!errors.email || !!errors.password || isSubmitting}
			>
				Reset password now
			</Button>
		</form>
	);
};

export default ForgottenPasswordForm;
