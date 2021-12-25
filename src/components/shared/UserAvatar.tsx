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
			bg={'fpPrimary.500'}
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
	direction = 'row'
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
					fontSize={'small'}
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
		const {
			first_name,
			last_name,
			avatar_url,
			account: { email }
		} = user;

		if (user)
			return (
				<UserAvatarDetails
					name={`${first_name} ${last_name}`}
					email={email}
					src={avatar_url}
					size={size}
					direction={direction}
				/>
			);
		return null;
	}
);

export const CurrentUserAvatar = memo(
	({ small }: { small?: boolean }): JSX.Element => {
		const { avatar_url } = useCurrentUser();
		return <UserAvatar src={avatar_url} size={small ? 'xs' : 'inherit'} />;
	}
);
