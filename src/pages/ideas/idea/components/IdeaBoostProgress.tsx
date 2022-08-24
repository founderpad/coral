import HeadingWithCaption from '@/components/heading/HeadingWithCaption';
import { Label } from '@/components/labels';
import { StackLayout } from '@/components/layouts';
import { formatDate } from '@/utils/validators';
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
			<StackLayout spacing={3}>
				<HeadingWithCaption
					headingProps={{ fontSize: 'sm' }}
					heading={`${remainingCurrencyAmount} remaining`}
					caption={`Boosted 
                            ${formatDate(createdAt, false, false, false)}`}
				/>

				<Label color="green.300" fontSize="small">
					${earned} earned by users
				</Label>
			</StackLayout>
		</StackLayout>
	);
};

export default IdeaBoostProgress;
