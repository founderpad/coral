import {
	Button,
	FormControl,
	FormHelperText,
	forwardRef,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper
} from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from '@components/form';
import { FlexLayout } from '@components/layouts';
import { Controller } from 'react-hook-form';
import { IInputFieldProps } from 'src/types/fields';

export const NumberField = forwardRef<IInputFieldProps<any>, 'input'>(
	(props, ref) => {
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
			max,
			onClear
		} = props;

		return (
			<FormControl
				id={name}
				isInvalid={!!error}
				isRequired={isRequired}
				w={{ base: 'full' }}
			>
				{/* {label && <FormLabelText label={label} />} */}
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
						<NumberInput
							defaultValue={0}
							min={min ?? 0}
							max={max ?? 30}
							clampValueOnBlur={false}
							value={value}
							onChange={(_s, n) => onChange(n)}
							ref={ref}
						>
							<NumberInputField
								rounded="md"
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
