import { CaptionLabel, SubLabel } from '@components/labels';
import { formatDate } from '@utils/validators';
import React from 'react';

// const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => <Text fontSize={'xs'} color={'fpGrey.300'}>Updated {formatDate(date, false)}</Text>
// const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => <Text fontSize={'xs'} color={'fpGrey.300'}>Updated {formatDate(date, false, true)}</Text>

export const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => (
	<CaptionLabel>Updated {formatDate(date, false)}</CaptionLabel>
);

export const CreatedAt = ({
	date,
	withTime = false
}: {
	date: string;
	withTime?: boolean;
}): JSX.Element => <SubLabel>Today at {formatDate(date, withTime)}</SubLabel>;
