// import { formatStringObjArrayForUi } from '@/utils/validators';
import { Tag } from '@chakra-ui/react';
import { memo } from 'react';
import { FlexLayout } from '../layouts';

export const SkillsBadges = memo(({ skills }: { skills: string[] }) => {
	// const skillsArr = formatStringObjArrayForUi(skills);
	return (
		<FlexLayout flexWrap="wrap" direction="row" alignItems="center">
			{skills?.map((skill) => (
				<Tag fontSize="xs" size="sm" mr={1} mb={1} key={skill}>
					{skill}
				</Tag>
			))}
		</FlexLayout>
	);
});
