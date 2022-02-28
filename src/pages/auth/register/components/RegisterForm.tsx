import { FormInput } from '@components/form/inputs/FormField';
// import SocialLogins from '@components/shared/SocialLogins';
import { useRegister } from '@hooks/auth';
import { emailPattern } from '@utils/validators';
import React from 'react';
import LegalFooter from './LegalFooter';
import { TRegisterFormFields } from '../../../../types/auth';
import { BaseForm } from '@components/form';
import { SubmitButton } from '@components/buttons';

const RegisterForm = () => {
	const onRegister = useRegister();

	return (
		<React.Fragment>
			<BaseForm<TRegisterFormFields>
				name="register-form"
				onSubmit={onRegister}
				defaultValues={{
					firstName: '',
					lastName: '',
					email: '',
					password: ''
				}}
				stackProps={{
					alignItems: 'center',
					spacing: 3
				}}
			>
				{({
					register,
					control,
					resetField,
					formState: { errors, isSubmitting }
				}) => (
					<>
						<FormInput<TRegisterFormFields>
							id="firstName"
							name="firstName"
							placeholder="First name"
							register={register}
							control={control}
							errors={errors}
							fieldProps={{
								placeholder: 'First name'
							}}
							rules={{
								required: 'You must enter a first name',
								minLength: {
									value: 2,
									message:
										'Your first name must be a minimum of 2 characters'
								},
								maxLength: {
									value: 30,
									message:
										'Your first name must be a maximum of 30 characters'
								}
							}}
							hideLimit={true}
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
								required:
									'You must enter a valid email address',
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
					</>
				)}
			</BaseForm>
			{/* <SocialLogins /> */}
			<LegalFooter />
		</React.Fragment>
	);
};

export default RegisterForm;
