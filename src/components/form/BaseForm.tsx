import { StackProps } from '@chakra-ui/layout';
import { StackLayout } from '@/components/layouts';
import React from 'react';
import {
	SubmitHandler,
	useForm,
	UseFormProps,
	UseFormReturn
} from 'react-hook-form';

type TBaseFormProps<TFormValues> = {
	name: string;
	onSubmit: any | SubmitHandler<TFormValues>;
	children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
	defaultValues?: UseFormProps<TFormValues>['defaultValues'];
	stackProps?: StackProps;
};

const BaseForm = <
	TFormValues extends Record<string, any> = Record<string, any>
>({
	name,
	defaultValues,
	onSubmit,
	stackProps,
	children
}: TBaseFormProps<TFormValues>) => {
	const methods = useForm<TFormValues>({
		mode: 'all',
		defaultValues
	});

	return (
		<form
			autoComplete="off"
			id={name}
			name={name}
			aria-label={name}
			onSubmit={methods.handleSubmit(onSubmit)}
			noValidate
		>
			<StackLayout
				{...stackProps}
				spacing={stackProps?.spacing ?? 6}
				flex={1}
				sx={{
					'button[type="submit"]': {
						marginTop: 6
					}
				}}
			>
				{children(methods)}
			</StackLayout>
		</form>
	);
};

export default BaseForm;
