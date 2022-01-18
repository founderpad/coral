import { PrimaryButton } from '@components/buttons';
import { Label } from '@components/labels';
import { useFollowUserMutation } from '@generated/api';
import React, { useCallback, useState } from 'react';

const AddFollower = ({ userId }: { userId: string }) => {
	const [followed, setFollowed] = useState(false);
	const [followUser] = useFollowUserMutation({
		variables: {
			followingId: userId
		},
		onCompleted: () => {
			setFollowed(true);
		}
	});

	const onClick = useCallback(() => {
		followUser();
	}, [followed]);

	if (followed) {
		return (
			<Label color={'green.500'} alignItems={'center'} fontSize={'small'}>
				A follow request has been sent to this user
			</Label>
		);
	}

	return (
		<PrimaryButton
			name={'Add to network'}
			fontSize={'xs'}
			onClick={onClick}
		>
			Add to network
		</PrimaryButton>
	);
};

export default AddFollower;
