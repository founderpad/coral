import { Button } from '@chakra-ui/react';
import { PrimaryButton } from '@components/buttons';
import { Label } from '@components/labels';
import { AppDivider } from '@components/shared';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { useCreateInterestedIdeaMutation } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { event } from '@lib/ga';
import React, { useContext, useState } from 'react';
import { IoStarOutline } from 'react-icons/io5';
import useIdea from '../query/ideaQuery';

export const InterestedIdea = () => {
	const auth = useCurrentUser();
	const { idea, hasInterest } = useIdea();
	const { id, userId } = idea ?? {};
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
					from_user_id: auth?.id,
					from_user_email: auth?.email,
					idea_id: id,
					to_idea_user_id: userId
				}
			});
		}
	});

	const onClick = () => {
		setModalDrawer({
			title: 'Confirm interest in idea',
			isOpen: true,
			action: (
				<PrimaryButton
					name="confirm-idea-interest"
					onClick={() => createInterestedIdeaMutation()}
				>
					Confirm
				</PrimaryButton>
			),
			body: 'Are you sure you want to show interest in this idea? The idea creator will be able to contact you.'
		});
	};

	if (auth?.id === userId) return null;

	return (
		<>
			<AppDivider />
			{interested ? (
				<Label
					color={'green.500'}
					alignItems={'center'}
					fontSize={'small'}
				>
					You have expressed interest in this idea
				</Label>
			) : (
				// <PrimaryButton
				// 	name={'interested-idea-button'}
				// 	variant={'outline'}
				// 	onClick={onClick}
				// 	alignItems={'center'}
				// 	position={'relative'}
				// 	w={'fit-content'}
				// 	size={'sm'}
				// 	fontSize={'xs'}
				// 	px={4}
				// 	py={1}
				// >
				// 	{/* <Icon
				// 		as={IoStarSharp}
				// 		position={'absolute'}
				// 		color={'gold'}
				// 		right={0}
				// 		top={0}
				// 		fontSize={'large'}
				// 		transform={'translateY(-50%)translateX(50%)'}
				// 	/> */}
				// 	I&apos;m Interested
				// </PrimaryButton>
				<Button
					leftIcon={<IoStarOutline />}
					w={'fit-content'}
					bg={'transparent'}
					variant={'outline'}
					px={4}
					py={2}
					color={'fpPrimary.500'}
					fontSize={'sm'}
					onClick={onClick}
				>
					I&apos;m interested
				</Button>
			)}
		</>
	);
};

export default InterestedIdea;
