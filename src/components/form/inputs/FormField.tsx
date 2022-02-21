import {
	Button,
	FormControl,
	Input,
	InputProps,
	Text,
	Textarea
} from '@chakra-ui/react';
import { FlexLayout } from '@components/layouts';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import {
	Control,
	Controller,
	DeepMap,
	FieldError,
	Path,
	RegisterOptions,
	UseFormRegister,
	useWatch
} from 'react-hook-form';
import { Props as SelectProps } from 'react-select';
import Select from 'react-select';
import FormLabelText from '../FormLabelText';
import ResizeTextarea from 'react-textarea-autosize';

export type TFormFieldProps<TFormValues> = {
	name: Path<TFormValues>;
	onClear: (name: string) => void;
	control: Control<TFormValues, object>;
	rules?: RegisterOptions;
	register?: UseFormRegister<TFormValues>;
	errors?: Partial<DeepMap<TFormValues, FieldError>>;
	label?: string;
} & Omit<InputProps, 'name'>;

export type TFormSelectFieldProps<TFormValues> =
	TFormFieldProps<TFormValues> & {
		options?: any;
		selectProps?: SelectProps;
	};

export type TFormTextareaFieldProps<TFormValues> = TFormFieldProps<TFormValues>;

export const FormField = <TFormValues extends Record<string, unknown>>({
	name,
	control,
	errors,
	label,
	children,
	onClear
}: TFormFieldProps<TFormValues>) => {
	const watchValue = useWatch({
		control,
		name
	});

	return (
		<FlexLayout
			id="form-input"
			aria-live="polite"
			width="full"
			flexDirection={'column'}
		>
			<FlexLayout justifyContent="space-between" flex={1}>
				{label && <FormLabelText label={label} />}

				{watchValue && (
					<Button
						id="clear-value-button"
						name="clear-value-button"
						aria-label="clear-value-button"
						fontSize="x-small"
						colorScheme="fpPrimary"
						variant="link"
						mb={1}
						ml="auto"
						onClick={() => onClear(name)}
					>
						Clear
					</Button>
				)}
			</FlexLayout>

			{children}

			{errors && (
				<ErrorMessage
					errors={errors}
					name={name as any}
					render={({ message }) => (
						<Text
							mt={2}
							color="red.500"
							fontSize="xs"
							textAlign="start"
						>
							{message}
						</Text>
					)}
				/>
			)}
		</FlexLayout>
	);
};

export const FormInput = <TFormValues extends Record<string, unknown>>({
	name,
	register,
	rules,
	onClear,
	...rest
}: TFormFieldProps<TFormValues>) => {
	const errorMessages = rest.errors?.[name];
	const hasError = !!(rest.errors && errorMessages);
	return (
		<FormField name={name} onClear={onClear} {...rest}>
			<Input
				id={name}
				name={name}
				rounded="md"
				size="md"
				fontSize="smaller"
				variant="outline"
				aria-label={name}
				aria-invalid={hasError}
				borderColor={hasError ? 'red.500' : 'inherit'}
				_focus={{
					borderColor: hasError ? 'red.500' : 'inherit'
				}}
				_hover={{
					borderColor: hasError ? 'red.500' : 'inherit'
				}}
				{...rest}
				{...(register && register(name, rules))}
			/>
		</FormField>
	);
};

