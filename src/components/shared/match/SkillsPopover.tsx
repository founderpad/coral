import BasePopover from '@/components/popover/BasePopover';
import { Button, Tag } from '@chakra-ui/react';

const SkillsPopover = ({
	value,
	skillsList
}: {
	value: string;
	skillsList: string[];
}) => {
	return (
		<BasePopover
			placement="bottom-start"
			triggerEl={
				<Button size="xs" variant="link" color="fpPrimary.500">
					{value}
				</Button>
			}
		>
			{skillsList.map((skill) => (
				<Tag key={skill} size="sm" mr={1} mb={1}>
					{skill}
				</Tag>
			))}
		</BasePopover>
	);
};

export default SkillsPopover;
