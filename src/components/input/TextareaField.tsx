import { FormControl } from '@chakra-ui/form-control';
import { FormHelperText, forwardRef, Textarea } from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from 'components/form';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IInputFieldProps } from 'types/fields';

export const TextareaField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref) => {
		const {
			id,
			isRequired,
			label,
			error,
			errorText,
			placeholder,
			helperText,
			name,
			control,
			rules,
			size
		} = props;

		return (
			<FormControl
				id={id}
				isInvalid={!!error}
				isRequired={isRequired}
				ref={ref}
			>
				<FormLabelText label={label} />
				<Controller
					render={({
						field: { onChange, value },
						fieldState: { error }
					}) => (
						<Textarea
							placeholder={placeholder}
							ref={ref}
							value={value}
							onChange={onChange}
							error={!!error}
							size={size}
							minH={'100px'}
							borderWidth={1}
							borderColor={'gray.200'}
							_focus={{
								borderColor: 'gray.400',
								boxShadow: 'none'
							}}
							_hover={{
								borderColor: 'gray.300'
							}}
							rounded={'sm'}
						/>
					)}
					name={name}
					control={control}
					rules={{ required: !!errorText && isRequired, ...rules }}
				/>
				{error && errorText ? (
					<FormErrorText label={errorText} />
				) : (
					helperText && <FormHelperText label={helperText} />
				)}
			</FormControl>
		);
	}
);
