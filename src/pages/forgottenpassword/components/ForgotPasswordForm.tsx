import { Button } from '@chakra-ui/button';
import {
	FormControl,
	FormErrorMessage,
	FormLabel
} from '@chakra-ui/form-control';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Link, Stack, Text, VStack } from '@chakra-ui/layout';
import { useForgottenPassword } from 'hooks/auth';
import NextLink from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IRegisterFormData } from 'types/auth';
import { EMAIL_REGEX } from 'utils/validators';

const ForgotPasswordForm = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<IRegisterFormData>();
	const onResetPassword = useForgottenPassword();

	return (
		<Stack
			minH={'100vh'}
			direction={{ base: 'column', md: 'row' }}
			m="auto"
		>
			<Flex p={6} flex={1} align={'center'} justify={'center'}>
				<Stack spacing={4} w={'full'} maxW={'md'}>
					<Image
						mb={4}
						alignSelf="center"
						h="40px"
						w="200px"
						src="https://minio-19728797.nhost.app/nhost/founderpad-assets/logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=3ec88dd8e741adc8059970ea94833c9d%2F20210606%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210606T104027Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c8ed3c91a3f5b212de40b9d8b2400d5dc4643a196c727bb9dcb5d57c1357d884"
					/>
					<Heading textAlign="center" fontSize={'2xl'}>
						Reset your password
					</Heading>
					<Text textAlign="center" color={'gray.400'}>
						Forgot your password? We&apos;ve got you covered!
					</Text>
					<form onSubmit={handleSubmit(onResetPassword)} noValidate>
						<VStack spacing={6} my={6}>
							<FormControl id="email" isInvalid={!!errors.email}>
								<FormLabel>Email address</FormLabel>
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
										<span>
											Please enter a valid email address.
										</span>
									)}
								</FormErrorMessage>
							</FormControl>
							<VStack spacing={6} w="full">
								<Button
									mx="auto"
									alignSelf="center"
									w={'300px'}
									mt={6}
									colorScheme="blue"
									isLoading={isSubmitting}
									type="submit"
									disabled={
										!!errors.email || !!errors.password
									}
								>
									Reset password
								</Button>
								<NextLink href="/login">
									<Link color={'gray.500'} size="xs">
										Have an account? Login here
									</Link>
								</NextLink>
							</VStack>
						</VStack>
					</form>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default ForgotPasswordForm;
