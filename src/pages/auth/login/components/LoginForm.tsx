import { AlertFeedback } from '@/components/alert';
import { SubmitButton } from '@/components/buttons';
import { BaseForm } from '@/components/form';
import { FormInput } from '@/components/form/inputs/FormField';
import SocialLogins from '@/components/shared/SocialLogins';
import { useLogin } from '@/hooks/auth';
import { useQueryParam } from '@/hooks/util';
import React from 'react';
import { TLoginFields } from '../../../../types/auth';
import LoginFooter from './LoginFooter';
import { schema } from '../validationSchema';

const defaultValues: Record<string, string> & TLoginFields = {
	email: '',
	password: ''
};

const LoginForm = () => {
	const { onLogin } = useLogin();
	const isError = useQueryParam('error');
	const isVerifiedEmail = useQueryParam('type') === 'emailVerify';

	return (
		<React.Fragment>
			{isVerifiedEmail && (
				<AlertFeedback message="Email address successfully verified" />
			)}

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
					<React.Fragment>
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

						{isError && (
							<AlertFeedback
								status="error"
								message={
									'Failed to login. Incorrect email and/or password.'
								}
							/>
						)}

						<SubmitButton
							id="submit-login"
							name="submit-login"
							label="Log in"
							isLoading={isSubmitting}
							disabled={isSubmitting}
							size="md"
							fontSize="small"
							w={{ base: 'full', sm: '200px' }}
						/>
					</React.Fragment>
				)}
			</BaseForm>
			<SocialLogins />
			<LoginFooter />
		</React.Fragment>
	);
};

export default LoginForm;
