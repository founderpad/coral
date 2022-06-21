import { Stack } from '@chakra-ui/layout';
import { Divider, Flex, Spinner } from '@chakra-ui/react';
import { CaptionLabel, Label } from '@/components/labels';
import { PrimaryLink } from '@/components/links';
import { NoResults } from '@/components/shared';
import { TActivity, useUserActivityQuery } from '@/generated/api';
import { useClaim } from '@/hooks/auth';
import { formatDate } from '@/utils/validators';
import React from 'react';

const UserActivityTab = () => {
	const { data, loading } = useUserActivityQuery({
		variables: {
			userId: useClaim()
		}
	});

	const activities = data?.activity ?? [];
	const hasResults = activities?.length > 0;

	if (loading) return <Spinner display="flex" m="auto" />;
	if (!hasResults) return <NoResults label="activity" back={false} />;

	return (
		<Stack p={4}>
			{activities?.map((activity) => (
				<React.Fragment key={activity.ideaId}>
					<ActivityItem {...activity} />
					<Divider />
				</React.Fragment>
			))}
		</Stack>
	);
};

const ActivityItem = (
	activity: Omit<TActivity, 'id' | 'userId' | 'user' | 'updatedAt'>
) => (
	<Flex p={0} flexDirection="column">
		<Flex justifyContent="space-between" alignItems="flex-start">
			<Flex flexDirection="column">
				<Label fontSize="xs" fontWeight="md" color="black">
					{activity.description}
				</Label>
				<PrimaryLink
					href={`/${activity?.url}`}
					fontSize="xs"
					title="Link to view the idea"
				>
					View this {activity.type}
				</PrimaryLink>
			</Flex>
			<CaptionLabel>{formatDate(activity.createdAt, true)}</CaptionLabel>
		</Flex>
	</Flex>
);

export default UserActivityTab;
