import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import { forwardRef, Select } from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from '@components/form';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ISelectFieldProps } from 'src/types/fields';

export const SelectField = forwardRef<ISelectFieldProps, 'select'>(
	(props, ref) => {
		const { errorText, helperText, error, ...rest } = props;

		const {
			id,
			isRequired,
			label,
			options,
			control,
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
				{label && <FormLabelText label={label} />}
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
							error={error?.message}
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
					rules={{ required: !!props.errorText }}
				/>
				{error ? (
					<FormErrorText label={props.errorText} />
				) : (
					helperText && (
						<FormHelperText fontSize={'smaller'}>
							{helperText}
						</FormHelperText>
					)
				)}
			</FormControl>
		);
	}
);
