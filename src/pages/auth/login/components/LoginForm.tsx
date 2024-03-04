import { AlertFeedback } from '@/components/alert';
import { SubmitButton } from '@/components/buttons';
import { BaseForm } from '@/components/form';
import { FormInput } from '@/components/form/inputs/FormField';
import React from 'react';
import { TLoginFields } from '../../../../types/auth';
import LoginFooter from './LoginFooter';
import { schema } from '@/validation/auth/login/validationSchema';
import { useNotification } from '@/hooks/util';
import { SocialLogins } from '@/components/shared';
import { useLogin } from '../hooks/login';

const defaultValues: Record<string, string> & TLoginFields = {
	email: '',
	password: ''
};

const LoginForm = () => {
	const { onLogin } = useLogin();
	const { notification } = useNotification();

	return (
		<>
			<BaseForm<TLoginFields, typeof schema>
				name="login-form"
				onSubmit={onLogin}
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
						<FormInput<TLoginFields>
							id="email"
							name="email"
							placeholder="Email"
							register={register}
							control={control}
							fieldProps={{
								placeholder: 'Email'
							}}
							errors={errors}
							hideClear
						/>

						<FormInput<TLoginFields>
							id="password"
							name="password"
							placeholder="Password"
							register={register}
							control={control}
							fieldProps={{
								placeholder: 'Password',
								type: 'password'
							}}
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
							id="submit-login"
							name="submit-login"
							label="Log in"
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
			<LoginFooter />
		</>
	);
};

export default LoginForm;