export const FormTextarea = <TFormValues extends Record<string, unknown>>({
	name,
	register,
	rules,
	control,
	placeholder,
	...rest
}: TFormTextareaFieldProps<TFormValues>) => {
	const errorMessages = rest.errors?.[name];
	const hasError = !!(rest.errors && errorMessages);
	return (
		<FormControl isRequired={!!rules?.required}>
			<FormField
				name={name}
				isInvalid={!!rest.errors}
				isRequired={!!rules?.required}
				control={control}
				{...rest}
			>
				<Controller
					defaultValue={undefined}
					name={name}
					control={control}
					rules={rules}
					render={({ field: { onChange, value } }) => (
						<Textarea
							placeholder={placeholder}
							as={ResizeTextarea}
							value={value as string}
							onChange={onChange}
							rounded="md"
							size="md"
							fontSize="smaller"
							variant="outline"
							maxH={'100px'}
							aria-label={name}
							aria-invalid={hasError}
							borderColor={hasError ? 'red.500' : 'inherit'}
							_focus={{
								borderColor: hasError ? 'red.500' : 'inherit'
							}}
							_hover={{
								borderColor: hasError ? 'red.500' : 'inherit'
							}}
							{...(register && register(name, rules))}
						/>
					)}
				/>
			</FormField>
		</FormControl>
	);
};

export const FormSelect = <TFormValues extends Record<string, unknown>>({
	name,
	register,
	rules,
	onClear,
	placeholder,
	options,
	control,
	selectProps,
	...rest
}: TFormSelectFieldProps<TFormValues>) => {
	const errorMessages = rest.errors?.[name];
	const hasError = !!(rest.errors && errorMessages);
	return (
		<FormControl isInvalid={!!rest.errors} isRequired={!!rules?.required}>
			<FormField
				name={name}
				onClear={onClear}
				control={control}
				{...rest}
			>
				<Controller
					defaultValue={undefined}
					name={name}
					control={control}
					rules={rules}
					render={({ field: { onChange, value } }) => (
						<Select
							id={name}
							name={name}
							aria-label={name}
							aria-invalid={hasError}
							menuPortalTarget={document.body}
							menuPlacement={selectProps?.menuPlacement}
							options={options}
							placeholder={`Select ${placeholder ?? 'option'}`}
							onChange={(e) => onChange(e.value)}
							value={
								options.find(
									(opt: any) => opt.value === value
								) || null
							}
							styles={{
								menuPortal: (provided) => ({
									...provided,
									zIndex: 9999
								}),
								option: (provided, state) => ({
									...provided,
									fontSize: '12px',
									cursor: 'pointer',
									':hover': {
										background: '#F8F8F9'
									},
									background: state.isSelected
										? '#F8F8F9'
										: 'transparent',
									color: state.isSelected
										? '#1078A9'
										: '#718096'
								}),
								control: (provided) => ({
									...provided,
									fontSize: '12px',
									cursor: 'pointer',
									color: '#718096',
									borderColor: hasError
										? '#E53E3E'
										: '#E2E8F0',
									boxShadow: 'none',
									borderRadius: '0.375rem',
									':focus-within': {
										borderColor: hasError
											? '#E53E3E'
											: '#E2E8F0'
									},
									':hover': {
										borderColor: hasError
											? '#E53E3E'
											: '#E2E8F0'
									}
								}),
								singleValue: (provided) => ({
									...provided,
									color: '#425068'
								}),
								placeholder: (provided) => ({
									...provided,
									fontSize: '12px'
								}),
								indicatorSeparator: () => ({
									width: 0
								}),
								container: (provided) => ({
									...provided,
									borderRadius: '0.375rem'
								}),
								valueContainer: (provided) => ({
									...provided,
									color: '#718096'
								}),
								noOptionsMessage: (provided) => ({
									...provided,
									fontSize: '12px'
								}),
								menuList: (provided) => ({
									...provided,
									'::-webkit-scrollbar': {
										width: '4px',
										height: '0px'
									},
									'::-webkit-scrollbar-track': {
										background: 'inherit'
									},
									'::-webkit-scrollbar-thumb': {
										background: '#E2E8F0'
									}
								}),
								dropdownIndicator: (provided, state) => ({
									...provided,
									svg: {
										width: '14px',
										height: '14px',
										transform: state.isFocused
											? 'rotate(-180deg)'
											: 'rotate(0deg)',
										transition: 'transform .1s linear'
									}
								})
							}}
						/>
					)}
				/>
			</FormField>
		</FormControl>
	);
};
