import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { AvatarProps, useBreakpointValue } from '@chakra-ui/react';
import { useCurrentUser } from 'hooks/auth';
import React, { memo } from 'react';

type Props = AvatarProps & {
	name: string;
	email: string;
	children?: string;
};

const UserAvatar = (props: AvatarProps): JSX.Element => {
	const avatarSize = useBreakpointValue({ base: 'sm', sm: 'md' });

	const { rounded, size, ...rest } = props;
	return (
		<Avatar
			{...rest}
			size={size ?? avatarSize}
			rounded={rounded ?? 'full'}
		/>
	);
};

const UserAvatarDetails = ({ email, name, src }: Props): JSX.Element => {
	return (
		<Flex align={'center'}>
			<UserAvatar src={src} />
			<Box ml={4}>
				<Text fontSize={'sm'} fontWeight={'500'} color={'fpGrey.900'}>
					{name}
				</Text>
				<Text fontSize={'sm'} fontWeight={'500'} color={'fpGrey.300'}>
					{email}
				</Text>
			</Box>
		</Flex>
	);
};

const CurrentUserAvatarDetails = memo((): JSX.Element => {
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

export { UserAvatarDetails, CurrentUserAvatarDetails };
export default UserAvatar;
