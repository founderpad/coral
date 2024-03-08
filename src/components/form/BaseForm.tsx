import { StackProps } from '@chakra-ui/layout';
import { StackLayout } from '@/components/layouts';
import React from 'react';
import {
	FormProvider,
	SubmitHandler,
	useForm,
	UseFormProps,
	UseFormReturn
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type TBaseFormProps<
	T extends Record<string, any>,
	S extends yup.ObjectSchema<any> | undefined = undefined
> = {
	name: string;
	onSubmit: SubmitHandler<T>;
	children: (methods: UseFormReturn<T>) => React.ReactNode;
	defaultValues?: UseFormProps<T>['defaultValues'];
	stackProps?: StackProps;
	schema?: S;
};

const BaseForm = <
	T extends Record<string, any>,
	S extends yup.ObjectSchema<any> | undefined = undefined
>({
	name,
	defaultValues,
	onSubmit,
	stackProps,
	children,
	schema
}: TBaseFormProps<T, S>) => {
	const methods = useForm<T>({
		mode: 'all',
		defaultValues,
		resolver: schema ? yupResolver(schema) : undefined
	});

	const handleFormSubmit: SubmitHandler<T> = async (data) => {
		try {
			await methods.trigger(); // Trigger form validation

			if (methods.formState.isValid) {
				// Form is valid, proceed with form submission
				onSubmit(data);
			}
		} catch (error) {
			console.error('Form submission error:', error);
			throw new Error('Form submission error');
		}
	};

	return (
		<FormProvider {...methods}>
			<form
				autoComplete="off"
				id={name}
				name={name}
				aria-label={name}
				onSubmit={methods.handleSubmit(handleFormSubmit)}
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
		</FormProvider>
	);
};

export default BaseForm;
