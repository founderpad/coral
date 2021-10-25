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
};

const Form = (props: TFormProps): ReactElement<any> => {
	const { children, name, ...rest } = props;

	return (
		<form
			{...rest}
			autoComplete={'off'}
			name={name}
			aria-label={name}
			noValidate
		>
			<StackLayout spacing={6} flex={1}>
				{children}
			</StackLayout>
		</form>
	);
};

export default Form;
