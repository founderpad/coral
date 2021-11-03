import { SubLabel } from 'components/labels';
import React from 'react';
import { formatDate } from 'utils/validators';

// const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => <Text fontSize={'xs'} color={'fpGrey.300'}>Updated {formatDate(date, false)}</Text>
// const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => <Text fontSize={'xs'} color={'fpGrey.300'}>Updated {formatDate(date, false, true)}</Text>

export const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => (
	<SubLabel>Updated {formatDate(date, false)}</SubLabel>
);

export const CreatedAt = ({
	date,
	withTime = false
}: {
	date: string;
	withTime?: boolean;
}): JSX.Element => <SubLabel>Today at {formatDate(date, withTime)}</SubLabel>;
