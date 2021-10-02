import { Stack, VStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import SubmitButton from 'components/buttons/SubmitButton';
import {
	EmailField,
	InputField,
	PasswordField
} from 'components/input/InputFields';
import { SelectField } from 'components/input/SelectFields';
import { PrimaryLink } from 'components/links';
import { useRegister } from 'hooks/auth';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormData } from 'types/auth';
import { UserType } from 'utils/Constants';
import { EMAIL_REGEX } from 'utils/validators';

const userTypeOptions = () => (
	<>
		<option value={UserType.IDEAS}>I would like an idea validated</option>
		<option value={UserType.STARTUP}>I would like to join a startup</option>
		<option value={UserType.BRAINSTORM}>
			I would like to brainstorm other ideas
		</option>
		<option disabled />
		<option value={UserType.FOUNDER}>
			I am looking to become a founder
		</option>
		<option value={UserType.INVESTOR}>I am looking to invest</option>
	</>
);

const RegisterForm = (): JSX.Element => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useForm<RegisterFormData>({ mode: 'all' });
	const onRegister = useRegister();

	return (
		<form onSubmit={handleSubmit(onRegister)} noValidate>
			<Stack spacing={6}>
				<SelectField
					id="type"
					name="type"
					label="What are you here for?"
					error={errors['type']}
					errorText="Please select what you are here for."
					helperText="You will not be able to change this later."
					options={userTypeOptions()}
					control={control}
					isRequired
					full
				/>
				<Stack spacing={6} direction={{ base: 'column', md: 'row' }}>
					<InputField
						name="firstName"
						error={errors.firstName}
						errorText="You must input a first name"
						label="First name"
						placeholder="First name"
						control={control}
						rules={{ maxLength: 20, minLength: 2 }}
						isRequired
					/>
					<InputField
						name="lastName"
						label="Last name"
						placeholder="Last name"
						control={control}
						rules={{ maxLength: 20 }}
					/>
				</Stack>
				{/* <SelectField
					id="country"
					name="country"
					label="Country"
					options={countriesList()}
					placeholder={'country'}
					error={errors['country']}
					errorText="Please select your country."
					control={control}
					isRequired
					full
				/> */}
				<Stack spacing={6}>
					<EmailField
						name="email"
						error={errors.email}
						errorLabel="Please enter a valid email address."
						control={control}
						rules={{ pattern: EMAIL_REGEX }}
						isRequired
					/>
					<PasswordField
						name="password"
						error={errors.password}
						rules={{ maxLength: 20, minLength: 6 }}
						control={control}
						isRequired
					/>
					<SubmitButton
						label="Create account"
						isLoading={isSubmitting}
						disabled={!isValid || isSubmitting}
						alignSelf={'center'}
					/>
					<LegalFooter />
				</Stack>
			</Stack>
		</form>
	);
};

const LegalFooter = memo(
	(): JSX.Element => (
		<VStack spacing={6} justifyContent={'center'} w="full" mx={'auto'}>
			<Text as={'div'} color={'gray.500'} fontSize={'xs'}>
				By continuing, you agree to founderpad&apos;s{' '}
				<PrimaryLink
					href="https://www.founderpad.com/legal/terms"
					title={'Link to Terms of Service'}
					isExternal
				>
					Terms of Service
				</PrimaryLink>{' '}
				and acknowledge that you&apos;ve read our{' '}
				<PrimaryLink
					href="https://www.founderpad.com/legal/privacy-policy"
					title={'Link to Privacy Policy'}
					isExternal
				>
					Privacy Policy
				</PrimaryLink>{' '}
			</Text>
			<Text as={'div'} color={'gray.500'} fontSize={'xs'}>
				Already have an account?{' '}
				<PrimaryLink href="/login" title={'Link to login'}>Login here</PrimaryLink>
			</Text>
		</VStack>
	)
);

export default RegisterForm;
