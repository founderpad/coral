import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { FormInput } from '@components/form/inputs/FormField';
// import SocialLogins from '@components/shared/SocialLogins';
import { useRegister } from '@hooks/auth';
import { emailPattern } from '@utils/validators';
import React from 'react';
import { useForm } from 'react-hook-form';
import LegalFooter from './LegalFooter';
import { TRegisterFormFields } from '../../../types/auth';

const RegisterForm = () => {
	const {
		handleSubmit,
		control,
		register,
		resetField,
		formState: { errors, isSubmitting }
	} = useForm<TRegisterFormFields>({
		mode: 'all',
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		}
	});
	const onRegister = useRegister();

	return (
		<React.Fragment>
			<Form
				id="register-form"
				name="register-form"
				onSubmit={handleSubmit(onRegister)}
				actions={
					<SubmitButton
						id="submit-register-account"
						name="submit-register-account"
						label="Create account"
						isLoading={isSubmitting}
						disabled={isSubmitting}
						size="md"
						fontSize="small"
						w={{ base: 'full', sm: '150px' }}
					/>
				}
				stackProps={{
					alignItems: 'center',
					spacing: 3
				}}
			>
				<FormInput<TRegisterFormFields>
					id="firstName"
					name="firstName"
					placeholder="First name"
					register={register}
					control={control}
					fieldProps={{
						placeholder: 'First name'
					}}
					rules={{
						required: 'You must enter a first name',
						minLength: {
							value: 2,
							message:
								'You first name must be a minimum of 2 characters'
						},
						maxLength: {
							value: 30,
							message:
								'You first name must be a maximum of 30 characters'
						}
					}}
					hideLimit={true}
					errors={errors}
					onClear={() => resetField('firstName')}
				/>

				<FormInput<TRegisterFormFields>
					id="lastName"
					name="lastName"
					placeholder="Last name"
					register={register}
					control={control}
					fieldProps={{
						placeholder: 'Last name'
					}}
					rules={{
						maxLength: {
							value: 30,
							message:
								'Your last name must be a maximum of 30 characters'
						}
					}}
					hideLimit={true}
					errors={errors}
					onClear={() => resetField('lastName')}
				/>
				<FormInput<TRegisterFormFields>
					id="email"
					name="email"
					placeholder="Email"
					register={register}
					control={control}
					fieldProps={{
						placeholder: 'Email'
					}}
					rules={{
						required: 'You must enter a valid email address',
						pattern: emailPattern
					}}
					hideLimit={true}
					errors={errors}
					onClear={() => resetField('email')}
				/>

				<FormInput<TRegisterFormFields>
					id="password"
					name="password"
					placeholder="Password"
					register={register}
					control={control}
					fieldProps={{
						placeholder: 'Password',
						type: 'password'
					}}
					rules={{
						required: 'You must enter a valid password',
						minLength: {
							value: 6,
							message:
								'Your password must be a minimum of 6 characters'
						},
						maxLength: {
							value: 20,
							message:
								'Your password must be a maximum of 20 characters'
						}
					}}
					hideLimit={true}
					errors={errors}
					onClear={() => resetField('password')}
				/>
			</Form>
			{/* <SocialLogins /> */}
			<LegalFooter />
		</React.Fragment>
	);
};

export default RegisterForm;
