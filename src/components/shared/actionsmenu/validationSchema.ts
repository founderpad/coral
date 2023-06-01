import * as yup from 'yup';

export const schema: yup.ObjectSchema<{ reason: string }> = yup.object().shape({
	reason: yup.string().required('You must provide a reason')
});
