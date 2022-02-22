import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel
} from '@chakra-ui/form-control';
import { Checkbox, forwardRef, Select } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ISelectFieldProps, TCheckboxfieldProps } from 'src/types/fields';

const CheckboxGroupField = forwardRef<ISelectFieldProps, 'select'>(
	(props, ref) => {
		const { id, isRequired, label, error, errorText, options, helperText } =
			props;

		return (
			<FormControl id={id} isInvalid={!!error} isRequired={isRequired}>
				<FormLabel as="label" fontSize="sm" color="gray.500">
					{label}
				</FormLabel>
				<Select
					placeholder="Select option"
					rounded="none"
					focusBorderColor="gray.150"
					w={{ base: 'full', sm: 'xs' }}
					variant="outline"
					ref={ref}
				>
					{options}
				</Select>
				{helperText && (
					<FormHelperText>
						You will not be able to change this later.
					</FormHelperText>
				)}
				<FormErrorMessage alignItems="flex-start">
					{error && <span>{errorText}</span>}
				</FormErrorMessage>
			</FormControl>
		);
	}
);

const CheckboxField = forwardRef<TCheckboxfieldProps<any>, 'input'>(
	(props, ref) => {
		const { isRequired, label, name, checked, control } = props;

		return (
			<FormControl id={name} isRequired={isRequired} w={{ base: 'full' }}>
				{/* <FormLabel as="label" fontSize="sm" color="fpGrey.900">
					{label}
				</FormLabel> */}
				<Controller
					render={({
						field: { onChange, value },
						fieldState: { error }
					}) => (
						<Checkbox
							{...props}
							focusBorderColor="gray.150"
							ref={ref}
							value={value}
							onChange={onChange}
							checked={checked}
							fontSize="sm"
							error={!!error}
							colorScheme="fpPrimary"
						>
							<FormLabel
								as="label"
								fontSize="sm"
								color="fpGrey.900"
								mb={0}
							>
								{label}
							</FormLabel>
						</Checkbox>
					)}
					name={name}
					control={control}
				/>
			</FormControl>
		);
	}
);

export { CheckboxGroupField, CheckboxField };
