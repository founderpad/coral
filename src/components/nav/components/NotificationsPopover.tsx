import { BoxProps, Icon, IconButton } from '@chakra-ui/react';
import { IoNotificationsSharp, IoWarningSharp } from '@/components/icons';
import { Label } from '@/components/labels';
import { BoxLayout, StackLayout } from '@/components/layouts';
import BasePopover from '@/components/popover/BasePopover';
import { AppDivider, NoResults } from '@/components/shared';
import { css } from '@emotion/react';
import useUserProfile from '@/hooks/user';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';

type TNotificationType = 'PROFILE_NOT_SET' | 'COMMENT' | 'REPLY' | 'MESSAGE';
interface INotification {
	type: TNotificationType;
	title: string;
	color: BoxProps['color'];
	description: string;
	href: string;
}

const NotificationsPopover = () => {
	const isProfileComplete = useUserProfile()?.isComplete;
	const [notifications, setNotifications] = useState<INotification[]>([]);

	useEffect(() => {
		if (!isProfileComplete) {
			setNotifications((notifications) => [
				...notifications,
				{
					type: 'PROFILE_NOT_SET',
					title: 'Your profile is not set',
					color: 'red.500',
					description: 'Please update your profile',
					href: '/account/profile'
				}
			]);
		} else {
			setNotifications([]);
		}
	}, [isProfileComplete]);

	return (
		<BasePopover
			triggerEl={
				<IconButton
					css={css`
						position: relative !important;
					`}
					variant="link"
					aria-label="Notifications"
					mr={{ base: 2, sm: 4 }}
					icon={
						<React.Fragment>
							<Icon
								as={IoNotificationsSharp}
								fontSize="md"
								animation={
									notifications.length &&
									'bellshake 1s cubic-bezier(.36,.07,.19,.97) infinite'
								}
								css={css`
									backfacevisibility: hidden;
								`}
								transformOrigin="top left"
							/>
							{notifications.length > 0 && (
								<BoxLayout
									as="span"
									color="white"
									position="absolute"
									top={0}
									right={2}
									bgColor="red.500"
									zIndex={0}
									height="10px"
									width="10px"
									borderWidth={2}
									borderColor="white"
									p="1px"
								/>
							)}
						</React.Fragment>
					}
				/>
			}
			title="Notifications (1)"
			top="13px"
		>
			{notifications.length > 0 && (
				<StackLayout spacing={2}>
					{notifications.map((notification, index) => (
						<>
							<NotificationItem {...notification} />
							{index !== notifications.length - 1 && (
								<AppDivider />
							)}
						</>
					))}
				</StackLayout>
			)}

			{notifications.length < 1 && (
				<NoResults label="notifications" fontSize="xs" back={false} />
			)}
		</BasePopover>
	);
};

const NotificationItem = (notification: INotification) => {
	return (
		<NavLink
			href={notification.href}
			role="group"
			display="block"
			rounded="md"
			_hover={{
				bg: 'fpLightGrey.200'
			}}
			p={4}
			title={notification.title}
		>
			<StackLayout direction="row" spacing={4} alignItems="center">
				<Icon
					as={IoWarningSharp}
					color={notification.color}
					fontSize="lg"
				/>
				<StackLayout spacing={0}>
					<Label fontSize="small" color={notification.color}>
						{notification.title}
					</Label>
					<Label color="fpGrey.500" fontSize="xs">
						{notification.description}
					</Label>
				</StackLayout>
			</StackLayout>
		</NavLink>
	);
};

export default NotificationsPopover;
