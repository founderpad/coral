import Icon from '@chakra-ui/icon';
import { PrimaryButton } from 'components/buttons';
import { SubLabel } from 'components/labels';
import { useInsertInterestedIdeaMutation } from 'generated/api';
import React, { useState } from 'react';
import { IoStarSharp } from 'react-icons/io5';

const InterestedIdea = ({
	ideaId,
	hasInterest
}: {
	ideaId: string;
	hasInterest: boolean;
}): JSX.Element => {
	const [interested, setInterested] = useState(hasInterest);

	const [insertInterestedIdeaMutation] = useInsertInterestedIdeaMutation({
		variables: {
			ideaId
		},
		// refetchQueries: [
		// 	{
		// 		query: GET_COMMENTS_FOR_IDEA,
		// 		variables: {
		// 			ideaId: router.query.id
		// 		}
		// 	}
		// ],
		onCompleted: () => {
			setInterested(true);
		}
	});

	if (interested)
		return (
			<SubLabel color={'green.500'} alignItems={'center'}>
				You have expressed interest in this idea
			</SubLabel>
		);

	return (
		<PrimaryButton
			name={'interested-idea-button'}
			variant={'outline'}
			onClick={() => insertInterestedIdeaMutation()}
			fontSize={{ base: 'xs' }}
			alignItems={'center'}
			alignContent={'baseline'}
			leftIcon={<Icon as={IoStarSharp} />}
		>
			I&apos;m Interested
		</PrimaryButton>
	);
};

export default InterestedIdea;
