import { BaseButton, SubmitButton } from '@/components/buttons';
import { BaseForm } from '@/components/form';
import { FormTextarea } from '@/components/form/inputs/FormField';
import { CaptionLabel, Label } from '@/components/labels';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { AppDivider } from '@/components/shared';
import {
	CommentsForIdeaDocument,
	TIdeaQuery,
	TIdea_Comments_Set_Input,
	usePostCommentMutation
} from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import { useModalDrawer } from '@/hooks/util';
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Icon
} from '@chakra-ui/react';
import React from 'react';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import IdeaBoostProgress from '../IdeaBoostProgress';

const BoostEarnButton = (data: TIdeaQuery) => {
	const { openModalDrawer, closeModalDrawer } = useModalDrawer();
	const userId = useAuth().getUser()?.id;
	const [postCommentMutation] = usePostCommentMutation();

	const { hasBoostedFeedback = [] } = data;
	const isBoostedFeedback = hasBoostedFeedback?.length > 0;

	const onPostBoostedFeedback = (comment: TIdea_Comments_Set_Input) => {
		postCommentMutation({
			variables: {
				ideaComment: {
					ideaId: data.idea?.id,
					targetUserId: data.idea?.userId,
					value: comment.value,
					isBoost: !!data.idea?.boosted_idea?.ideaId
				},
				ideaId: data.idea?.id
			},
			onCompleted: (_data) => {
				closeModalDrawer();
			},
			refetchQueries: [
				{
					query: CommentsForIdeaDocument,
					variables: {
						ideaId: data.idea?.id
					}
				}
			]
		});
	};

	const onBoostEarnClick = () => {
		openModalDrawer({
			title: 'Boost feedback for $0.05',
			showCancel: false,
			body: (
				<React.Fragment>
					<Label fontSize="xs">
						Boost this idea by providing helpful feedback and
						opinions, and stand to earn $0.05 from your contribution
						if your feedback is approved. <br />
						<br /> You will not be able to change this later.
						<br />
					</Label>
					<BaseForm<TIdea_Comments_Set_Input>
						name="boost-feedback-form"
						onSubmit={onPostBoostedFeedback}
					>
						{({
							register,
							control,
							resetField,
							formState: { errors }
						}) => (
							<FormTextarea<TIdea_Comments_Set_Input>
								id="value"
								name="value"
								placeholder="Boosted idea feedback (max. 200 characters)"
								register={register}
								control={control}
								rules={{
									required:
										'You must provide feedback for this idea (max. 200 characters)',
									maxLength: {
										value: 200,
										message:
											'Your boosted feedback can not be more than 200 characters'
									}
								}}
								errors={errors}
								onClear={() =>
									resetField('value', {
										defaultValue: ''
									})
								}
							/>
						)}
					</BaseForm>
				</React.Fragment>
			),
			action: (
				<SubmitButton
					name="open-modal-drawer-edit-idea-button"
					form="boost-feedback-form"
					label="Boost"
					leftIcon={<Icon as={AiTwotoneThunderbolt} />}
					colorScheme="purple"
				/>
			)
		});
	};

	if (data.idea?.boosted_idea?.ideaId) {
		return (
			<React.Fragment>
				<AppDivider />
				<StackLayout direction={{ base: 'column', md: 'row' }}>
					<IdeaBoostProgress
						remainingCurrencyAmount={
							data.idea?.boosted_idea?.remainingCurrencyAmount
						}
						createdAt={data.idea?.boosted_idea?.createdAt}
					/>
					<AppDivider orientation="vertical" />

					<FlexLayout flexDirection="column" justifyContent="center">
						{data.idea?.userId === userId && (
							<>
								<BaseButton
									name="boost-comment"
									colorScheme="purple"
									p={6}
									flexDirection="column"
									width="fit-content"
									mx="auto"
									onClick={onBoostEarnClick}
								>
									Boost
									<CaptionLabel color="white" mt={1}>
										earn $0.05
									</CaptionLabel>
								</BaseButton>
								<CaptionLabel mt={4}>
									All comments must be approved before they
									are accepted and you can earn money.
								</CaptionLabel>
							</>
						)}

						{isBoostedFeedback && (
							<Alert
								status={
									hasBoostedFeedback[0].status === 'APPROVED'
										? 'success'
										: 'info'
								}
								variant="subtle"
								flexDirection="column"
								alignItems="center"
								justifyContent="center"
								textAlign="center"
								px={4}
								h="full"
								rounded="md"
							>
								<AlertIcon mr={0} />
								<AlertTitle mt={4} fontSize="sm">
									{hasBoostedFeedback[0].status === 'APPROVED'
										? 'Your boosted feedback was approved'
										: 'Your boosted feedback is pending approval'}
								</AlertTitle>
								<AlertDescription fontSize="xs">
									{hasBoostedFeedback[0].status ===
										'APPROVED' &&
										'You have earned $0.05 from this idea.'}
								</AlertDescription>
							</Alert>
						)}
					</FlexLayout>
				</StackLayout>
			</React.Fragment>
		);
	}

	return null;
};

export default BoostEarnButton;
