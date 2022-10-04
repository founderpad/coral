import { Label } from '@/components/labels';
import { CaptionLabel } from '@/components/labels/Label';
import { StackLayout } from '@/components/layouts';
import NavLink from '@/components/nav/components/NavLink';
import { TNotificationFieldsFragment } from '@/generated/api';
import { formatDate } from '@/utils/validators';

const NotificationItem = (notification: TNotificationFieldsFragment) => (
	<NavLink
		href={notification.href ?? ''}
		role="group"
		display="block"
		rounded="none"
		_hover={{
			bg: 'fpLightGrey.200'
		}}
		p={{ base: 2, md: 4 }}
		title={notification.value}
		// bg={notification.read ? 'inherit' : 'fpPrimary.50'}
		borderBottomWidth={1}
	>
		<StackLayout direction="row" spacing={4}>
			{/* <Icon as={IoWarningSharp} fontSize="lg" /> */}
			<StackLayout spacing={0} flex={1}>
				<Label fontSize="small">{notification.value}</Label>
			</StackLayout>
			<CaptionLabel>{formatDate(notification.createdAt)}</CaptionLabel>
		</StackLayout>
	</NavLink>
);

export default NotificationItem;
