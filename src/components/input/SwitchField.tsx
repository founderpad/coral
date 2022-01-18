import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import { forwardRef, Switch } from '@chakra-ui/react';
import { FormLabelText } from '@components/form';
import React from 'react';
import { Controller } from 'react-hook-form';

export const SwitchField = forwardRef((props, ref) => {
	const { id, label, control, name, defaultChecked, helperText } = props;

	return (
		<FormControl ref={ref}>
			<FormLabelText label={label} />
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
						size={'md'}
						role={'switch'}
					/>
				)}
				name={name}
				control={control}
			/>
			{helperText && (
				<FormHelperText id={`helper-text-${id}`} fontSize={'x-small'}>
					{helperText}
				</FormHelperText>
			)}
		</FormControl>
	);
});
