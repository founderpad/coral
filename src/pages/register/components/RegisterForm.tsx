import { SubmitButton } from 'components/buttons';
import { Form } from 'components/form';
import {
	EmailField,
	InputField,
	PasswordField
} from 'components/input/InputField';
import { useRegister } from 'hooks/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IRegisterFormData } from 'types/auth';
import LegalFooter from './LegalFooter';

// const userTypeOptions = () => (
// 	<>
// 		<option value={UserType.IDEAS}>Feedback on new idea</option>
// 		<option value={UserType.STARTUP}>Join a startup</option>
// 		<option value={UserType.BRAINSTORM}>Brainstorm other ideas</option>
// 		{/* <option disabled /> */}
// 		<option value={UserType.FOUNDER}>Become a founder</option>
// 		{/* <option value={UserType.INVESTOR}>I am looking to invest</option> */}
// 	</>
// );

const RegisterForm = (): JSX.Element => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useForm<IRegisterFormData>();
	const onRegister = useRegister();

	return (
		<Form
			id={'register-form'}
			name={'register-form'}
			onSubmit={handleSubmit(onRegister)}
		>
			<InputField
				name="firstName"
				error={errors.firstName}
				errorText="You must input a first name"
				placeholder="First name"
				fontSize={'sm'}
				control={control}
				rules={{ maxLength: 20, minLength: 2 }}
				size={'md'}
				isRequired
			/>
			<InputField
				name="lastName"
				// error={errors.lastName}
				// errorText="Your last name must not be more than 20 characters."
				placeholder="Last name"
				control={control}
				rules={{ minLength: 0, maxLength: 20 }}
				size={'md'}
				fontSize={'sm'}
			/>
			<EmailField
				id="email"
				name="email"
				error={errors['email']}
				errorText="Please enter a valid email"
				control={control}
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
			<SubmitButton
				id={'submit-register-account'}
				name={'submit-register-account'}
				label={'Create account'}
				isLoading={isSubmitting}
				disabled={!isValid || isSubmitting}
				size={'md'}
				fontSize={'sm'}
				full
			/>
			<LegalFooter />
		</Form>
	);
};

export default RegisterForm;
