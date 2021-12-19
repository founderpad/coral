import { PrimaryButton } from 'components/buttons';
import { Label } from 'components/labels';
import { useInsertInterestedIdeaMutation } from 'generated/api';
import React, { useState } from 'react';

const InterestedIdea = ({ ideaId }: { ideaId: string }) => {
	const [interested, setInterested] = useState(false);

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
			<Label color={'green.500'} ml={12}>
				You have expressed an interest in this idea
			</Label>
		);

	return (
		<PrimaryButton
			name={'interested-idea-button'}
			variant={'outline'}
			onClick={() => insertInterestedIdeaMutation()}
			ml={12}
		>
			I&apos;m interested
		</PrimaryButton>
	);
};

export default InterestedIdea;
