import { SubLabel } from 'components/labels';
import React from 'react';
import { formatDate } from 'utils/validators';

// const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => <Text fontSize={'xs'} color={'fpGrey.300'}>Updated {formatDate(date, false)}</Text>
// const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => <Text fontSize={'xs'} color={'fpGrey.300'}>Updated {formatDate(date, false, true)}</Text>

export const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => (
	<SubLabel label={`Updated ${formatDate(date, false)}`} />
);

export const CreatedAt = ({
	date,
	withTime
}: {
	date: string;
	withTime?: boolean;
}): JSX.Element => (
	<SubLabel label={`Today at ${formatDate(date, withTime)}`} />
);
