import { BaseForm } from '@/components/form';
import { FormSelect } from '@/components/form/inputs/FormField';
import { ALL_MATCHMAKE_TYPES, EXPERIENCE_SKILLS } from '@/utils/Constants';
import React from 'react';
import {
	TMatchSettingsFieldsFragment,
	TMatch_Settings_Set_Input
} from '@/generated/api';
import schema from '@/validation/match/validationSchema';
import { useUpdateMatchSettings } from '../hooks/updatematchsettings';
import CheckboxGroup from '@/components/checkboxgroup/CheckboxGroup';
import useUserProfile from '@/hooks/user';

type TMatchSettings = TMatchSettingsFieldsFragment & { isInitial?: boolean };
type TUpdateMatchSettingsInput = TMatch_Settings_Set_Input & {
	profileSkills?: string[] | undefined;
};

const MatchmakeSettingsForm = (matchmakeSettings: TMatchSettings) => {
	const userProfile = useUserProfile();
	const { __typename, isInitial, ...rest } = matchmakeSettings;
	const defaultValues = { ...rest };

	const { onUpdateMatchmakeSettings } = useUpdateMatchSettings(isInitial);

	return (
		<BaseForm<TUpdateMatchSettingsInput, typeof schema>
			name="edit-match-settings-form"
			onSubmit={onUpdateMatchmakeSettings}
			defaultValues={defaultValues}
			schema={schema}
		>
			{({ register, control, resetField, formState: { errors } }) => (
				<>
					<FormSelect<TMatch_Settings_Set_Input>
						id="type"
						name="type"
						label="I consider myself"
						options={ALL_MATCHMAKE_TYPES}
						register={register}
						control={control}
						errors={errors}
						hideLimit={true}
						onClear={() => resetField('type', { defaultValue: '' })}
						isRequired
					/>
					<FormSelect<TMatch_Settings_Set_Input>
						id="lookingFor"
						name="lookingFor"
						label="And I am looking for"
						options={ALL_MATCHMAKE_TYPES}
						register={register}
						control={control}
						errors={errors}
						hideLimit={true}
						onClear={() =>
							resetField('lookingFor', { defaultValue: '' })
						}
						isRequired
					/>
					{isInitial && (
						<CheckboxGroup
							name="profileSkills"
							label="What are your skills?"
							options={EXPERIENCE_SKILLS}
							defaultValues={userProfile?.skills}
							isRequired
						/>
					)}
					<CheckboxGroup
						name="skills"
						label="And what skills are you looking for?"
						options={EXPERIENCE_SKILLS}
						defaultValues={matchmakeSettings.skills}
						isRequired
					/>
				</>
			)}
		</BaseForm>
	);
};

export default MatchmakeSettingsForm;
