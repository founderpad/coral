import * as yup from 'yup';

interface TChangePasswordFields {
	newPassword: string;
}

export const schema: yup.ObjectSchema<TChangePasswordFields> = yup
	.object()
	.shape({
		newPassword: yup
			.string()
			.min(6, 'Your password must be a minimum of 6 characters')
			.max(20, 'Your password must be a maximum of 20 characters')
			.required('You must enter a valid password')
	});

export default schema;
