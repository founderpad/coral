import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel
} from '@chakra-ui/form-control';
import { Flex } from '@chakra-ui/layout';
import { forwardRef } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ICheckboxGroupFieldProps } from 'types/fields';
import { ALL_INDUSTRIES } from 'utils/Constants';

const IndustriesPicker = forwardRef<ICheckboxGroupFieldProps, 'input'>(
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
							(industry): JSX.Element => (
								<Controller
									key={industry.name}
									name={industry.name}
									render={({
										field,
										fieldState: { error }
									}) => (
										<Checkbox
											{...field}
											rounded={'none'}
											focusBorderColor={'gray.150'}
											p={4}
											value={industry.name}
											onChange={onChange}
											isChecked={industries?.includes(
												industry.name
											)}
											error={!!error}
										>
											{industry}
										</Checkbox>
									)}
									control={control}
								/>
							)
						)}
					</Flex>
				</CheckboxGroup>
				<FormErrorMessage alignItems={'flex-start'}>
					{error?.[0] && <span>{errorText}</span>}
				</FormErrorMessage>
			</FormControl>
		);
	}
);

export default IndustriesPicker;
