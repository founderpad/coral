import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import { Button, forwardRef } from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from '@components/form';
import React, { useCallback, useRef } from 'react';
import { Controller } from 'react-hook-form';
import { ISelectFieldProps } from 'src/types/fields';
import Select from 'react-select';
import { FlexLayout } from '@components/layouts';
import Router from 'next/router';

export const SelectField = forwardRef<ISelectFieldProps, 'select'>(
	(props, ref) => {
		const { helperText, error, isUrl = false } = props;

		const valueRef = useRef<any>();

		const {
			id,
			isRequired,
			label,
			options,
			control,
			name,
			full,
			placeholder
		} = props;

		// const [value, setValue] = useState(Router.query[name] ?? '');

		const onClear = useCallback(() => {
			// setValue('');
			valueRef?.current?.setValue({
				label: `Select ${placeholder ?? 'option'}`,
				value: null
			});
			if (isUrl) {
				delete Router.query[name];

				Router.push(
					{
						pathname: Router.pathname,
						query: Router.query
					},
					undefined,
					{
						shallow: true
					}
				);
			}
		}, []);

		return (
			<FormControl
				id={id}
				isInvalid={!!error}
				isRequired={isRequired}
				maxW={{ base: 'full', md: full ? 'full' : 'sm' }}
				ref={ref}
			>
				{label && (
					<FlexLayout justifyContent={'space-between'}>
						<FormLabelText label={label} />

						<Button
							fontSize={'x-small'}
							colorScheme={'fpPrimary'}
							variant={'link'}
							mb={1}
							onClick={onClear}
						>
							Clear
						</Button>
					</FlexLayout>
				)}
				<Controller
					render={({
						field: { onChange, value }
						// fieldState: { error }
					}) => (
						<Select
							ref={valueRef}
							menuPortalTarget={document.body}
							options={options}
							placeholder={`Select ${placeholder ?? 'option'}`}
							onChange={(e) => onChange(e.value)}
							defaultValue={{
								label: `Select ${placeholder ?? 'option'}`,
								value: null
							}}
							value={options.find(
								(opt: any) => opt.value === value
							)}
							styles={{
								menuPortal: (provided) => ({
									...provided,
									zIndex: 9999
								}),
								option: (provided, state) => ({
									...provided,
									fontSize: '12px',
									cursor: 'pointer',
									':hover': {
										background: '#F5F5F6'
									},
									background: 'transparent',
									color: state.isSelected
										? '#2092BC'
										: '#718096'
								}),
								control: (provided) => ({
									...provided,
									fontSize: '12px',
									cursor: 'pointer',
									color: '#718096',
									borderColor: '#E2E8F0',
									boxShadow: 'none',
									borderRadius: '0.375rem',
									':focus-within': {
										borderColor: '#A0AEC0'
									}
								}),
								singleValue: (provided) => ({
									...provided,
									color: '#425068'
								}),
								placeholder: (provided) => ({
									...provided,
									fontSize: '12px'
								}),
								indicatorSeparator: () => ({
									width: 0
								}),
								container: (provided) => ({
									...provided,
									borderRadius: '0.375rem'
								}),
								valueContainer: (provided) => ({
									...provided,
									color: '#718096'
								}),
								noOptionsMessage: (provided) => ({
									...provided,
									fontSize: '12px'
								}),
								menuList: (provided) => ({
									...provided,
									'::-webkit-scrollbar': {
										width: '4px',
										height: '0px'
									},
									'::-webkit-scrollbar-track': {
										background: 'inherit'
									},
									'::-webkit-scrollbar-thumb': {
										background: '#E2E8F0'
									}
								}),
								dropdownIndicator: (provided, state) => ({
									...provided,
									svg: {
										width: '14px',
										height: '14px',
										transform: state.isFocused
											? 'rotate(180deg)'
											: 'rotate(0deg)',
										transition: 'transform .1s linear'
									}
								})
							}}
						/>
					)}
					name={name}
					control={control}
					rules={{ required: !!props.errorText }}
				/>
				{error ? (
					<FormErrorText label={props.errorText} />
				) : (
					helperText && (
						<FormHelperText fontSize={'smaller'}>
							{helperText}
						</FormHelperText>
					)
				)}
			</FormControl>
		);
	}
);
