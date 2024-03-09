import { AlertFeedback } from '@/components/alert';
import { SubmitButton } from '@/components/buttons';
import { BaseForm } from '@/components/form';
import { FormInput } from '@/components/form/inputs/FormField';
import React from 'react';
import { schema } from '@/validation/auth/login/validationSchema';
import { useNotification } from '@/hooks/util';
import { useLogin } from './hooks/login';
import { LoginFooter } from './components';

export type TLoginFields = {
	email: string;
	password: string;
};

const defaultValues: TLoginFields = {
	email: '',
	password: ''
};

const LoginContainer = () => {
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
			<LoginFooter />
		</>
	);
};

export default LoginContainer;
