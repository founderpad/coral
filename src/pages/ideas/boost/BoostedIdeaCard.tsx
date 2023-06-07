import BaseHeading from '@/components/heading/BaseHeading';
import { Label } from '@/components/labels';
// import { CaptionLabel } from '@/components/labels/Label';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { BaseLink } from '@/components/links';
import { TBoostedIdeaFieldsFragment } from '@/generated/api';
import { percentageBoosted } from '@/utils/validators';
import React from 'react';
import BoostProgress from './BoostProgress';

const BoostedIdeaCardFooter = (boostedIdea: TBoostedIdeaFieldsFragment) => {
	const remainingCurrencyAmount: string =
		boostedIdea?.remainingCurrencyAmount;

	return (
		<StackLayout>
			<BoostProgress remainingCurrencyAmount={remainingCurrencyAmount} />
			<Label
				color={
					percentageBoosted(remainingCurrencyAmount) === 100
						? 'green.300'
						: 'purple.500'
				}
				fontSize="small"
				textAlign="center"
				fontWeight="medium"
			>
				{percentageBoosted(remainingCurrencyAmount) === 100
					? 'Boost complete'
					: `${boostedIdea?.remainingCurrencyAmount} remaining`}
			</Label>
		</StackLayout>
	);
};

const BoostedIdeaCard = (boostedIdea: TBoostedIdeaFieldsFragment) => (
	<StackLayout
		href={`/idea/${boostedIdea.ideaId}`}
		as={BaseLink}
		_hover={{
			bg: 'fpLightGrey.200'
		}}
		py={4}
		px={{ base: 0, md: 4 }}
	>
		<FlexLayout flexDirection="column" flex={1}>
			<BaseHeading
				fontSize="md"
				mx="auto"
				w="full"
				overflow="hidden"
				css={{ whiteSpace: 'normal' }}
				wordBreak="break-word"
				noOfLines={1}
				title={boostedIdea.idea?.name}
			>
				{boostedIdea.idea?.name}
			</BaseHeading>
			{/* <CaptionLabel mx="auto">
				Boosted {formatDate(boostedIdea.createdAt, false, false, false)}
			</CaptionLabel> */}
		</FlexLayout>
		{/* <BoostedIdeaCardFooter {...boostedIdea} /> */}
	</StackLayout>
);

export default BoostedIdeaCard;
