import { StackProps } from '@chakra-ui/layout';
import { FlexLayout, StackLayout } from '@components/layouts';
import React, { FormHTMLAttributes, ReactElement } from 'react';

type TFormProps = FormHTMLAttributes<HTMLFormElement> & {
	id: string;
	name: string;
	onSubmit: any;
	label?: string;
	children: React.ReactNode;
	stackProps?: StackProps;
	actions?: React.ReactNode;
};

const Form = (props: TFormProps): ReactElement<any> => {
	const { children, name, stackProps, actions, ...rest } = props;

	return (
		<form
			autoComplete="off"
			name={name}
			aria-label={name}
			noValidate
			{...rest}
		>
			<StackLayout
				{...stackProps}
				spacing={stackProps?.spacing ?? 6}
				flex={1}
			>
				{children}
			</StackLayout>

			<FlexLayout mt={4} justifyContent="center">
				{actions}
			</FlexLayout>
		</form>
	);
};

export default Form;
