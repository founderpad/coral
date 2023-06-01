import { TUser_Profile_Set_Input } from '@/generated/api';
import * as yup from 'yup';

type ExperienceInput = Pick<
	TUser_Profile_Set_Input,
	'objective' | 'background' | 'statement'
>;

export const schema: yup.ObjectSchema<ExperienceInput> = yup.object().shape({
	objective: yup
		.string()
		.required('You must provide your objective on this platform'),
	background: yup
		.string()
		.max(400, 'Your background can not be more than 400 characters'),
	statement: yup
		.string()
		.max(400, 'Your personal statement can not be more than 400 characters')
});

export default schema;
