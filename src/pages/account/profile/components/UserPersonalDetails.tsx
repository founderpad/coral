import { FlexProps } from '@chakra-ui/react';
import { SubmitButton } from '@components/buttons';
import {
	IoLocationSharp,
	IoLockClosedSharp,
	IoMailSharp,
	IoTimeSharp
} from '@components/icons';
import { StackLayout } from '@components/layouts';
import { TitleEditAction } from '@components/shared';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useCurrentUser } from '@hooks/auth';
import { formatDate } from '@utils/validators';
import React, { memo, useContext } from 'react';
import ChangePasswordForm from './forms/ChangePasswordForm';
import PersonalDetailsForm from './forms/PersonalDetailsForm';
import ProfileSectionLabel from './ProfileSectionLabel';
import UserImageUploader from './UserImageUploader';

type Props = Pick<FlexProps, 'display' | 'mb'>;

const UserPersonalInformation = memo((props: Props) => {
	const user = useCurrentUser();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const {
		createdAt = '',
		displayName = '',
		email = '',
		address
	} = user ?? {};
	const { location = '', country = '' } = address ?? {};

	const userLocation = location
		? `${location}, ${country}`
		: country
		? country
		: 'Location not set';

	const onPersonalDetailsClick = () => {
		setModalDrawer({
			title: 'Your details',
			isOpen: true,
			actions: (
				<SubmitButton
					name={'open-modal-drawer-personal-details-button'}
					form="editPersonalDetailsForm"
					label={'Save'}
				/>
			),
			body: <PersonalDetailsForm />,
			noBtnLabel: 'Cancel',
			hideFooter: true
		});
	};

	const onPasswordClick = () => {
		setModalDrawer({
			title: 'Your password',
			isOpen: true,
			actions: (
				<SubmitButton
					name={'open-modal-drawer-change-password-button'}
					form="editPasswordForm"
					label={'Save'}
				/>
			),
			body: <ChangePasswordForm />,
			noBtnLabel: 'Cancel',
			hideFooter: true
		});
	};

	return (
		<StackLayout p={{ base: 4, sm: 0 }}>
			<UserImageUploader />
			<StackLayout {...props} spacing={2} w={'full'}>
				<TitleEditAction
					// title={`${first_name} ${last_name}`}
					title={displayName}
					onClick={onPersonalDetailsClick}
				/>

				<ProfileSectionLabel label={email} icon={IoMailSharp} />

				<ProfileSectionLabel
					label={userLocation}
					icon={IoLocationSharp}
				/>
				<ProfileSectionLabel
					label={`Joined ` + formatDate(createdAt, true)}
					icon={IoTimeSharp}
				/>
				{/* <SocialMediaDetails /> */}
			</StackLayout>

			<StackLayout spacing={2} w={'full'}>
				<TitleEditAction title={'Password'} onClick={onPasswordClick} />
				<ProfileSectionLabel
					label={'*********'}
					icon={IoLockClosedSharp}
				/>
			</StackLayout>
		</StackLayout>
	);
});

export default UserPersonalInformation;
