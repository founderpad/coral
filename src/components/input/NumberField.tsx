import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	forwardRef,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { IInputFieldProps } from 'types/fields';

const NumberField = forwardRef<IInputFieldProps<any>, 'input'>(
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
				<FormLabel
					as="label"
					fontSize={'sm'}
					color={'fpGrey.900'}
					mb={'1px'}
				>
					{label}
				</FormLabel>
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
									borderWidth: 1,
									borderColor: 'fpGrey.500'
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

export default NumberField;
