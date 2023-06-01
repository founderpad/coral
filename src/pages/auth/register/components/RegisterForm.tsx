import { FormInput } from '@/components/form/inputs/FormField';
import { useRegister } from '@/hooks/auth';
import React, { useContext } from 'react';
import LegalFooter from './LegalFooter';
import { TRegisterFormFields } from '../../../../types/auth';
import { BaseForm } from '@/components/form';
import { SubmitButton } from '@/components/buttons';
import { AlertFeedback } from '@/components/alert';
import SocialLogins from '@/components/shared/SocialLogins';
import NotificationContext from '@/context/NotificationContext';
import { schema } from '../validationSchema';

const defaultValues: Record<string, string> & TRegisterFormFields = {
	firstName: '',
	lastName: '',
	email: '',
	password: ''
};

const RegisterForm = () => {
	const { onRegister } = useRegister();
	const { notification } = useContext(NotificationContext);

	return (
		<React.Fragment>
			<BaseForm<TRegisterFormFields, typeof schema>
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
					<React.Fragment>
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
							hideLimit={true}
							hideClear
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
							hideLimit={true}
							errors={errors}
							hideClear
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
							hideLimit={true}
							errors={errors}
							hideClear
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
					</React.Fragment>
				)}
			</BaseForm>
			<SocialLogins />

			{/* <Alert fontSize="xs" status="warning" p={2} textAlign="center">
				Your email address must be the same as your PayPal account in
				order to withdraw funds.
			</Alert> */}
			<LegalFooter />
		</React.Fragment>
	);
};

export default RegisterForm;
