import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { FormInput } from '@components/form/inputs/FormField';
// import SocialLogins from '@components/shared/SocialLogins';
import { useRegister } from '@hooks/auth';
import { emailPattern } from '@utils/validators';
import React from 'react';
import { useForm } from 'react-hook-form';
import LegalFooter from './LegalFooter';

type IRegisterFormData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

const RegisterForm = () => {
	const {
		handleSubmit,
		control,
		register,
		resetField,
		formState: { errors, isSubmitting }
	} = useForm<IRegisterFormData>({ mode: 'all' });
	const onRegister = useRegister();

	return (
		<React.Fragment>
			<Form
				id="register-form"
				name="register-form"
				onSubmit={handleSubmit(onRegister)}
				stackProps={{
					alignItems: 'center'
				}}
			>
				<FormInput<IRegisterFormData>
					id="firstName"
					name="firstName"
					placeholder="First name"
					register={register}
					control={control}
					rules={{
						required: 'You must enter a first name',
						minLength: {
							value: 2,
							message:
								'You first name must be a minimum of 2 characters'
						},
						maxLength: {
							value: 20,
							message:
								'You first name must be a maximum of 20 characters'
						}
					}}
					errors={errors}
					onClear={() => resetField('firstName')}
				/>

				<FormInput<IRegisterFormData>
					id="lastName"
					name="lastName"
					placeholder="Last name"
					register={register}
					control={control}
					rules={{
						maxLength: {
							value: 20,
							message:
								'Your last name must be a maximum of 20 characters'
						}
					}}
					errors={errors}
					onClear={() => resetField('lastName')}
				/>
				<FormInput<IRegisterFormData>
					id="email"
					name="email"
					placeholder="Email"
					register={register}
					control={control}
					rules={{
						required: 'You must enter a valid email address',
						pattern: emailPattern
					}}
					errors={errors}
					onClear={() => resetField('email')}
				/>

				<FormInput<IRegisterFormData>
					id="password"
					name="password"
					placeholder="Password"
					register={register}
					control={control}
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
					errors={errors}
					onClear={() => resetField('password')}
				/>
				<SubmitButton
					id={'submit-register-account'}
					name={'submit-register-account'}
					label={'Create account'}
					isLoading={isSubmitting}
					disabled={isSubmitting}
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
