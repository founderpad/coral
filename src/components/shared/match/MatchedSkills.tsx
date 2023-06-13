import { FlexLayout } from '@/components/layouts';
import { useCurrentUser } from '@/hooks/auth';
import { TagProps, Tag } from '@chakra-ui/react';
import SeeMoreLink from './SeeMore';

const MatchedSkills = ({ skills }: { skills: string[] }) => {
	const authUser = useCurrentUser();

	const sortedSkills = [...skills].sort((a, b) => {
		const isIncludedA = authUser.matchSettings?.skills.includes(a);
		const isIncludedB = authUser.matchSettings?.skills.includes(b);

		const countA = skills.filter((skill) => skill === a).length;
		const countB = skills.filter((skill) => skill === b).length;

		if (isIncludedA && isIncludedB) {
			if (countA > countB) {
				return -1; // Sort a before b if a has a greater count
			} else if (countA < countB) {
				return 1; // Sort b before a if b has a greater count
			} else {
				return a.localeCompare(b); // Sort alphabetically if the counts are the same
			}
		} else if (isIncludedA && !isIncludedB) {
			return -1; // a is common, b is non-common, a should come before b
		} else if (!isIncludedA && isIncludedB) {
			return 1; // b is common, a is non-common, b should come before a
		}

		return 0; // Both strings are non-common, maintain their order
	});

	return (
		<FlexLayout direction="row" flexWrap="wrap" pt={8}>
			<SeeMoreLink
				limit={4}
				items={sortedSkills}
				renderItem={(skill, _index) => {
					const isSkillIncluded =
						authUser.matchSettings?.skills.includes(skill);
					const tagProps: TagProps = {
						size: 'sm',
						key: skill,
						mr: 1,
						mb: 1
					};

					if (isSkillIncluded) {
						tagProps.bg = 'fpPrimary.500';
						tagProps.color = 'white';
					} else {
						tagProps.variant = 'subtle';
					}

					return <Tag {...tagProps}>{skill}</Tag>;
				}}
			/>
		</FlexLayout>
	);
};

export default MatchedSkills;
