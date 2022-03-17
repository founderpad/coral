import { Avatar } from '@chakra-ui/avatar';
import { AvatarProps, StackProps, useBreakpointValue } from '@chakra-ui/react';
import { CaptionLabel, Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { useCurrentUser } from '@hooks/auth';
import React, { memo } from 'react';

type Props = AvatarProps & {
	subtitle?: React.ReactNode;
	children?: string;
	createdAt?: string;
	direction?: StackProps['direction'];
	badge?: any;
	actions?: React.ReactNode;
};

export const UserAvatar = (props: Props) => {
	const avatarSize = useBreakpointValue({ base: 'sm', sm: 'md' });

	const { size, badge, ...rest } = props;
	return (
		<Avatar
			{...rest}
			src={
				rest.src?.includes('s.gravatar.com/avatar')
					? undefined
					: rest.src
			}
			size={size ?? avatarSize}
			rounded="full"
			bg="fpGrey.300"
			color="white"
			ignoreFallback={false}
		>
			{badge}
		</Avatar>
	);
};

export const UserAvatarDetails = ({
	subtitle,
	title,
	src,
	createdAt,
	size = 'md',
	direction = 'row',
	fontSize = 'small',
	actions
}: Props) => {
	return (
		<StackLayout align="center" direction={direction} spacing={2}>
			<UserAvatar src={src} size={size} direction={direction} />
			<StackLayout
				spacing={0}
				ml={2}
				alignItems={direction === 'column' ? 'center' : 'flex-start'}
				flex={1}
			>
				<FlexLayout alignItems="baseline" lineHeight="tall" flex={1}>
					<Label
						fontWeight="medium"
						fontSize={fontSize}
						css={{ whiteSpace: 'normal' }}
						wordBreak="break-all"
						noOfLines={1}
						mr={1}
						isTruncated
						flex={1}
						overflowX="hidden"
					>
						{title}
					</Label>
					<FlexLayout alignItems="inherit">{actions}</FlexLayout>
				</FlexLayout>
				{subtitle && (
					<Label color="fpGrey.500" fontSize="xs">
						{subtitle}
					</Label>
				)}
				{createdAt && (
					<CaptionLabel color="fpGrey.400">{createdAt}</CaptionLabel>
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
	}) => {
		const user = useCurrentUser();
		// const { displayName, lastName, avatarUrl, email } = user;

		if (user)
			return (
				<UserAvatarDetails
					// name={`${user?.displayName} ${user?.lastName}`}
					title={user?.displayName}
					subtitle={user?.email}
					src={user?.avatarUrl || undefined}
					size={size}
					direction={direction}
				/>
			);
		return null;
	}
);

export const CurrentUserAvatar = memo(
	({ size = 'sm' }: { size?: AvatarProps['size'] }) => {
		// const { avatarUrl } = useCurrentUser();
		return (
			<UserAvatar
				src={useCurrentUser()?.avatarUrl || undefined}
				size={size}
			/>
		);
	}
);
