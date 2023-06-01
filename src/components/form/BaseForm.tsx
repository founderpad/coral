import { StackProps } from '@chakra-ui/layout';
import { StackLayout } from '@/components/layouts';
import React from 'react';
import {
	SubmitHandler,
	useForm,
	UseFormProps,
	UseFormReturn
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type TBaseFormProps<
	TFormValues extends Record<string, any>,
	S extends yup.ObjectSchema<any>
> = {
	name: string;
	onSubmit: any | SubmitHandler<TFormValues>;
	children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
	defaultValues?: UseFormProps<TFormValues>['defaultValues'];
	stackProps?: StackProps;
	schema?: S;
};

const BaseForm = <
	TFormValues extends Record<string, any>,
	S extends yup.ObjectSchema<any>
>({
	name,
	defaultValues,
	onSubmit,
	stackProps,
	children,
	schema
}: TBaseFormProps<TFormValues, S>) => {
	const methods = useForm<TFormValues>({
		mode: 'all',
		defaultValues,
		resolver: schema ? yupResolver(schema) : undefined
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
