import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
	Button,
	FormHelperText,
	forwardRef,
	InputGroup,
	InputLeftAddon
} from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from '@components/form';
import { FlexLayout } from '@components/layouts';
import { EMAIL_REGEX } from '@utils/validators';
import Router from 'next/router';
import React, { useCallback, useState } from 'react';
import { Controller } from 'react-hook-form';
import { IInputFieldProps } from 'src/types/fields';

export const InputField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref) => {
		const {
			errorText,
			helperText,
			error,
			isUrl = false,
			onClear,
			...rest
		} = props;
		const {
			placeholder,
			control,
			isRequired,
			rules,
			label,
			name,
			size,
			fontSize,
			autoComplete
		} = rest;

		const [showClear, setShowClear] = useState(!!control._formValues[name]);

		const onClearValue = useCallback(() => {
			onClear?.();
			setShowClear(false);
			if (isUrl) {
				delete Router.query[name];
				Router.push(
					{
						pathname: Router.pathname,
						query: Router.query
					},
					undefined,
					{
						shallow: true
					}
				);
			}
		}, [isUrl, name, onClear]);

		const onToggleClear = useCallback(
			(value: string) => {
				if (value) setShowClear(true);
				else setShowClear(false);
			},
			[setShowClear]
		);

		return (
			<FormControl
				id={name}
				isInvalid={!!error}
				isRequired={isRequired}
				w={{ base: 'full' }}
				ref={ref}
			>
				{label && (
					<FlexLayout justifyContent={'space-between'}>
						<FormLabelText label={label} />
						{showClear && (
							<Button
								fontSize={'x-small'}
								colorScheme={'fpPrimary'}
								variant={'link'}
								mb={1}
								onClick={onClearValue}
							>
								Clear
							</Button>
						)}
					</FlexLayout>
				)}
				<Controller
					defaultValue={''}
					render={({
						field: { onChange, value },
						fieldState: { error }
					}) => (
						<Input
							{...rest}
							ref={ref}
							placeholder={placeholder}
							autoComplete={autoComplete}
							size={size ?? 'md'}
							value={value}
							onChange={(e) => {
								onChange(e);
								onToggleClear(value);
							}}
							error={error?.message}
							name={name}
							aria-label={name}
							fontSize={fontSize ?? '12px'}
							color={'fpGrey.900'}
							rounded={'md'}
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
						<FormHelperText fontSize={'xs'} color={'fpGrey.400'}>
							{helperText}
						</FormHelperText>
					)
				)}
			</FormControl>
		);
	}
);

// const InputFieldLabel = ({ label }: { label: string }):  => (
// 	<FormLabel as="label" fontSize={'sm'} mb={'1px'} color={'black'}>
// 		{label}
// 	</FormLabel>
// );

// const InputFieldWithLabel = forwardRef<IInputFieldProps<any>, 'input'>(
// 	(props, _ref):  => (
// 		<InputFieldLabel {...props}>
// 			<InputField {...props} />
// 		</InputFieldLabel>
// 	)
// );

export const InputFieldWithLabelAndIcon = forwardRef<
	IInputFieldProps<any>,
	'input'
>((props, ref) => {
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
			<InputField {...props} ref={ref} />
			{rightEl && (
				<InputLeftAddon bg={'transparent'}>{rightEl}</InputLeftAddon>
			)}
		</InputGroup>
		// </InputFieldLabel>
	);
});

export const EmailField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref) => (
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
	({ name, placeholder = 'Password', ...rest }, ref) => (
		<InputField
			{...rest}
			name={name}
			id={`${name}-password`}
			placeholder={placeholder}
			type="password"
			errorText="Please enter a valid password between 6 and 20 characters"
			rules={{ maxLength: 20, minLength: 6 }}
			fontSize={'sm'}
			autoComplete="current-password"
			ref={ref}
		/>
	)
);

export default InputField;
