import { StackProps } from '@chakra-ui/layout';
import { StackLayout } from 'components/layouts';
import React, { FormHTMLAttributes, ReactElement } from 'react';

type TFormProps = FormHTMLAttributes<HTMLFormElement> & {
	id: string;
	name: string;
	onSubmit: any;
	label?: string;
	children: React.ReactNode;
	isSubmitting?: boolean;
	isValid?: boolean;
	stackProps?: StackProps;
};

const Form = (props: TFormProps): ReactElement<any> => {
	const { children, name, stackProps, ...rest } = props;

	return (
		<form
			{...rest}
			autoComplete={'off'}
			name={name}
			aria-label={name}
			noValidate
		>
			<StackLayout
				{...stackProps}
				spacing={stackProps?.spacing ?? 6}
				flex={1}
			>
				{children}
			</StackLayout>
		</form>
	);
};

export default Form;
