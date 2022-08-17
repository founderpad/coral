import { percentageBoosted } from '@/utils/validators';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import React from 'react';

const BoostProgress = ({
	remainingCurrencyAmount
}: {
	remainingCurrencyAmount: string;
}) => {
	return (
		<CircularProgress
			value={percentageBoosted(remainingCurrencyAmount)}
			size="90px"
			color={
				percentageBoosted(remainingCurrencyAmount) === 100
					? 'green.300'
					: 'purple.500'
			}
			mx="auto"
		>
			<CircularProgressLabel
				fontSize="md"
				color={
					percentageBoosted(remainingCurrencyAmount) === 100
						? 'green.500'
						: 'purple.500'
				}
			>
				{percentageBoosted(remainingCurrencyAmount)}%
			</CircularProgressLabel>
		</CircularProgress>
	);
};

export default BoostProgress;
