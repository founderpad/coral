import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	forwardRef,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper
} from '@chakra-ui/react';
import { FormLabelText } from '@components/form';
import { Controller } from 'react-hook-form';
import { IInputFieldProps } from 'src/types/fields';

export const NumberField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, _ref): JSX.Element => {
		const {
			isRequired,
			label,
			error,
			errorText,
			control,
			rules,
			name,
			helperText,
			min,
			max
		} = props;

		return (
			<FormControl
				id={name}
				isInvalid={!!error}
				isRequired={isRequired}
				w={{ base: 'full' }}
			>
				{label && <FormLabelText label={label} />}
				<Controller
					render={({
						field: { onChange, value },
						fieldState: { error: _error }
					}) => (
						<NumberInput
							defaultValue={0}
							min={min ?? 0}
							max={max ?? 30}
							clampValueOnBlur={false}
							value={value}
							onChange={(_s, n) => onChange(n)}
						>
							<NumberInputField
								rounded={'sm'}
								_focus={{
									borderColor: 'gray.400',
									boxShadow: 'none'
								}}
								_hover={{
									borderColor: 'gray.300'
								}}
							/>
							<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
					)}
					name={name}
					control={control}
					defaultValue={0}
					rules={{ required: !!errorText, ...rules }}
				/>

				{error ? (
					<FormErrorMessage alignItems="flex-start">
						{error && <span>{errorText}</span>}
					</FormErrorMessage>
				) : (
					helperText && (
						<FormHelperText
							textAlign={'end'}
							mt={1}
							color={'gray.400'}
						>
							{helperText}
						</FormHelperText>
					)
				)}
			</FormControl>
		);
	}
);
