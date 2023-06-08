import { StackLayout } from '@/components/layouts';
import { UserAvatar, TitleEditAction } from '@/components/shared';
import PronounsLabel from '@/components/shared/PronounsLabel';
import { TUserWithProfileFragment } from '@/generated/api';
import ProfileSectionLabel from '@/pages/account/profile/components/ProfileSectionLabel';
import { formatDate } from '@/utils/validators';
import {
	IoLocationOutline,
	IoCalendarOutline,
	IoTimeOutline
} from 'react-icons/io5';

export const UserDetails = (props: Partial<TUserWithProfileFragment>) => {
	const { displayName, avatarUrl, profile, address, createdAt, lastSeen } =
		props;
	return (
		<StackLayout w="full">
			<UserAvatar
				src={avatarUrl}
				boxSize={{ base: 100, md: 120 }}
				aria-label="Edit profile picture"
			/>
			<TitleEditAction
				title={displayName ?? ''}
				subtitle={
					<PronounsLabel
						pronouns={profile?.pronouns}
						customPronouns={profile?.customPronouns}
					/>
				}
			/>
			<StackLayout spacing={2}>
				{address && (
					<ProfileSectionLabel
						label={
							address.location
								? `${address.location}, ${address.country}`
								: address.country
								? address.country
								: 'Location not set'
						}
						icon={IoLocationOutline}
					/>
				)}
				{createdAt && (
					<ProfileSectionLabel
						label={`Joined ` + formatDate(createdAt, false, true)}
						icon={IoCalendarOutline}
					/>
				)}
				{createdAt && (
					<ProfileSectionLabel
						label={
							`Last seen ` +
							(lastSeen
								? formatDate(
										lastSeen,
										undefined,
										undefined,
										false
								  )
								: formatDate(
										createdAt,
										undefined,
										undefined,
										false
								  ))
						}
						icon={IoTimeOutline}
					/>
				)}
			</StackLayout>
		</StackLayout>
	);
};

export default UserDetails;
