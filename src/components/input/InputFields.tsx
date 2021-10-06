import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
	FormHelperText,
	forwardRef,
	Icon,
	InputGroup,
	InputLeftAddon
} from '@chakra-ui/react';
import { FormErrorText } from 'components/form';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IInputFieldProps } from 'types/fields';
import { EMAIL_REGEX } from 'utils/validators';

const InputField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref): JSX.Element => {
		const {
			errorText,
			placeholder,
			control,
			error,
			helperText,
			isRequired,
			rules,
			label,
			name
		} = props;

		return (
			<FormControl
				id={name}
				isInvalid={!!error}
				isRequired={isRequired}
				w={{ base: 'full' }}
				_focus={{
					borderWidth: 1,
					borderColor: 'fpGrey.500'
				}}
			>
				{label && <InputFieldLabel label={label} />}
				<Controller
					render={({
						field: { onChange, value },
						fieldState: { error }
					}) => (
						<Input
							{...props}
							placeholder={placeholder}
							rounded={'md'}
							size={'md'}
							_focus={{
								borderWidth: 1,
								borderColor: 'fpGrey.500'
							}}
							_
							ref={ref}
							value={value}
							onChange={onChange}
							error={!!error}
							name={name}
							aria-label={name}
						/>
					)}
					name={name}
					control={control}
					rules={{ required: !!errorText, ...rules }}
				/>
				{error ? (
					<FormErrorText label={errorText} />
				) : (
					helperText && <FormHelperText label={helperText} />
				)}
			</FormControl>
		);
	}
);

const InputFieldLabel = ({ label }: { label: string }): JSX.Element => (
	<FormLabel as="label" fontSize={'sm'} color={'fpGrey.900'} mb={'1px'}>
		{label}
	</FormLabel>
);

// const InputFieldWithLabel = forwardRef<IInputFieldProps<any>, 'input'>(
// 	(props, _ref): JSX.Element => (
// 		<InputFieldLabel {...props}>
// 			<InputField {...props} />
// 		</InputFieldLabel>
// 	)
// );

const InputFieldWithLabelAndIcon = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, _ref): JSX.Element => {
		const { leftIcon, rightIcon } = props;
		return (
			// <InputFieldLabel {...props}>
			<InputGroup>
				{leftIcon && (
					<InputLeftAddon
						fontSize={'large'}
						borderRadius={0}
						bg={'white'}
					>
						{typeof leftIcon === 'string' ? (
							leftIcon
						) : (
							<Icon as={leftIcon} />
						)}
					</InputLeftAddon>
				)}
				<InputField {...props} />
				{rightIcon && <InputLeftAddon>{rightIcon}</InputLeftAddon>}
			</InputGroup>
			// </InputFieldLabel>
		);
	}
);

const EmailField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref): JSX.Element => (
		<InputField
			{...props}
			id={`${props.name}-email`}
			placeholder="Email"
			type="email"
			rules={{ pattern: EMAIL_REGEX }}
			ref={ref}
		/>
	)
);

const PasswordField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref): JSX.Element => (
		<InputField
			{...props}
			id={`${props.name}-password`}
			placeholder="Password"
			type="password"
			errorText="Please enter a valid password between 6 and 20 characters."
			rules={{ maxLength: 20, minLength: 6 }}
			ref={ref}
		/>
	)
);

export { InputField, EmailField, PasswordField, InputFieldWithLabelAndIcon };
