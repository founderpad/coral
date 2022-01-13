import Icon from '@chakra-ui/icon';
import { PrimaryButton } from 'components/buttons';
import { IoStarSharp } from 'components/icons';
import { Label } from 'components/labels';
import IdeaContext from 'context/idea/IdeaContext';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { useCreateInterestedIdeaMutation } from 'generated/api';
import { useCurrentUser } from 'hooks/auth';
import { event } from 'lib/ga';
import React, { useContext, useState } from 'react';

export const InterestedIdea = () => {
	const auth = useCurrentUser();
	const {
		data,
		data: { idea }
	} = useContext(IdeaContext);
	const { hasInterest } = data;
	const { id, userId } = idea;
	const [interested, setInterested] = useState(!!hasInterest?.id);
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const [createInterestedIdeaMutation] = useCreateInterestedIdeaMutation({
		variables: {
			ideaId: id,
			targetUserId: userId
		},
		onCompleted: () => {
			setModalDrawer(false);
			setInterested(true);
			event({
				action: 'User is interested in idea',
				params: {
					from_user_id: auth.id,
					from_user_email: auth.email,
					idea_id: id,
					to_idea_user_id: userId
				}
			});
		}
	});

	const onClick = () => {
		setModalDrawer({
			title: 'Interested in idea',
			isOpen: true,
			actions: (
				<PrimaryButton
					name={'confirm-idea-interest'}
					onClick={() => createInterestedIdeaMutation()}
					size={'xs'}
				>
					Confirm interest
				</PrimaryButton>
			),
			body: 'Are you sure you want to show interest in this idea? The idea creator will be able to contact you.',
			noBtnLabel: 'Cancel',
			hideFooter: true
		});
	};

	if (auth.id === userId) return null;

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
			onClick={onClick}
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
