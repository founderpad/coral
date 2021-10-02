import { Text } from '@chakra-ui/layout';
import React from 'react';
import { formatDate } from 'utils/validators';

const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => <Text fontSize={'xs'} color={'fpGrey.300'}>Updated {formatDate(date, false)}</Text>
// const LastUpdatedAt = ({ date }: { date: string }): JSX.Element => <Text fontSize={'xs'} color={'fpGrey.300'}>Updated {formatDate(date, false, true)}</Text>

export default LastUpdatedAt;