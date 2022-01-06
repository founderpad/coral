import { Stack } from '@chakra-ui/layout';
import { Divider, Flex, Spinner } from '@chakra-ui/react';
import { CaptionLabel, SubLabel } from 'components/labels';
import { PrimaryLink } from 'components/links';
import { NoResults } from 'components/shared';
import { TActivity, useUserActivityQuery } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import React from 'react';
import { formatDate } from 'utils/validators';

const UserActivityTab = (): JSX.Element => {
	const user = useCurrentUser();

	const { data, loading } = useUserActivityQuery({
		variables: {
			user_id: user.id
		}
	});

	const activities = data?.activity;

	if (loading) return <Spinner display={'flex'} m={'auto'} />;
	if (activities?.length < 1) return <NoResults label={'activity'} />;

	return (
		<Stack p={4}>
			{activities?.map((activity) => (
				<React.Fragment key={activity.idea_id}>
					<ActivityItem {...activity} />
					<Divider />
				</React.Fragment>
			))}
		</Stack>
	);
};

const ActivityItem = (activity: Omit<TActivity, 'id' | 'user_id' | 'user'>) => (
	<Flex p={0} flexDirection={'column'}>
		<Flex justifyContent={'space-between'} alignItems={'flex-start'}>
			<Flex flexDirection={'column'}>
				<SubLabel fontSize={'xs'} fontWeight={'md'} color={'gray.900'}>
					{activity.description}
				</SubLabel>
				<PrimaryLink
					href={`/${activity?.url}`}
					fontSize={'xs'}
					title={'Link to view the idea'}
				>
					View this {activity.type}
				</PrimaryLink>
			</Flex>
			<CaptionLabel>{formatDate(activity.created_at, true)}</CaptionLabel>
		</Flex>
	</Flex>
);

export default UserActivityTab;
