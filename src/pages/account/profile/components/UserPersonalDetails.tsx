import { FlexProps } from '@chakra-ui/react';
import {
	IoLockClosedOutline,
	IoMailOutline,
	IoTimeOutline
} from '@/components/icons';
import { StackLayout } from '@/components/layouts';
import { TitleEditAction } from '@/components/shared';
import { formatDate } from '@/utils/validators';
import React, { memo } from 'react';
import ProfileSectionLabel from './ProfileSectionLabel';
import UserImageUploader from './UserImageUploader';
import { useUserData } from '@nhost/react';
import useChangePasswordModal from '../hooks/changepassword';

type Props = Pick<FlexProps, 'display' | 'mb'>;

const UserPersonalInformation = memo((props: Props) => {
	const user = useUserData();
	const { onOpenModal } = useChangePasswordModal();
	const { createdAt = '', displayName = '', email = '' } = user ?? {};

	return (
		<StackLayout p={4} spacing={8}>
			<UserImageUploader />
			<StackLayout {...props} spacing={2}>
				<TitleEditAction title={displayName} />

				<ProfileSectionLabel label={email} icon={IoMailOutline} />
				<ProfileSectionLabel
					label={`Joined ` + formatDate(createdAt, true)}
					icon={IoTimeOutline}
				/>
			</StackLayout>

			<StackLayout spacing={2} w="full">
				<TitleEditAction title="Password" onClick={onOpenModal} />
				<ProfileSectionLabel
					label="*********"
					icon={IoLockClosedOutline}
				/>
			</StackLayout>
		</StackLayout>
	);
});

export default UserPersonalInformation;
