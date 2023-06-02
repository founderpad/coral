import { SubmitButton } from '@/components/buttons';
import BaseForm from '@/components/form/BaseForm';
import { FormInput } from '@/components/form/inputs/FormField';
import { useChangePassword } from '@/hooks/auth';
import schema from '@/validation/auth/changepassword/validationSchema';
import React from 'react';

type TChangePasswordFields = {
	newPassword: string;
};
interface Props {
	showPasswordLabel?: boolean;
	showSubmit?: boolean;
	isSuccess?: boolean;
	isError?: boolean;
}

const defaultValues: TChangePasswordFields = {
	newPassword: ''
};

const ConfirmChangePasswordForm = (props: Props) => {
	const { showPasswordLabel = false, showSubmit = false } = props;
	const onChangePassword = useChangePassword();

	return (
		<BaseForm<TChangePasswordFields, typeof schema>
			name="edit-change-password"
			onSubmit={onChangePassword}
			defaultValues={defaultValues}
			schema={schema}
			stackProps={{
				alignItems: 'center'
			}}
		>
			{({
				register,
				control,
				resetField,
				formState: { errors, isSubmitting }
			}) => (
				<React.Fragment>
					<FormInput<TChangePasswordFields>
						id="newPassword"
						name="newPassword"
						type="password"
						label={showPasswordLabel ? 'New password' : undefined}
						register={register}
						control={control}
						fieldProps={{
							placeholder: 'Password *',
							type: 'password'
						}}
						hideLimit={true}
						errors={errors}
						onClear={resetField}
					/>

					{showSubmit && (
						<SubmitButton
							id="submit-reset-password"
							name="submit-reset-password"
							label="Reset password"
							isLoading={isSubmitting}
							disabled={isSubmitting}
							size="md"
							fontSize="sm"
							w={{ base: 'full', sm: '175px' }}
						/>
					)}
				</React.Fragment>
			)}
		</BaseForm>
	);
};

export default ConfirmChangePasswordForm;
