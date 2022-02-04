import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import {
	EmailField,
	InputField,
	PasswordField
} from '@components/input/InputField';
// import SocialLogins from '@components/shared/SocialLogins';
import { useRegister } from '@hooks/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IRegisterFormData } from 'src/types/auth';
import LegalFooter from './LegalFooter';

const RegisterForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useForm<IRegisterFormData>({ mode: 'all' });
	const onRegister = useRegister();

	return (
		<React.Fragment>
			<Form
				id={'registerForm'}
				name={'registerForm'}
				onSubmit={handleSubmit(onRegister)}
				stackProps={{
					alignItems: 'center'
				}}
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
				{/* <AlertFeedback /> */}
				<SubmitButton
					id={'submit-register-account'}
					name={'submit-register-account'}
					label={'Create account'}
					isLoading={isSubmitting}
					disabled={!isValid || isSubmitting}
					// disabled={isSubmitting}
					size={'md'}
					fontSize={'sm'}
					w={{ base: 'full', sm: '175px' }}
				/>
			</Form>
			{/* <SocialLogins /> */}
			<LegalFooter />
		</React.Fragment>
	);
};

export default RegisterForm;
