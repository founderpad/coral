import { InputProps } from '@chakra-ui/input';
import { CheckboxProps } from '@chakra-ui/react';
import { Control, FieldError, FieldValues } from 'react-hook-form';

export type IInputFieldProps<T extends FieldValues> = InputProps & {
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
	maxRows?: number;
	isUrl?: boolean;
	onClear?: () => void;
};

export interface ISelectFieldProps extends IInputFieldProps<any> {
	options: any;
	mobileOptions: any;
	isUrl?: boolean;
}

export type TCheckboxfieldProps<T> = CheckboxProps & {
	name: string;
	control: Control<T>;
	label?: string;
};
