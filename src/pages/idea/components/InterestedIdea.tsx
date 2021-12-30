import Icon from '@chakra-ui/icon';
import { PrimaryButton } from 'components/buttons';
import { Label } from 'components/labels';
import { useCreateInterestedIdeaMutation } from 'generated/api';
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
	const [interested, setInterested] = useState(hasInterest);

	const [createInterestedIdeaMutation] = useCreateInterestedIdeaMutation({
		variables: {
			ideaId,
			targetUserId: ideaUserId
		},
		onCompleted: () => {
			setInterested(true);
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
