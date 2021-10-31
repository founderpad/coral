import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex } from '@chakra-ui/layout';
import { AvatarProps, useBreakpointValue } from '@chakra-ui/react';
import { Label, SubLabel } from 'components/labels';
import { useCurrentUser } from 'hooks/auth';
import React, { memo } from 'react';

type Props = AvatarProps & {
	name: string;
	email?: string;
	children?: string;
	createdAt?: string;
};

export const UserAvatar = (props: AvatarProps): JSX.Element => {
	const avatarSize = useBreakpointValue({ base: 'sm', sm: 'md' });

	const { rounded = 'full', size, ...rest } = props;
	return <Avatar {...rest} size={size ?? avatarSize} rounded={rounded} />;
};

export const UserAvatarDetails = ({
	email,
	name,
	src,
	createdAt
}: Props): JSX.Element => {
	return (
		<Flex align={'center'}>
			<UserAvatar src={src} />
			<Box ml={2}>
				<Label label={name} fontWeight={'medium'} />
				{email && <SubLabel label={email} color={'gray.500'} />}
				{createdAt && <SubLabel label={createdAt} />}
			</Box>
		</Flex>
	);
};

export const CurrentUserAvatarDetails = memo((): JSX.Element => {
	const user = useCurrentUser();
	if (user)
		return (
			<UserAvatarDetails
				name={user.first_name + ' ' + user.last_name}
				email={user.account.email}
				src={user.avatar_url}
			/>
		);
	return null;
});
