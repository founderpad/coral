import { Button, Input, InputProps, Text } from '@chakra-ui/react';
import { FlexLayout } from '@components/layouts';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import {
	Control,
	DeepMap,
	FieldError,
	Path,
	RegisterOptions,
	UseFormRegister,
	useWatch
} from 'react-hook-form';
import FormLabelText from '../FormLabelText';

export type TFormInputProps<TFormValues> = {
	name: Path<TFormValues>;
	onClear: (name: string) => void;
	control: Control<TFormValues, object>;
	rules?: RegisterOptions;
	register?: UseFormRegister<TFormValues>;
	errors?: Partial<DeepMap<TFormValues, FieldError>>;
	label?: string;
} & Omit<InputProps, 'name'>;

export const FormField = <TFormValues extends Record<string, unknown>>({
	name,
	control,
	errors,
	label,
	children,
	onClear
}: TFormInputProps<TFormValues>) => {
	const watchValue = useWatch({
		control,
		name
	});

	return (
		<FlexLayout id="form-input" aria-live="polite" width="full">
			<FlexLayout justifyContent="space-between" flex={1}>
				{label && <FormLabelText label={label} />}

				{watchValue && (
					<Button
						fontSize={'x-small'}
						colorScheme={'fpPrimary'}
						variant={'link'}
						mb={1}
						ml="auto"
						onClick={() => onClear(name)}
					>
						Clear
					</Button>
				)}
			</FlexLayout>
			{/* <Input
				id={name}
				name={name}
				rounded="md"
				size="md"
				aria-invalid={hasError}
				borderColor={hasError ? 'red.500' : 'inherit'}
				fontSize="sm"
				variant="outline"
				{...props}
				{...(register && register(name, rules))}
			/> */}
			{children}
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
		</FlexLayout>
	);
};

export const FormInput = <TFormValues extends Record<string, unknown>>({
	name,
	register,
	rules,
	...rest
}: TFormInputProps<TFormValues>) => {
	return (
		<FormField name={name} {...rest}>
			<Input
				id={name}
				name={name}
				rounded="md"
				size="md"
				fontSize="sm"
				variant="outline"
				{...rest}
				{...(register && register(name, rules))}
			/>
		</FormField>
	);
};
