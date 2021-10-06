import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import { forwardRef, Select } from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from 'components/form';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ISelectFieldProps } from 'types/fields';

const SelectField = forwardRef<ISelectFieldProps, 'select'>((props, ref) => {
	const {
		id,
		isRequired,
		label,
		error,
		errorText,
		options,
		control,
		helperText,
		name,
		full,
		placeholder,
		size
	} = props;

	return (
		<FormControl
			id={id}
			isInvalid={!!error}
			isRequired={isRequired}
			maxW={{ base: 'full', md: full ? 'full' : 'sm' }}
			ref={ref}
		>
			<FormLabelText label={label} />
			<Controller
				render={({
					field: { onChange, value },
					fieldState: { error }
				}) => (
					<Select
						placeholder={`Select ${placeholder ?? 'option'}`}
						rounded={'md'}
						value={value}
						_focus={{
							borderWidth: 1,
							borderColor: 'fpGrey.500'
						}}
						onChange={onChange}
						size={size ?? 'sm'}
						error={!!error}
						id={`select-${name}-field`}
						name={`select-${name}-field`}
						aria-label={`select-${name}-field`}
					>
						{options}
					</Select>
				)}
				name={name}
				control={control}
				rules={{ required: !!errorText }}
			/>
			{error ? (
				<FormErrorText label={errorText} />
			) : (
				helperText && <FormHelperText label={helperText} />
			)}
		</FormControl>
	);
});

export { SelectField };
