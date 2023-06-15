import { CaptionLabel, SubLabel } from '@/components/labels';
import { formatDate } from '@/utils/validators';
import { Badge } from '@chakra-ui/react';
import { isWithinInterval, startOfToday, subDays } from 'date-fns';
import React from 'react';

export const LastUpdatedAt = ({ date }: { date: string }) => (
	<CaptionLabel>Updated {formatDate(date, false)}</CaptionLabel>
);

export const CreatedAt = ({
	date,
	withTime = false
}: {
	date: string;
	withTime?: boolean;
}) => <SubLabel>Today at {formatDate(date, withTime)}</SubLabel>;

export const LastSeen = ({ lastSeen }: { lastSeen: string }) => {
	const lastSeenDate = new Date(lastSeen);
	const today = startOfToday();
	const twoDaysAgo = subDays(today, 2);

	const isRecentlyActive = isWithinInterval(lastSeenDate, {
		start: twoDaysAgo,
		end: today
	});

	if (isRecentlyActive) {
		return (
			<Badge
				bgColor="green.500"
				color="white"
				textTransform="inherit"
				variant="solid"
				fontWeight="medium"
				rounded="md"
				fontSize="x-small"
			>
				Recently active
			</Badge>
		);
	}

	return null;
};
