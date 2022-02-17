import Icon from '@chakra-ui/icon';
import { Link } from '@chakra-ui/layout';
import { StackLayout } from '@components/layouts';
import BasePopover from '@components/popover/BasePopover';
// import useUserProfile from '@hooks/user';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import NavItems from './NavItems';
import { SubNav } from './SubNav';

const DesktopNav = memo(() => {
	// const isProfileComplete = useUserProfile()?.isComplete;
	const router = useRouter();

	const getCurrentPath = (href: string) =>
		href.includes(router.pathname) ?? '';

	return (
		<StackLayout
			direction={'row'}
			alignItems={'center'}
			spacing={4}
			ml={'auto'}
			display={{ base: 'none', md: 'flex' }}
			position={'relative'}
		>
			{NavItems.map((navItem, key) => (
				<BasePopover
					key={key}
					triggerEl={
						<Link
							px={2}
							d={'flex'}
							href={navItem.href ?? '#'}
							fontSize={'xs'}
							fontWeight={
								getCurrentPath(navItem.href ?? '')
									? 'medium'
									: 'normal'
							}
							alignItems={'center'}
							color={
								getCurrentPath(navItem.href ?? '')
									? 'fpGrey.900'
									: 'fpGrey.500'
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
					{navItem.items && (
						<StackLayout spacing={2}>
							{navItem.items.map((item, key) => (
								<SubNav {...item} key={key} />
							))}
						</StackLayout>
					)}
				</BasePopover>
			))}
			{/* {!isProfileComplete && <ProfileNotSet />} */}
		</StackLayout>
	);
});

export default DesktopNav;
