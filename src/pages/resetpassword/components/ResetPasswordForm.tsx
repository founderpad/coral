import { AlertFeedback } from '@components/alert';
import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { EmailField } from '@components/input';
import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import { useResetPassword } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';

const ResetPasswordForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid } // isValid
	} = useForm<{ email: string }>({ mode: 'all' });

	const isResetSuccess = useQueryParam('rp_success');
	const isResetError = useQueryParam('rp_error');

	const onResetPassword = useResetPassword();

	return (
		<React.Fragment>
			<Form
				id={'resetpasswordform'}
				name={'resetpasswordform'}
				onSubmit={handleSubmit(onResetPassword)}
				stackProps={{
					alignItems: 'center'
				}}
			>
				<Label>
					Please enter your email address below and we will send you
					an email with instructions to reset your password.
				</Label>

				<EmailField
					id="email"
					name="email"
					error={errors['email']}
					errorText="Please enter a valid email"
					control={control}
					autoComplete="email"
					size={'md'}
					fontSize={'sm'}
					isRequired
				/>

				{!isResetSuccess && (
					<SubmitButton
						id={'submitresetpassword'}
						name={'submitresetpassword'}
						label="Reset password"
						isLoading={isSubmitting}
						disabled={!isValid || isSubmitting}
						size={'md'}
						fontSize={'sm'}
						w={{ base: 'full', sm: '175px' }}
					/>
				)}

				{isResetSuccess && (
					<AlertFeedback
						status={'success'}
						message={
							'Email sent with instructions to reset your password'
						}
					/>
				)}

				{isResetError && (
					<AlertFeedback
						status={'error'}
						message={
							'Failed to reset password. Please try again later.'
						}
					/>
				)}
			</Form>
			<ResetPasswordFooter />
		</React.Fragment>
	);
};

const ResetPasswordFooter = memo(() => (
	<FlexLayout justifyContent={'space-between'} alignItems={'center'} pt={8}>
		<Label color={'gray.500'} fontSize={'xs'} alignSelf={'center'}>
			No account?
			<PrimaryLink href="/register" title={'Link to register an account'}>
				{' '}
				Register now
			</PrimaryLink>
		</Label>
		<PrimaryLink
			href="/login"
			title={'Link to register an account'}
			fontSize={'xs'}
		>
			{' '}
			Go to login
		</PrimaryLink>
	</FlexLayout>
));

export default ResetPasswordForm;