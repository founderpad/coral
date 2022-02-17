import Form from '@components/form/Form';
import { SelectField } from '@components/input';
import { InputField } from '@components/input/InputField';
import ModalDrawerContext from '@context/ModalDrawerContext';
import {
	TUsers,
	TUsers_Set_Input,
	TUser_Address,
	TUser_Address_Set_Input,
	TUser_Profile,
	TUser_Profile_Set_Input,
	useUpdateUserPersonalDetailsMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { updatePersonalDetails } from '@slices/auth';
import {
	ALL_COUNTRIES,
	ALL_PRONOUNS,
	mobileCountriesList,
	mobilePronouns
} from '@utils/Constants';
import { redirectTo } from '@utils/validators';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

type PersonalDetailsinput = Pick<TUsers_Set_Input, 'displayName'> &
	Pick<TUser_Address_Set_Input, 'country' | 'location'> &
	Pick<TUser_Profile_Set_Input, 'pronouns' | 'customPronouns'>;

const PersonalDetailsForm = () => {
	const auth = useCurrentUser();
	const dispatch = useDispatch();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const {
		handleSubmit,
		control,
		getValues,
		watch,
		reset,
		formState: { errors, isSubmitting, isValid }
	} = useForm<PersonalDetailsinput>({
		mode: 'all',
		defaultValues: {
			...auth,
			...auth?.address,
			...auth?.profile
		}
	});

	const watchCountry = watch('country', getValues('country'));
	const watchCustomPronouns = watch('pronouns', getValues('pronouns'));

	const [updateUserPersonalDetails] = useUpdateUserPersonalDetailsMutation({
		variables: {
			id: auth?.id,
			profileId: auth?.profile?.id,
			userPersonalDetails: {
				displayName: getValues('displayName')
			},
			userAddress: {
				country: getValues('country'),
				location: getValues('location')
			},
			userProfile: {
				pronouns: getValues('pronouns'),
				customPronouns:
					getValues('pronouns') === 'Custom'
						? getValues('customPronouns')
						: null
			}
		},
		onCompleted: (data) => {
			const { updateUser, updateUserAddress, updateUserProfile } = data;

			dispatch(
				updatePersonalDetails({
					user: updateUser as TUsers,
					userAddress: updateUserAddress as TUser_Address,
					userProfile: updateUserProfile as TUser_Profile
				})
			);

			redirectTo(false, 'pd');

			setModalDrawer({
				isOpen: false
			});
		},
		onError: () => {
			redirectTo(true, 'pd');
		}
	});

	const resetField = (name: string) => {
		reset({
			...getValues(),
			[name]: ''
		});
	};

	return (
		<Form
			id={'editPersonalDetailsForm'}
			name={'editPersonalDetailsForm'}
			onSubmit={handleSubmit(updateUserPersonalDetails)}
			isSubmitting={isSubmitting}
			isValid={isValid}
		>
			<InputField
				id="displayName"
				label="Display name"
				placeholder="Display name"
				error={errors['displayName']}
				errorText={
					errors['displayName']?.type === 'required'
						? 'You must input a display name'
						: 'Your display name can not be more than 50 characters'
				}
				name="displayName"
				control={control}
				onClear={() => resetField('displayName')}
				rules={{ required: true, maxLength: 50 }}
				isRequired
			/>

			<SelectField
				id="pronouns"
				name="pronouns"
				label="Pronouns"
				placeholder={'pronouns'}
				options={ALL_PRONOUNS}
				mobileOptions={mobilePronouns()}
				onClear={() => resetField('pronouns')}
				control={control}
				full
			/>

			{watchCustomPronouns === 'Custom' && (
				<InputField
					id="customPronouns"
					name="customPronouns"
					label="Custom pronoun"
					placeholder="Custom pronoun"
					error={errors['customPronouns']}
					errorText={
						errors['customPronouns']?.type === 'required'
							? 'You must input a custom pronoun'
							: 'Your custom pronoun can not be more than 15 characters'
					}
					control={control}
					onClear={() => resetField('customPronouns')}
					rules={{ required: true, maxLength: 15 }}
					isRequired
				/>
			)}

			{/* <InputField
				id="firstName"
				label="First name"
				placeholder="First name"
				error={errors['first_name']}
				errorText="You must input a first name"
				name="firstName"
				control={control}
				isRequired
			/> */}
			{/* <InputField
				id="lastName"
				label="Last name"
				placeholder="Last name"
				error={errors['last_name']}
				errorText="Your last name"
				name="lastName"
				control={control}
				helperText={'This will not be shown to other users.'}
			/> */}

			<SelectField
				id="country"
				name="country"
				label="Country"
				placeholder={'country'}
				options={ALL_COUNTRIES}
				mobileOptions={mobileCountriesList()}
				onClear={() => resetField('country')}
				control={control}
				full
			/>

			{watchCountry && (
				<InputField
					id="location"
					label="Location"
					placeholder="Location"
					name="location"
					control={control}
					onClear={() => resetField('location')}
				/>
			)}
		</Form>
	);
};

export default PersonalDetailsForm;
