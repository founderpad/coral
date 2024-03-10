import { Tag } from '@chakra-ui/react';
import { memo } from 'react';
import { FlexLayout } from '../layouts';

const SkillsBadges = memo(({ skills }: { skills: string[] }) => {
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

export default SkillsBadges;
