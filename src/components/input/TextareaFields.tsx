import {
	FormControl
} from '@chakra-ui/form-control';
import { FormHelperText, forwardRef, Textarea } from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from 'components/form';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IInputFieldProps } from 'types/fields';

const TextareaField = forwardRef<IInputFieldProps<any>, 'input'>(
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
							rounded={'md'}
							_focus={{
								borderWidth: 1,
								borderColor: 'fpGrey.500'
							}}
							ref={ref}
							value={value}
							onChange={onChange}
							error={!!error}
							size={size}
							minH={'100px'}
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
						<FormHelperText label={helperText} />
					)
				)}
			</FormControl>
		);
	}
);

export { TextareaField };
