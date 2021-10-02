import { FormControl, FormLabel, forwardRef, Input } from '@chakra-ui/react';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { IInputFieldProps } from 'types/fields';

const DatePickerField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref): JSX.Element => {
		const { label, control, name } = props;

		return (
			<FormControl id={name} w={{ base: 'full' }}>
				<FormLabel
					as="label"
					fontSize={'sm'}
					color={'fpGrey.900'}
					mb={'1px'}
				>
					{label}
				</FormLabel>

				<Controller
					name={'date'}
					control={control}
					render={({ field: { onChange, value } }) => {
						return (
							<DatePicker
								onChange={onChange}
								selected={value}
								placeholderText="Enter your date"
								dateFormat="dd/MM/yyyy"
								customInput={
									<Input
										ref={ref}
										rounded={'sm'}
										focusBorderColor={'gray.150'}
									/>
								}
							/>
						);
					}}
				/>
			</FormControl>
		);
	}
);

export { DatePickerField };
