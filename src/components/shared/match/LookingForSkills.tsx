import { Tag } from '@chakra-ui/react';
import { memo } from 'react';
import SkillsPopover from './SkillsPopover';

const LookingForSkills = memo(({ skills }: { skills: string[] }) => {
	const firstThreeSkills = skills.slice(0, 3);
	const remainingSkillsCount = skills.length - 3;

	return (
		<>
			{firstThreeSkills.map((skill) => (
				<Tag key={skill} size="sm">
					{skill}
				</Tag>
			))}
			{remainingSkillsCount > 0 && (
				<SkillsPopover
					value={` +${remainingSkillsCount} more`}
					skillsList={skills}
				/>
			)}
		</>
	);
});

export default LookingForSkills;
