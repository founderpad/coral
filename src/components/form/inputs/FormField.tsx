import {
	Button,
	FormControl,
	Input,
	InputProps,
	Textarea,
	FormHelperText,
	Select as ChakraSelect
} from '@chakra-ui/react';
import { FlexLayout } from '@components/layouts';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import {
	Control,
	DeepMap,
	FieldError,
	Path,
	RegisterOptions,
	useController,
	UseFormRegister,
	useWatch
} from 'react-hook-form';
import { Props as SelectProps } from 'react-select';
import Select from 'react-select';
import FormLabelText from '../FormLabelText';
import ResizeTextarea from 'react-textarea-autosize';
import { useMobile } from '@hooks/util';
import { TOption } from '@utils/Constants';

export type TFormFieldProps<TFormValues> = {
	name: Path<TFormValues>;
	control: Control<TFormValues>;
	rules?: RegisterOptions;
	register?: UseFormRegister<TFormValues>;
	errors?: Partial<DeepMap<TFormValues, FieldError>>;
	onClear: (name: keyof TFormValues) => void;
	label?: string;
	helperText?: string;
	hideLimit?: boolean;
	fieldProps?: Omit<InputProps, 'name'>;
} & Omit<InputProps, 'name'>;

export type TFormSelectFieldProps<TFormValues> =
	TFormFieldProps<TFormValues> & {
		options?: Array<TOption>;
		selectProps?: SelectProps;
	};

export type TFormTextareaFieldProps<TFormValues> = TFormFieldProps<TFormValues>;

const FormFieldLimit = ({ max, value }: { max: number; value: string }) => {
	return (
		<FormHelperText
			fontSize="x-small"
			color={value?.length > max ? 'red.500' : 'fpGrey.300'}
			ml="auto"
		>
			{max - (value?.length ?? 0)} / {max}
		</FormHelperText>
	);
};

export const FormField = <TFormValues extends Record<string, unknown>>({
	name,
	control,
	errors = undefined,
	children,
	label,
	helperText,
	onClear,
	hideLimit,
	value,
	rules
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
			flexDirection="column"
		>
			<FlexLayout justifyContent="space-between" flex={1}>
				{label && <FormLabelText label={label} />}

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
					visibility={watchValue ? 'visible' : 'hidden'}
				>
					Clear
				</Button>
			</FlexLayout>

			{children}

			<FlexLayout justifyContent="space-between" alignItems="center">
				{errors && Object.keys(errors).length ? (
					<ErrorMessage
						errors={errors}
						name={name as any}
						render={({ message }) => (
							<FormHelperText
								color="red.500"
								fontSize="x-small"
								textAlign="start"
							>
								{message}
							</FormHelperText>
						)}
					/>
				) : (
					helperText && (
						<FormHelperText fontSize="x-small" color="fpGrey.300">
							{helperText}
						</FormHelperText>
					)
				)}

				{rules?.maxLength && !hideLimit && (
					<FormFieldLimit
						max={(rules?.maxLength as any).value}
						value={value as string}
					/>
				)}
			</FlexLayout>
		</FlexLayout>
	);
};

export const FormInput = <TFormValues extends Record<string, unknown>>({
	name,
	register,
	rules,
	control,
	fieldProps,
	...rest
}: TFormFieldProps<TFormValues>) => {
	const errorMessages = rest.errors?.[name];
	const hasError = !!(rest.errors && errorMessages);

	const {
		field: { onChange, value }
	} = useController({
		name,
		rules,
		control
	});

	return (
		<FormControl isRequired={!!rules?.required}>
			<FormField
				name={name}
				isInvalid={!!rest.errors}
				isRequired={!!rules?.required}
				control={control}
				rules={rules}
				value={value as string}
				{...rest}
			>
				<Input
					onChange={onChange}
					value={value as string}
					rounded="md"
					size="md"
					fontSize="xs"
					aria-label={name}
					aria-invalid={hasError}
					borderColor={hasError ? 'red.500' : 'inherit'}
					_focus={{
						borderColor: hasError ? 'red.500' : 'inherit',
						background: 'transparent'
					}}
					_hover={{
						borderColor: hasError ? 'red.500' : 'inherit'
					}}
					{...fieldProps}
				/>
			</FormField>
		</FormControl>
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

	const {
		field: { onChange, value }
	} = useController({
		name,
		rules,
		control
	});

	return (
		<FormControl isRequired={!!rules?.required}>
			<FormField
				name={name}
				isInvalid={!!rest.errors}
				isRequired={!!rules?.required}
				control={control}
				rules={rules}
				value={value as string}
				{...rest}
			>
				<Textarea
					name={name}
					onChange={onChange}
					value={value as any}
					placeholder={placeholder}
					as={ResizeTextarea}
					rounded="md"
					size="md"
					fontSize="smaller"
					variant="outline"
					maxH="75px"
					p="8px"
					aria-label={name}
					aria-invalid={hasError}
					borderColor={hasError ? 'red.500' : 'inherit'}
					_focus={{
						borderColor: hasError ? 'red.500' : 'inherit'
					}}
					_hover={{
						borderColor: hasError ? 'red.500' : 'inherit'
					}}
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
	options = [],
	control,
	selectProps,
	...rest
}: TFormSelectFieldProps<TFormValues>) => {
	const isMobile = useMobile();
	const { errors = {} } = rest;
	const errorMessages = rest.errors?.[name];
	const hasError = !!(rest.errors && errorMessages);

	const {
		field: { onChange, value, ...field }
	} = useController({
		name,
		rules,
		control
	});

	return (
		<FormControl isInvalid={errors[name]} isRequired={!!rules?.required}>
			<FormField
				name={name}
				onClear={onClear}
				control={control}
				{...rest}
			>
				{!isMobile ? (
					<Select
						{...field}
						id={name}
						name={name}
						aria-label={name}
						aria-invalid={hasError}
						menuPortalTarget={document.body}
						menuPlacement={selectProps?.menuPlacement}
						options={options}
						placeholder={`Select ${placeholder ?? 'option'}`}
						onChange={(e) => onChange(e?.value)}
						value={
							options.find((opt: any) => opt.value === value) ||
							null
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
								color: state.isSelected ? '#1078A9' : '#718096'
							}),
							control: (provided) => ({
								...provided,
								fontSize: '12px',
								cursor: 'pointer',
								color: '#718096',
								borderColor: hasError ? '#E53E3E' : '#E2E8F0',
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
								color: '#718096',
								padding: '4px 8px'
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
				) : (
					<ChakraSelect
						fontSize="xs"
						rounded="md"
						onChange={onChange}
						value={value}
						placeholder={`Select ${placeholder ?? 'option'}`}
					>
						{options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.value}
							</option>
						))}
					</ChakraSelect>
				)}
			</FormField>
		</FormControl>
	);
};
