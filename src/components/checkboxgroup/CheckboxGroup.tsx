import { useCheckboxes } from '@/hooks/util';
import {
	FormControl,
	Button,
	Checkbox,
	SimpleGrid,
	FormHelperText,
	Text
} from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { useEffect } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { FormLabelText } from '../form';
import { FlexLayout } from '../layouts';

interface CheckboxGroupProps {
	name: string;
	label?: string;
	options: string[];
	defaultValues?: string[];
	isRequired?: boolean;
}

const CheckboxGroup = ({
	name,
	label,
	options,
	defaultValues = [],
	isRequired = false
}: CheckboxGroupProps) => {
	const {
		control,
		setError,
		clearErrors,
		formState: { errors, isSubmitting },
		setValue,
		register
	} = useFormContext();

	const { field } = useController({
		name,
		control,
		defaultValue: defaultValues
	});

	useEffect(() => {
		register(name, { required: isRequired });
	}, [register, name, isRequired]);

	const {
		values,
		clearValues,
		onToggle,
		onToggleAll,
		isChecked,
		isAllSelected
	} = useCheckboxes(options, defaultValues);

	useEffect(() => {
		if (defaultValues?.length) {
			setValue(name, defaultValues);
		}
	}, [setValue, defaultValues, name]);

	useEffect(() => {
		if (values.length < 1 && isRequired) {
			setError(name, {
				message: `You must select at least one ${name.substring(
					0,
					name.length - 1
				)}.`
			});
		} else {
			clearErrors(name);
		}
	}, [values, isRequired, name, setError, clearErrors, isSubmitting]);

	useEffect(() => {
		setValue(name, values);
	}, [setValue, name, values]);

	return (
		<FormControl isRequired={isRequired} isInvalid={!!errors[name]}>
			<FlexLayout justifyContent="space-between">
				{label && <FormLabelText label={label} />}
				{values.length > 0 && (
					<Button
						fontSize="x-small"
						colorScheme="fpPrimary"
						variant="link"
						mb={1}
						onClick={clearValues}
					>
						Clear
					</Button>
				)}
			</FlexLayout>

			<Checkbox
				onChange={onToggleAll}
				isChecked={isAllSelected}
				w="full"
				pb={2}
				colorScheme="fpPrimary"
				color="fpGrey.900"
			>
				<Text color="fpGrey.900" fontWeight="normal" fontSize="xs">
					All
				</Text>
			</Checkbox>
			<SimpleGrid columns={2} row={6}>
				{options.map((option) => (
					<Checkbox
						key={option}
						name={option}
						rounded="none"
						value={option}
						py={1}
						pr={2}
						onChange={onToggle}
						colorScheme="fpPrimary"
						color="fpGrey.900"
						ref={field.ref}
						size="md"
						fontSize="xs"
						isChecked={isChecked(option)}
					>
						<Text
							color="fpGrey.900"
							fontWeight="normal"
							fontSize="xs"
						>
							{option}
						</Text>
					</Checkbox>
				))}
			</SimpleGrid>
			{errors[name] && (
				<ErrorMessage
					errors={errors}
					name={name as any}
					render={({ message }) => (
						<FormHelperText
							color="red.500"
							fontSize="0.6875rem"
							textAlign="start"
							mb={2}
						>
							{message}
						</FormHelperText>
					)}
				/>
			)}
		</FormControl>
	);
};

export default CheckboxGroup;
