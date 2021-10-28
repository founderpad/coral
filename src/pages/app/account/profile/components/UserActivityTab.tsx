import { Stack } from '@chakra-ui/layout';
import { Divider, Flex, Spinner, Text } from '@chakra-ui/react';
import { Label } from 'components/labels';
import { PrimaryLink } from 'components/links';
import { NoResults } from 'components/shared';
import { TActivity, useGetUserActivitiesQuery } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import React from 'react';
import { formatDate } from 'utils/validators';

const UserActivityTab = (): JSX.Element => {
	const user = useCurrentUser();

	const { data, loading } = useGetUserActivitiesQuery({
		variables: {
			user_id: user.id
		}
	});

	const activities = data?.activity;

	if (loading) return <Spinner display={'flex'} m={'auto'} />;
	if (activities?.length < 1) return <NoResults label={'activity'} />;

	return (
		<Stack>
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
				<Label
					fontSize={'sm'}
					fontWeight={'md'}
					label={activity.description}
				/>
				<PrimaryLink
					href={`/app/${activity?.url}`}
					fontSize={'sm'}
					title={'Link to view the idea'}
				>
					View this {activity.type}
				</PrimaryLink>
			</Flex>
			<Text fontSize={'xs'} color={'fpGrey.300'}>
				{formatDate(activity.created_at)}
			</Text>
		</Flex>
	</Flex>
);

export default UserActivityTab;
