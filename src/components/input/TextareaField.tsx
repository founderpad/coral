import { FormControl } from '@chakra-ui/form-control';
import { Button, FormHelperText, forwardRef, Textarea } from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from '@components/form';
import { FlexLayout } from '@components/layouts';
import React from 'react';
import { Controller } from 'react-hook-form';
import ResizeTextarea from 'react-textarea-autosize';
import { IInputFieldProps } from 'src/types/fields';

export const TextareaField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref) => {
		const { errorText, helperText, error, onClear, ...rest } = props;
		const {
			id,
			isRequired,
			label,
			placeholder,
			name,
			control,
			rules,
			size,
			width,
			maxH = '150px',
			borderWidth = 1,
			maxRows = 2,
			resize = 'vertical'
		} = rest;

		return (
			<FormControl
				id={id}
				isInvalid={!!error}
				isRequired={isRequired}
				ref={ref}
			>
				{label && (
					<FlexLayout justifyContent="space-between">
						<FormLabelText label={label} />
						<Button
							fontSize="x-small"
							colorScheme="fpPrimary"
							variant="link"
							mb={1}
							onClick={onClear}
						>
							Clear
						</Button>
					</FlexLayout>
				)}
				<Controller
					render={({ field: { onChange, value } }) => (
						<Textarea
							placeholder={placeholder}
							ref={ref}
							value={value}
							onChange={onChange}
							maxH={maxH}
							borderWidth={borderWidth}
							borderColor="gray.200"
							fontSize="small"
							color="fpGrey.900"
							resize={resize}
							as={ResizeTextarea}
							maxRows={maxRows}
							size={size ?? 'md'}
							w={width}
							bg="white"
							_focus={{
								borderColor: 'gray.400',
								boxShadow: 'none'
							}}
							_hover={{
								borderColor: 'gray.300'
							}}
							rounded="md"
						/>
					)}
					name={name}
					control={control}
					rules={{ required: !!errorText && isRequired, ...rules }}
				/>

				{error ? (
					<FormErrorText label={errorText} />
				) : (
					helperText && (
						<FormHelperText fontSize="xs">
							{helperText}
						</FormHelperText>
					)
				)}
			</FormControl>
		);
	}
);
