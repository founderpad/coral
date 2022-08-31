import { StackLayout } from '@/components/layouts';
import { formatDate } from '@/utils/validators';
import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';
import BoostProgress from '../../boost/BoostProgress';

const IdeaBoostProgress = ({
	remainingCurrencyAmount,
	createdAt
}: {
	remainingCurrencyAmount: string;
	createdAt: string;
}) => {
	const earned = 10 - parseFloat(remainingCurrencyAmount.substring(1));

	return (
		<StackLayout direction="row">
			<StackLayout display="inline-block" direction="row">
				<BoostProgress
					remainingCurrencyAmount={remainingCurrencyAmount}
				/>
			</StackLayout>

			<Stat>
				<StatLabel fontSize="xs">Earned by users</StatLabel>
				<StatNumber fontSize="md" py={1}>
					{remainingCurrencyAmount} / ${earned}.00
				</StatNumber>
				<StatHelpText fontSize="x-small" color="fpGrey.400">
					{formatDate(createdAt, false, false, false)} -{' '}
					{formatDate(new Date().toString(), false, false, false)}
				</StatHelpText>
			</Stat>
		</StackLayout>
	);
};

export default IdeaBoostProgress;
