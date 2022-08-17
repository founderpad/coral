import { AlertFeedback } from '@/components/alert';
import { StackLayout } from '@/components/layouts';
import { AppDivider, Loading } from '@/components/shared';
import { useMobile, useQueryParam } from '@/hooks/util';
import React from 'react';
import IdeaDetails from './components/IdeaDetails';
import CommentsList from './components/comments/CommentsList';
import IdeaTitleHeader from './components/IdeaTitleHeader';
import { IdeaOverview } from './components/IdeaOverview';
import { IdeaUserActions } from './components/IdeaUserActions';
import InterestedIdea from './components/InterestedIdea';
import useIdea from './query/ideaQuery';
import BoostProgress from '../boost/BoostProgress';
import { CaptionLabel, Label } from '@/components/labels/Label';
import { formatDate, percentageBoosted } from '@/utils/validators';

const IdeaTab = () => {
	const data = useIdea();
	const isChangeSuccess = useQueryParam('exp_success');
	const isChangeError = useQueryParam('exp_error');
	const isMobile = useMobile();

	const remainingCurrencyAmount =
		data?.idea?.boosted_idea?.remainingCurrencyAmount;

	if (!data) return <Loading small />;
	// if (!idea.isPublished && auth.id !== idea.userId) Router.replace('/404');

	return (
		<StackLayout
			direction="column"
			flex={1}
			rounded="none"
			overflowY="hidden"
			spacing={0}
		>
			<StackLayout p={4} flex={1} display="flex" overflowY="auto">
				{isChangeSuccess && (
					<AlertFeedback
						status="success"
						message="Your idea has been updated successfully"
						w="auto"
						ml="auto"
					/>
				)}

				{isChangeError && (
					<AlertFeedback
						status="error"
						message={
							'Failed to update idea. Please try again later'
						}
						w="auto"
						ml="auto"
					/>
				)}

				<IdeaUserActions />
				<IdeaTitleHeader />
				{data.idea?.boosted_idea?.ideaId && (
					<>
						<AppDivider />
						<StackLayout direction="row">
							<StackLayout display="inline-block" direction="row">
								<BoostProgress
									remainingCurrencyAmount={
										remainingCurrencyAmount
									}
								/>
							</StackLayout>
							<StackLayout
								justifyContent="flex-start"
								spacing={2}
							>
								<CaptionLabel>
									Boosted{' '}
									{formatDate(
										data.idea?.boosted_idea?.createdAt,
										false,
										false,
										false
									)}
								</CaptionLabel>
								<Label
									color={
										percentageBoosted(
											remainingCurrencyAmount
										) === 100
											? 'green.300'
											: 'purple.500'
									}
									fontSize="small"
									textAlign="center"
									fontWeight="medium"
								>
									{percentageBoosted(
										remainingCurrencyAmount
									) === 100
										? 'Boost complete'
										: `${remainingCurrencyAmount} remaining`}
								</Label>
							</StackLayout>
						</StackLayout>
					</>
				)}
				<InterestedIdea />
				<AppDivider />
				<IdeaOverview />
				<AppDivider />
				<IdeaDetails />
				{!isMobile && <CommentsList />}
			</StackLayout>
		</StackLayout>
	);
};

export default IdeaTab;
