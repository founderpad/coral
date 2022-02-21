import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import { Button, forwardRef, Select as ChakraSelect } from '@chakra-ui/react';
import { FormErrorText, FormLabelText } from '@components/form';
import React, { useCallback, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { ISelectFieldProps } from 'src/types/fields';
import Select from 'react-select';
import { FlexLayout } from '@components/layouts';
import Router from 'next/router';
import { useMobile } from '@hooks/util';

export const SelectField = forwardRef<ISelectFieldProps, 'select'>(
	(props, ref) => {
		const {
			helperText,
			error,
			isUrl = false,
			mobileOptions,
			onClear
		} = props;

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
		const isMobile = useMobile();

		const [showClear, setShowClear] = useState(!!control._formValues[name]);

		const valueRef = useRef<any>();

		const onClearValue = useCallback(() => {
			onClear?.();
			setShowClear(false);
			if (!isMobile) {
				valueRef?.current?.setValue({
					label: `Select ${placeholder ?? 'option'}`,
					value: null
				});
			}
			if (isUrl) {
				delete Router['query'][name];

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
		}, [valueRef, isMobile, isUrl, name, onClear, placeholder]);

		const onToggleClear = useCallback(
			(value: string) => {
				if (value) setShowClear(true);
				else setShowClear(false);
			},
			[setShowClear]
		);

		return (
			<FormControl
				id={id}
				isInvalid={!!error}
				isRequired={isRequired}
				maxW={{ base: 'full', md: full ? 'full' : 'sm' }}
				ref={ref}
			>
				{label && (
					<FlexLayout justifyContent="space-between">
						<FormLabelText label={label} />

						{showClear && (
							<Button
								fontSize="x-small"
								colorScheme="fpPrimary"
								variant="link"
								mb={1}
								onClick={onClearValue}
							>
								Clear
							</Button>
						)}
					</FlexLayout>
				)}
				<Controller
					defaultValue={''}
					render={({
						field: { onChange, value },
						fieldState: { error }
					}) =>
						isMobile ? (
							<ChakraSelect
								ref={valueRef}
								placeholder={`Select ${
									placeholder ?? 'option'
								}`}
								rounded="md"
								size={'md'}
								value={value}
								// onChange={onChange}
								onChange={(e) => {
									onChange(e);
									onToggleClear(e.target.value);
								}}
								error={error?.message}
								id={`select-${name}-field`}
								name={`select-${name}-field`}
								aria-label={`select-${name}-field`}
								fontSize="small"
								color="gray.500"
							>
								{mobileOptions}
							</ChakraSelect>
						) : (
							<Select
								ref={valueRef}
								menuPortalTarget={document.body}
								options={options}
								placeholder={`Select ${
									placeholder ?? 'option'
								}`}
								// onChange={(e) => onChange(e.value)}
								onChange={(e) => {
									onChange(e.value);
									onToggleClear(e.value);
								}}
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
											background: '#F8F8F9'
										},
										background: state.isSelected
											? '#F8F8F9'
											: 'transparent',
										color: state.isSelected
											? '#1078A9'
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
												? 'rotate(-180deg)'
												: 'rotate(0deg)',
											transition: 'transform .1s linear'
										}
									})
								}}
							/>
						)
					}
					name={name}
					control={control}
					rules={{ required: !!props.errorText }}
				/>
				{error ? (
					<FormErrorText label={props.errorText} />
				) : (
					helperText && (
						<FormHelperText
							fontSize={'smaller'}
							color={'fpGrey.400'}
						>
							{helperText}
						</FormHelperText>
					)
				)}
			</FormControl>
		);
	}
);
