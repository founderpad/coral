import SubmitButton from 'components/buttons/SubmitButton';
import { useBaseForm } from 'components/form/hooks';
import {
	EmailField,
	InputField,
	PasswordField
} from 'components/input/InputFields';
import { SelectField } from 'components/input/SelectFields';
import StackLayout from 'components/layouts/StackLayout';
import { useRegister } from 'hooks/auth';
import React from 'react';
import { IRegisterFormData } from 'types/auth';
import { UserType } from 'utils/Constants';
import LegalFooter from './LegalFooter';

const userTypeOptions = () => (
	<>
		<option value={UserType.IDEAS}>I would like an idea validated</option>
		<option value={UserType.STARTUP}>I would like to join a startup</option>
		<option value={UserType.BRAINSTORM}>
			I would like to brainstorm other ideas
		</option>
		<option disabled />
		<option value={UserType.FOUNDER}>
			I am looking to become a founder
		</option>
		<option value={UserType.INVESTOR}>I am looking to invest</option>
	</>
);

const RegisterForm = (): JSX.Element => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useBaseForm<IRegisterFormData>();
	const onRegister = useRegister();

	return (
		<form onSubmit={handleSubmit(onRegister)} noValidate>
			<StackLayout>
				<SelectField
					name="type"
					label={'What are you looking for?'}
					error={errors['type']}
					errorText={'Please select what you are here for.'}
					helperText={'You will not be able to change this later.'}
					options={userTypeOptions()}
					control={control}
					size={'md'}
					isRequired
					full
				/>
				<StackLayout direction={{ base: 'column', md: 'row' }}>
					<InputField
						name="firstName"
						error={errors.firstName}
						errorText="You must input a first name"
						label="First name"
						placeholder="First name"
						control={control}
						rules={{ maxLength: 20, minLength: 2 }}
						isRequired
					/>
					<InputField
						name="lastName"
						label="Last name"
						placeholder="Last name"
						control={control}
						rules={{ maxLength: 20 }}
					/>
				</StackLayout>
				<StackLayout>
					<EmailField
						id="email"
						name="email"
						error={errors['email']}
						errorText="Please enter a valid email"
						control={control}
						isRequired
					/>
					<PasswordField
						id="password"
						name="password"
						error={errors['password']}
						rules={{ maxLength: 20, minLength: 6 }}
						control={control}
						isRequired
					/>
					<SubmitButton
						id={'submit-register-account'}
						name={'submit-register-account'}
						label={'Create account'}
						isLoading={isSubmitting}
						disabled={!isValid || isSubmitting}
						size={'md'}
						full
					/>
					<LegalFooter />
				</StackLayout>
			</StackLayout>
		</form>
	);
};

export default RegisterForm;
