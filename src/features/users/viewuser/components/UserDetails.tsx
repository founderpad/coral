import { StackLayout } from '@/components/layouts';
import { AvatarWithDetails, TitleEditAction } from '@/components/shared';
import PronounsLabel from '@/components/shared/PronounsLabel';
import { TUserWithProfileFragment } from '@/generated/api';
import { formatDate } from '@/utils/validators';
import { IoCalendarOutline, IoTimeOutline } from 'react-icons/io5';

const UserDetails = (props: Partial<TUserWithProfileFragment>) => {
	const { displayName, avatarUrl, profile, createdAt, lastSeen } = props;
	return (
		<StackLayout w="full">
			<AvatarWithDetails src={avatarUrl} />
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
