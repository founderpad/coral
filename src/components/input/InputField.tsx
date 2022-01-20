import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
	FormHelperText,
	forwardRef,
	InputGroup,
	InputLeftAddon
} from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from '@components/form';
import { EMAIL_REGEX } from '@utils/validators';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IInputFieldProps } from 'src/types/fields';

export const InputField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref): JSX.Element => {
		const { errorText, helperText, error, ...rest } = props;
		const {
			placeholder,
			control,
			isRequired,
			rules,
			label,
			name,
			size,
			fontSize
		} = rest;

		return (
			<FormControl
				id={name}
				isInvalid={!!error}
				isRequired={isRequired}
				w={{ base: 'full' }}
			>
				{label && <FormLabelText label={label} />}
				<Controller
					defaultValue={''}
					render={({
						field: { onChange, value },
						fieldState: { error }
					}) => (
						<Input
							{...rest}
							placeholder={placeholder}
							size={size ?? 'sm'}
							ref={ref}
							value={value}
							onChange={onChange}
							error={error?.message}
							name={name}
							aria-label={name}
							fontSize={fontSize ?? 'small'}
							color={'gray.500'}
						/>
					)}
					name={name}
					control={control}
					rules={{ required: !!errorText, ...rules }}
				/>
				{error ? (
					<FormErrorText label={errorText} />
				) : (
					helperText && (
						<FormHelperText fontSize={'xs'}>
							{helperText}
						</FormHelperText>
					)
				)}
			</FormControl>
		);
	}
);

// const InputFieldLabel = ({ label }: { label: string }): JSX.Element => (
// 	<FormLabel as="label" fontSize={'sm'} mb={'1px'} color={'black'}>
// 		{label}
// 	</FormLabel>
// );

// const InputFieldWithLabel = forwardRef<IInputFieldProps<any>, 'input'>(
// 	(props, _ref): JSX.Element => (
// 		<InputFieldLabel {...props}>
// 			<InputField {...props} />
// 		</InputFieldLabel>
// 	)
// );

export const InputFieldWithLabelAndIcon = forwardRef<
	IInputFieldProps<any>,
	'input'
>((props, _ref): JSX.Element => {
	const { leftEl, rightEl } = props;
	return (
		// <InputFieldLabel {...props}>
		<InputGroup>
			{leftEl && (
				<InputLeftAddon
					fontSize={'large'}
					borderRadius={0}
					bg={'white'}
				>
					{leftEl}
				</InputLeftAddon>
			)}
			<InputField {...props} />
			{rightEl && (
				<InputLeftAddon bg={'transparent'}>{rightEl}</InputLeftAddon>
			)}
		</InputGroup>
		// </InputFieldLabel>
	);
});

export const EmailField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref): JSX.Element => (
		<InputField
			{...props}
			id={`${props.name}-email`}
			placeholder="Email"
			type="email"
			errorText="Please enter a valid email"
			rules={{ pattern: EMAIL_REGEX }}
			ref={ref}
			label={props.showLabel ? 'Email' : undefined}
		/>
	)
);

export const PasswordField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref): JSX.Element => (
		<InputField
			{...props}
			id={`${props.name}-password`}
			placeholder="Password"
			type="password"
			errorText="Please enter a valid password between 6 and 20 characters"
			rules={{ maxLength: 20, minLength: 6 }}
			fontSize={'sm'}
			ref={ref}
		/>
	)
);

export default InputField;
