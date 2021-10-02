import { Stack } from '@chakra-ui/layout';
import React, { FormHTMLAttributes, ReactElement } from 'react';

type TFormProps = FormHTMLAttributes<HTMLFormElement> & {
	id: string;
	name: string;
	onSubmit: any;
	label?: string;
	children: React.ReactNode;
	isSubmitting?: boolean;
	isValid?: boolean;
};

const Form = (props: TFormProps): ReactElement<any> => {
	const { children, name, ...rest } = props;

	return (
		<form {...rest} autoComplete={'off'} name={name} aria-label={name} noValidate>
			<Stack spacing={4} flex={1}>{children}</Stack>
		</form>
	);
};

export default Form;
