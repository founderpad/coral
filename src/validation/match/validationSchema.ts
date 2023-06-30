import { TMatch_Settings_Set_Input } from '@/generated/api';
import * as yup from 'yup';

type TMatchSettings = Pick<TMatch_Settings_Set_Input, 'type' | 'lookingFor'>;

export const schema: yup.ObjectSchema<TMatchSettings> = yup.object().shape({
	type: yup.string().required('You must provide what you are offering.'),
	lookingFor: yup
		.string()
		.required('You must provide what you are looking for.'),
	skills: yup.array().min(1, 'You must select at least one skill.')
});

export default schema;
