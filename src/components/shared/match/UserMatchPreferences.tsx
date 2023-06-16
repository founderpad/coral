import { EditButton } from '@/components/buttons';
import { Label } from '@/components/labels';
import { StackLayout } from '@/components/layouts';
import useMatchModal from '@/components/shared/match/MatchModal';
import {
	TMatchSettingsFieldsFragment,
	useMatchSettingsQuery
} from '@/generated/api';
import { useMobile } from '@/hooks/util';
import { Tag, Spacer } from '@chakra-ui/react';
import LookingForSkills from './LookingForSkills';
import SkillsPopover from './SkillsPopover';
import { useUserData } from '@nhost/react';

const UserMatchPreferences = (settings: TMatchSettingsFieldsFragment) => {
	const user = useUserData();
	const isMobile = useMobile();

	const { data } = useMatchSettingsQuery({
		variables: {
			id: user?.id
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
			{settings?.lookingFor && (
				<StackLayout direction="row" spacing={2}>
					<Label fontSize="xs">I am looking for</Label>
					<Tag size="sm">{settings?.lookingFor}</Tag>
				</StackLayout>
			)}

			{settings?.skills && (
				<>
					{!isMobile ? (
						<Label fontSize="xs">with skills</Label>
					) : (
						<SkillsPopover
							value={`With ${settings?.skills.length} skills`}
							skillsList={settings?.skills}
						/>
					)}
					{!isMobile && (
						<LookingForSkills skills={settings?.skills ?? ''} />
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
