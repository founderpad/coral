import { FlexProps } from '@chakra-ui/react';
import { SubmitButton } from '@components/buttons';
import { IoLocationSharp, IoMailSharp, IoTimeSharp } from '@components/icons';
import { StackLayout } from '@components/layouts';
import { TitleEditAction } from '@components/shared';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useCurrentUser } from '@hooks/auth';
import { formatDate } from '@utils/validators';
import React, { memo, useContext } from 'react';
import PersonalDetailsForm from './forms/PersonalDetailsForm';
import ProfileSectionLabel from './ProfileSectionLabel';
import SocialMediaDetails from './SocialMediaDetails';
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

	const onClick = () => {
		setModalDrawer({
			title: 'Your details',
			isOpen: true,
			actions: (
				<SubmitButton
					name={'open-modal-drawer-personal-details-button'}
					form="editPersonalDetailsForm"
					label={'Save'}
					size={'xs'}
				/>
			),
			body: <PersonalDetailsForm />,
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
					onClick={onClick}
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
				<SocialMediaDetails />
			</StackLayout>
		</StackLayout>
	);
});

export default UserPersonalInformation;
