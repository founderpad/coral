import { EditButton } from '@/components/buttons';
import { Label } from '@/components/labels';
import { StackLayout } from '@/components/layouts';
import useMatchModal from '@/components/shared/match/MatchModal';
import { useMatchSettingsQuery } from '@/generated/api';
import { useCurrentUser, useAuth } from '@/hooks/auth';
import { useMobile } from '@/hooks/util';
import { Tag, Spacer } from '@chakra-ui/react';
import LookingForSkills from './LookingForSkills';
import SkillsPopover from './SkillsPopover';

const UserMatchPreferences = () => {
	const authUser = useCurrentUser();
	const isMobile = useMobile();

	const { data } = useMatchSettingsQuery({
		variables: {
			id: useAuth().getUser()?.id
		}
	});

	const { onOpenModal } = useMatchModal(data ?? {});

	return (
		<StackLayout
			flexDirection={{ base: 'column', sm: 'row' }}
			p={2}
			mb={4}
			spacing={{ base: 0, sm: 2 }}
			alignItems={{ base: 'start', sm: 'center' }}
			borderWidth="1px"
			rounded="md"
			direction="row"
		>
			{authUser.matchSettings?.lookingFor && (
				<StackLayout direction="row" spacing={2}>
					<Label fontSize="xs">I am looking for</Label>
					<Tag size="sm">{authUser.matchSettings?.lookingFor}</Tag>
				</StackLayout>
			)}

			{authUser.matchSettings?.skills && (
				<>
					{!isMobile ? (
						<Label fontSize="xs">with skills</Label>
					) : (
						<SkillsPopover
							value={`With ${authUser.matchSettings?.skills.length} skills`}
							skillsList={authUser.matchSettings?.skills}
						/>
					)}
					{!isMobile && (
						<LookingForSkills
							skills={authUser.matchSettings?.skills ?? ''}
						/>
					)}
				</>
			)}
			{!isMobile && (
				<>
					<Spacer />
					<EditButton
						aria-label="edit-button"
						ml="auto"
						onClick={onOpenModal}
					/>
				</>
			)}
		</StackLayout>
	);
};

export default UserMatchPreferences;
