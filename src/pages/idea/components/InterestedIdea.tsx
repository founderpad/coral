import Icon from '@chakra-ui/icon';
import { PrimaryButton } from 'components/buttons';
import { Label } from 'components/labels';
import { useCreateInterestedIdeaMutation } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import * as ga from 'lib/ga';
import React, { useState } from 'react';
import { IoStarSharp } from 'react-icons/io5';

const InterestedIdea = ({
	ideaId,
	ideaUserId,
	hasInterest
}: {
	ideaId: string;
	ideaUserId: string;
	hasInterest: boolean;
}) => {
	const user = useCurrentUser();
	const [interested, setInterested] = useState(hasInterest);

	const [createInterestedIdeaMutation] = useCreateInterestedIdeaMutation({
		variables: {
			ideaId,
			targetUserId: ideaUserId
		},
		onCompleted: () => {
			setInterested(true);
			ga.event({
				action: 'User is interested in idea',
				params: {
					from_user_id: user.id,
					from_user_email: user.account.email,
					idea_id: ideaId,
					to_idea_user_id: ideaUserId
				}
			});
		}
	});

	if (interested)
		return (
			<Label color={'green.500'} alignItems={'center'} fontSize={'small'}>
				You have expressed interest in this idea
			</Label>
		);

	return (
		<PrimaryButton
			name={'interested-idea-button'}
			variant={'outline'}
			onClick={() => createInterestedIdeaMutation()}
			alignItems={'center'}
			position={'relative'}
			w={'fit-content'}
			size={'lg'}
			fontSize={'small'}
		>
			<Icon
				as={IoStarSharp}
				position={'absolute'}
				color={'gold'}
				right={0}
				top={0}
				fontSize={'large'}
				transform={'translateY(-50%)translateX(50%)'}
			/>
			I&apos;m Interested
		</PrimaryButton>
	);
};

export default InterestedIdea;
