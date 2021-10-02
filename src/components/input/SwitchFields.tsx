import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { forwardRef, Switch } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';

const SwitchField = forwardRef((props, ref) => {
	const { id, label, control, name, defaultChecked, helperText } = props;

	return (
		<FormControl
			ref={ref}
		>
			<FormLabel
				as={'label'}
				fontSize={'sm'}
				color={'gray.600'}
				htmlFor={id}
				id={`label-${id}`}
			>
				{label}
			</FormLabel>
			<Controller
				render={({ field: { onChange, value } }) => (
					<Switch
						id={id}
						rounded={'none'}
						value={value}
						focusBorderColor={'gray.150"'}
						onChange={onChange}
						defaultChecked={defaultChecked}
						colorScheme={'fpPrimary'}
						size={'lg'}
						role={'switch'}
					/>
				)}
				name={name}
				control={control}
			/>
			{helperText && <FormHelperText id={`helper-text-${id}`}>{helperText}</FormHelperText>}
		</FormControl>
	);
});

export { SwitchField };
