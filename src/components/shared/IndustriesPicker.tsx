import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel
} from '@chakra-ui/form-control';
import { Flex } from '@chakra-ui/layout';
import { Checkbox, CheckboxGroup, forwardRef } from '@chakra-ui/react';
import { ALL_INDUSTRIES } from '@utils/Constants';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ICheckboxGroupFieldProps } from 'src/types/fields';

export const IndustriesPicker = forwardRef<ICheckboxGroupFieldProps, 'input'>(
	(props, ref) => {
		const {
			name,
			isRequired,
			label,
			error,
			errorText,
			control,
			onChange,
			industries
		} = props;

		return (
			<FormControl
				id={name}
				isInvalid={!!error}
				isRequired={isRequired}
				ref={ref}
			>
				<FormLabel as={'label'} fontSize={'sm'} color={'gray.600'}>
					{label}
				</FormLabel>
				<FormHelperText>Please select all that apply.</FormHelperText>

				<CheckboxGroup colorScheme={'blue'} defaultValue={industries}>
					<Flex
						wrap={'wrap'}
						direction={{ base: 'column', sm: 'row' }}
						my={6}
					>
						{ALL_INDUSTRIES.map(
							(field): JSX.Element => (
								<Controller
									key={field.name}
									name={field.name}
									render={({
										field,
										fieldState: { error }
									}) => (
										<Checkbox
											{...field}
											rounded={'none'}
											focusBorderColor={'gray.150'}
											p={4}
											value={field.name}
											onChange={onChange}
											isChecked={industries?.includes(
												field.name
											)}
											error={!!error}
										>
											{field}
										</Checkbox>
									)}
									control={control}
								/>
							)
						)}
					</Flex>
				</CheckboxGroup>
				{/* {error instanceof FieldError[] && (
					<FormErrorMessage alignItems={'flex-start'}>
						{error?.[0] && <span>{errorText}</span>}
					</FormErrorMessage>
				)} */}
				{/* {error && (
					<FormErrorMessage alignItems={'flex-start'}>
						{error?.[0] && <span>{errorText}</span>}
					</FormErrorMessage>
				)} */}

				{error && (
					<FormErrorMessage alignItems={'flex-start'}>
						{error && <span>{errorText}</span>}
					</FormErrorMessage>
				)}
			</FormControl>
		);
	}
);
