import { PrimaryButton } from '@/components/buttons';
import { Label } from '@/components/labels';
import { AppDivider } from '@/components/shared';
import { useCreateInterestedIdeaMutation } from '@/generated/api';
import { useCurrentUser } from '@/hooks/auth';
import { useModalDrawer } from '@/hooks/util';
import { event } from '@/lib/ga';
import React, { useState } from 'react';
import useIdea from '../query/ideaQuery';

export const InterestedIdea = () => {
	const auth = useCurrentUser();
	const { idea, hasInterest } = useIdea();
	const { id, userId } = idea ?? {};
	const [interested, setInterested] = useState(!!hasInterest?.id);
	const { closeModalDrawer, openModalDrawer } = useModalDrawer();

	const [createInterestedIdeaMutation] = useCreateInterestedIdeaMutation({
		variables: {
			ideaId: id,
			targetUserId: userId
		},
		onCompleted: () => {
			closeModalDrawer();
			setInterested(true);
			event({
				action: 'User is interested in idea',
				params: {
					from_user_id: auth?.id,
					from_user_email: auth?.email,
					idea_id: id,
					to_idea_user_id: userId
				}
			});
		}
	});

	const onClick = () => {
		openModalDrawer({
			title: 'Confirm interest in idea',
			action: (
				<PrimaryButton
					name="confirm-idea-interest"
					onClick={() => createInterestedIdeaMutation()}
				>
					Confirm
				</PrimaryButton>
			),
			body: 'Are you sure you want to show interest in this idea? The idea creator will be able to see this.'
		});
	};

	if (auth?.id === userId) return null;

	return (
		<>
			<AppDivider />
			{interested ? (
				<Label color="green.500" alignItems="center" fontSize="small">
					You have expressed interest in this idea
				</Label>
			) : (
				<PrimaryButton
					name="show-interest"
					w="125px"
					// leftIcon={<IoStarSharp />}
					fontSize="xs"
					onClick={onClick}
					variant="outline"
				>
					Express interest
				</PrimaryButton>
			)}
		</>
	);
};

export default InterestedIdea;
