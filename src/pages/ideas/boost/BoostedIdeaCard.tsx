import BaseHeading from '@/components/heading/BaseHeading';
import { Label } from '@/components/labels';
import { CaptionLabel } from '@/components/labels/Label';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { BaseLink } from '@/components/links';
import { TBoostedIdeaFieldsFragment } from '@/generated/api';
import { formatDate } from '@/utils/validators';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import React from 'react';

const BoostedIdeaCardFooter = (boostedIdea: TBoostedIdeaFieldsFragment) => {
	// const remainingCurrencyAmount: String =
	// 	boostedIdea?.remainingCurrencyAmount;

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

	return (
		<StackLayout>
			<CircularProgress
				value={Math.floor(100 - parseFloat(percentageBoosted))}
				size="90px"
				color="purple.500"
				mx="auto"
			>
				<CircularProgressLabel fontSize="md" color="purple.500">
					{Math.floor(100 - parseFloat(percentageBoosted))}%
				</CircularProgressLabel>
			</CircularProgress>
			<Label color="purple.500" fontSize="small" textAlign="center">
				{boostedIdea?.remainingCurrencyAmount}
			</Label>
		</StackLayout>
	);
};

const BoostedIdeaCard = (boostedIdea: TBoostedIdeaFieldsFragment) => {
	// return (
	// 	<LinkCard
	// 		href={`/idea/${boostedIdea.ideaId}`}
	// 		footer={<BoostedIdeaCardFooter {...boostedIdea} />}
	// 	>
	// 		<BaseHeading fontSize="md" mx="auto">
	// 			{boostedIdea.idea?.name}
	// 		</BaseHeading>
	// 		<CaptionLabel mx="auto">
	// 			Boosted {formatDate(boostedIdea.createdAt)}
	// 		</CaptionLabel>
	// 	</LinkCard>
	// );

	return (
		<StackLayout
			href={`/idea/${boostedIdea.ideaId}`}
			as={BaseLink}
			_hover={{
				bg: 'fpLightGrey.200'
			}}
			py={4}
			px={{ base: 0, md: 4 }}
		>
			<FlexLayout flexDirection="column">
				<BaseHeading fontSize="md" mx="auto">
					{boostedIdea.idea?.name}
				</BaseHeading>
				<CaptionLabel mx="auto">
					Boosted {formatDate(boostedIdea.createdAt)}
				</CaptionLabel>
			</FlexLayout>
			<BoostedIdeaCardFooter {...boostedIdea} />
		</StackLayout>
	);
};

export default BoostedIdeaCard;
