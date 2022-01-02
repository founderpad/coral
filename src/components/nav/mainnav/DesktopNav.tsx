import Icon from '@chakra-ui/icon';
import { Link } from '@chakra-ui/layout';
import { StackLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import BasePopover from 'components/popover/BasePopover';
import useUserProfile from 'hooks/user';
import { usePathMatch } from 'hooks/util';
import React, { memo } from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';
import NavItems from './NavItems';
import { SubNav } from './SubNav';

const DesktopNav = memo(() => {
	return (
		<StackLayout
			direction={'row'}
			alignItems={'center'}
			spacing={4}
			ml={'auto'}
			display={{ base: 'none', md: 'flex' }}
			position={'relative'}
		>
			{NavItems.map((navItem) => (
				<BasePopover
					key={navItem.key}
					triggerEl={
						<Link
							px={2}
							d={'flex'}
							href={navItem.href ?? '#'}
							fontSize={'xs'}
							fontWeight={
								usePathMatch(navItem.href) ? 'medium' : 'normal'
							}
							alignItems={'center'}
							color={
								usePathMatch(navItem.href)
									? 'gray.900'
									: 'gray.500'
							}
							_hover={{
								textDecoration: 'none',
								color: 'gray.900'
							}}
						>
							{navItem.label}
							{navItem.rightIcon && (
								<Icon
									color={'inherit'}
									ml={1}
									as={navItem.rightIcon}
								/>
							)}
						</Link>
					}
				>
					{navItem.children && (
						<StackLayout spacing={2}>
							{navItem.children.map((child) => (
								<SubNav key={child.label} {...child} />
							))}
						</StackLayout>
					)}
				</BasePopover>
			))}
			{!useUserProfile().is_complete && <ProfileNotSet />}
		</StackLayout>
	);
});

const ProfileNotSet = memo(
	(): JSX.Element => (
		<BaseLink
			title={'Update your profile'}
			href={'/account/profile'}
			position={'fixed'}
			right={4}
			color={'red.500'}
			_hover={{ color: 'red.700' }}
			fontSize={'sm'}
		>
			<Icon as={IoAlertCircleOutline} mr={1} fontSize={'lg'} />
			Profile not set
		</BaseLink>
	)
);

export default DesktopNav;
