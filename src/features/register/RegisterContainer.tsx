import { FormInput } from '@/components/form/inputs/FormField';
import React from 'react';
import LegalFooter from './components/LegalFooter';
import { BaseForm } from '@/components/form';
import { SubmitButton } from '@/components/buttons';
import { AlertFeedback } from '@/components/alert';
import schema from '@/validation/auth/register/validationSchema';
import { useNotification } from '@/hooks/util';
import { SocialLogins } from '@/components/shared';
import { useRegister } from './hooks/register';
import { RegisterProps } from './types/register';

const defaultValues: RegisterProps = {
	firstName: '',
	lastName: '',
	email: '',
	password: ''
};

const RegisterContainer = () => {
	const { onRegister } = useRegister();
	const { notification } = useNotification();

	return (
		<>
			<BaseForm<RegisterProps, typeof schema>
				name="register-form"
				onSubmit={onRegister}
				defaultValues={defaultValues}
				schema={schema}
				stackProps={{
					alignItems: 'center',
					spacing: 3
				}}
			>
				{({
					register,
					control,
					formState: { errors, isSubmitting }
				}) => (
					<>
						<FormInput<RegisterProps>
							id="firstName"
							name="firstName"
							placeholder="First name"
							register={register}
							control={control}
							errors={errors}
							fieldProps={{
								placeholder: 'First name'
							}}
							hideLimit={true}
							hideClear
						/>

						<FormInput<RegisterProps>
							id="lastName"
							name="lastName"
							placeholder="Last name"
							register={register}
							control={control}
							fieldProps={{
								placeholder: 'Last name'
							}}
							hideLimit={true}
							errors={errors}
							hideClear
						/>
						<FormInput<RegisterProps>
							id="email"
							name="email"
							placeholder="Email"
							register={register}
							control={control}
							fieldProps={{
								placeholder: 'Email'
							}}
							hideLimit={true}
							errors={errors}
							hideClear
						/>

						<FormInput<RegisterProps>
							id="password"
							name="password"
							placeholder="Password"
							register={register}
							control={control}
							fieldProps={{
								placeholder: 'Password',
								type: 'password'
							}}
							hideLimit={true}
							errors={errors}
							hideClear
						/>

						{notification && (
							<AlertFeedback
								status={notification.status}
								message={notification.message}
							/>
						)}

						<SubmitButton
							id="submit-register-account"
							name="submit-register-account"
							label="Create account"
							isLoading={isSubmitting && !notification}
							disabled={isSubmitting && !notification}
							size="md"
							fontSize="small"
							w={{ base: 'full', sm: '200px' }}
						/>
					</>
				)}
			</BaseForm>
			<SocialLogins />
			<LegalFooter />
		</>
	);
};

export default RegisterContainer;
