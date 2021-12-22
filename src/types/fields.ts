import { InputProps } from '@chakra-ui/input';
import { CheckboxProps } from '@chakra-ui/react';
import { Control, FieldError, FieldValues } from 'react-hook-form';

export interface IInputFieldProps<T extends FieldValues> extends InputProps {
	label?: string;
	error?: FieldError | FieldError[];
	errorText?: string;
	helperText?: string;
	name: string;
	rules?: any;
	control: Control<T>;
	full?: boolean;
	characterCount?: number;
	min?: number;
	max?: number;
	leftEl?: JSX.Element;
	rightEl?: JSX.Element;
	showLabel?: boolean;
}

export interface ISelectFieldProps extends IInputFieldProps<any> {
	options: any;
}

export interface ICheckboxGroupFieldProps extends IInputFieldProps<any> {
	industries: string[];
}

export type TCheckboxfieldProps<T> = CheckboxProps & {
	control: Control<T>;
	label?: string;
};

export interface INUmberFieldProps<T extends FieldValues> extends InputProps {
	label?: string;
	error?: FieldError | FieldError[];
	errorText?: string;
	helperText?: string;
	name: string;
	rules?: any;
	control: Control<T>;
	full?: boolean;
	characterCount?: number;
	min?: number;
	max?: number;
}
