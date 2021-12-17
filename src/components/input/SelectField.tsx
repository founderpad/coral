import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import { forwardRef, Select } from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from 'components/form';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ISelectFieldProps } from 'types/fields';

export const SelectField = forwardRef<ISelectFieldProps, 'select'>(
	(props, ref) => {
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
							variant={props.variant}
							placeholder={`Select ${placeholder ?? 'option'}`}
							rounded={'sm'}
							value={value}
							onChange={onChange}
							size={size ?? 'sm'}
							error={!!error}
							id={`select-${name}-field`}
							name={`select-${name}-field`}
							aria-label={`select-${name}-field`}
							fontSize={'small'}
							color={'gray.500'}
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
	}
);
