import Form from '@components/form/Form';
import { SelectField } from '@components/input';
import { InputField } from '@components/input/InputField';
import ModalDrawerContext from '@context/ModalDrawerContext';
import {
	TUsers,
	TUsers_Set_Input,
	TUser_Address,
	TUser_Address_Set_Input,
	useUpdateUserPersonalDetailsMutation
} from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useSuccessNotification } from '@hooks/toast';
// import { useNotification } from '@hooks/util';
import { updatePersonalDetails } from '@slices/auth';
import { countriesList } from '@utils/Constants';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

// type InputProperties = keyof TUsers_Set_Input

type PersonalDetailsinput = Pick<TUsers_Set_Input, 'displayName'> &
	Pick<TUser_Address_Set_Input, 'country' | 'location'>;

const PersonalDetailsForm = () => {
	const auth = useCurrentUser();
	const dispatch = useDispatch();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const showSuccessNotification = useSuccessNotification();

	// const showSuccessNotification = useSuccessNotification();
	// const { addNotification } = useNotification();

	const {
		handleSubmit,
		control,
		getValues,
		watch,
		formState: { errors, isSubmitting, isValid }
	} = useForm<PersonalDetailsinput>({
		mode: 'all',
		defaultValues: {
			...auth,
			...auth?.address
		}
	});

	const watchCountry = watch('country', auth?.address?.country);

	const [updateUserPersonalDetails] = useUpdateUserPersonalDetailsMutation({
		variables: {
			id: auth?.id,
			userPersonalDetails: {
				displayName: getValues('displayName')
			},
			userAddress: {
				country: getValues('country'),
				location: getValues('location')
			}
		},
		onCompleted: (data) => {
			const { updateUser, updateUserAddress } = data;
			dispatch(
				updatePersonalDetails({
					user: updateUser as TUsers,
					userAddress: updateUserAddress as TUser_Address
				})
			);

			// addNotification('Personal details successfully updated', 'success');
			showSuccessNotification({
				title: 'Personal details updated successfully'
			});
			setModalDrawer({
				isOpen: false
			});

			// showSuccessNotification({
			// 	title: 'Your personal details have been updated'
			// });
		}
	});

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
				errorText="You must input a display name"
				name="displayName"
				control={control}
				isRequired
			/>
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
				options={countriesList()}
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
				/>
			)}
		</Form>
	);
};

export default PersonalDetailsForm;
