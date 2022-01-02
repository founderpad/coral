import { Icon, IconButton } from '@chakra-ui/react';
import BasePopover from 'components/popover/BasePopover';
import { NoResults } from 'components/shared';
import React from 'react';
import { IoNotificationsSharp } from 'react-icons/io5';

const NotificationsPopover = () => {
	return (
		<BasePopover
			triggerEl={
				<IconButton
					aria-label={'Notifications'}
					variant={'link'}
					alignItems={'center'}
				>
					<Icon as={IoNotificationsSharp} />
				</IconButton>
			}
		>
			<NoResults label={'notifications'} fontSize={'xs'} />
		</BasePopover>
	);
};

export default NotificationsPopover;
