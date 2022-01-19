import { FormControl } from '@chakra-ui/form-control';
import { forwardRef, Textarea } from '@chakra-ui/react';
import { FormLabelText } from '@components/form';
import React from 'react';
import { Controller } from 'react-hook-form';
import ResizeTextarea from 'react-textarea-autosize';
import { IInputFieldProps } from 'src/types/fields';

export const TextareaField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref) => {
		const {
			id,
			isRequired,
			label,
			error,
			// errorText,
			placeholder,
			// helperText,
			name,
			control,
			// rules,
			size,
			width,
			maxH = '150px',
			borderWidth = 1,
			maxRows = 2,
			resize = 'vertical'
		} = props;

		return (
			<FormControl
				id={id}
				isInvalid={!!error}
				isRequired={isRequired}
				ref={ref}
			>
				{label && <FormLabelText label={label} />}
				<Controller
					render={({
						field: { onChange, value },
						fieldState: { error: _error }
					}) => (
						<Textarea
							placeholder={placeholder}
							ref={ref}
							value={value}
							onChange={onChange}
							// error={!!error}
							minH="unset"
							size={size}
							maxH={maxH}
							borderWidth={borderWidth}
							borderColor={'gray.200'}
							fontSize={'small'}
							color={'gray.500'}
							resize={resize}
							as={ResizeTextarea}
							maxRows={maxRows}
							w={width}
							bg={'white'}
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
					// rules={{ required: !!errorText && isRequired, ...rules }}
				/>

				{/* {error && errorText ? (
					<FormErrorText label={errorText} />
				) : (
					helperText && <FormHelperText label={helperText} />
				)} */}
			</FormControl>
		);
	}
);
