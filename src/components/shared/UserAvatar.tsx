import { Avatar } from '@chakra-ui/avatar';
import { AvatarProps, StackProps, useBreakpointValue } from '@chakra-ui/react';
import { CaptionLabel, Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import { useCurrentUser } from 'hooks/auth';
import React, { memo } from 'react';

type Props = AvatarProps & {
	email?: string;
	children?: string;
	createdAt?: string;
	direction?: StackProps['direction'];
};

export const UserAvatar = (props: Props): JSX.Element => {
	const avatarSize = useBreakpointValue({ base: 'sm', sm: 'md' });

	const { size, ...rest } = props;
	return (
		<Avatar
			{...rest}
			name={'user-avatar'}
			size={size ?? avatarSize}
			rounded={'full'}
			bg={'gray.300'}
			color={'white'}
		/>
	);
};

export const UserAvatarDetails = ({
	email,
	name,
	src,
	createdAt,
	size = 'md',
	direction = 'row',
	fontSize = 'small'
}: Props): JSX.Element => {
	return (
		<StackLayout
			align={'center'}
			wordBreak={'break-all'}
			direction={direction}
			spacing={2}
		>
			<UserAvatar src={src} size={size} direction={direction} />
			<StackLayout
				spacing={0}
				ml={2}
				alignItems={direction === 'column' ? 'center' : 'flex-start'}
			>
				<Label
					fontWeight={'medium'}
					fontSize={fontSize}
					wordBreak={'break-all'}
				>
					{name}
				</Label>
				{email && (
					<Label color={'gray.500'} fontSize={'xs'}>
						{email}
					</Label>
				)}
				{createdAt && (
					<CaptionLabel color={'gray.400'}>{createdAt}</CaptionLabel>
				)}
			</StackLayout>
		</StackLayout>
	);
};

export const CurrentUserAvatarDetails = memo(
	({
		size,
		direction
	}: {
		size?: Props['size'];
		direction?: StackProps['direction'];
	}): JSX.Element => {
		const user = useCurrentUser();
		// const { firstName, lastName, avatarUrl, email } = user;

		console.log('user: ', user);

		if (user)
			return (
				<UserAvatarDetails
					// name={`${user?.firstName} ${user?.lastName}`}
					name={user?.displayName}
					email={user?.email}
					src={user?.avatarUrl}
					size={size}
					direction={direction}
				/>
			);
		return null;
	}
);

export const CurrentUserAvatar = memo(
	({ size = 'sm' }: { size?: AvatarProps['size'] }): JSX.Element => {
		const { avatarUrl } = useCurrentUser();
		return <UserAvatar src={avatarUrl} size={size} />;
	}
);
