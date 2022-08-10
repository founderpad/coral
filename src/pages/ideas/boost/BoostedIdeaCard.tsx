import LinkCard from '@/components/cards/LinkCard';
import BaseHeading from '@/components/heading/BaseHeading';
import { Label } from '@/components/labels';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { TBoostedIdeaFieldsFragment } from '@/generated/api';
import { Progress } from '@chakra-ui/react';
import React from 'react';

const BoostedIdeaCardFooter = (boostedIdea: TBoostedIdeaFieldsFragment) => {
	const remainingCurrencyAmount: String =
		boostedIdea?.remainingCurrencyAmount;
	const totalAmount = 10;

	const percentageBoosted = (
		(parseFloat(
			remainingCurrencyAmount.substring(1, remainingCurrencyAmount.length)
		) /
			totalAmount) *
		100
	).toFixed(1);

	console.log('boosted ideas: ', 100 - parseFloat(percentageBoosted));

	return (
		<StackLayout p={4} spacing={2}>
			<Progress
				size="lg"
				value={Math.floor(100 - parseFloat(percentageBoosted))}
				position="relative"
			/>
			<FlexLayout justifyContent="space-between">
				<Label color="orange.500" fontSize="small">
					{boostedIdea?.remainingCurrencyAmount} left
				</Label>
				<Label color="purple.500" fontSize="small">
					{Math.floor(100 - parseFloat(percentageBoosted))}% boosted
				</Label>
			</FlexLayout>
		</StackLayout>
	);
};

const BoostedIdeaCard = (boostedIdea: TBoostedIdeaFieldsFragment) => {
	return (
		<LinkCard
			href={`/idea/${boostedIdea.ideaId}`}
			footer={<BoostedIdeaCardFooter {...boostedIdea} />}
		>
			<BaseHeading fontSize="md">{boostedIdea.idea?.name}</BaseHeading>
		</LinkCard>
	);
};

export default BoostedIdeaCard;
