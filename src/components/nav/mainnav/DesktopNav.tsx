import { useColorModeValue } from '@chakra-ui/color-mode';
import Icon from '@chakra-ui/icon';
import { Link } from '@chakra-ui/layout';
import { BaseLabel } from 'components/labels/BaseLabel';
import { BoxLayout, FlexLayout, StackLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import BasePopover from 'components/popover/BasePopover';
import AppDivider from 'components/shared/AppDivider';
import useUserProfile from 'hooks/user';
import { usePathMatch } from 'hooks/util';
import React, { memo } from 'react';
import { IoAlertCircleOutline, IoChevronForwardSharp } from 'react-icons/io5';
import NavLink from '../components/NavLink';
import NavItems, { NavItem } from './NavItems';

const DesktopNav = (): JSX.Element => {
	const isComplete = useUserProfile().is_complete;

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
						<StackLayout spacing={4}>
							{navItem.children.map((child) => (
								<DesktopSubNav key={child.label} {...child} />
							))}
						</StackLayout>
					)}
				</BasePopover>
			))}
			{!isComplete && <ProfileNotSet />}
		</StackLayout>
	);
};

const DesktopSubNav = ({
	label,
	subLabel,
	href,
	icon,
	divider,
	color
}: NavItem) => (
	<React.Fragment>
		{divider && <AppDivider />}
		<NavLink
			href={href}
			role={'group'}
			display={'block'}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
		>
			<StackLayout direction={'row'} spacing={2}>
				<BoxLayout
					p={2}
					d={'flex'}
					alignItems={'baseline'}
					flexDirection={'column'}
					justifyContent={'start'}
					textAlign={'start'}
				>
					{/* {icon && <Icon as={icon} mr={2} />} */}
					<BaseLabel
						transition={'all .3s ease'}
						color={color ?? 'gray.900'}
						fontSize={'small'}
					>
						{label}
					</BaseLabel>
					<BaseLabel
						color={'gray.400'}
						fontWeight={'normal'}
						fontSize={'smaller'}
					>
						{subLabel}
					</BaseLabel>
				</BoxLayout>

				<FlexLayout
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{
						opacity: '100%',
						transform: 'translateX(0)'
					}}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon
						color={'gray.500'}
						w={4}
						h={4}
						as={IoChevronForwardSharp}
					/>
				</FlexLayout>
			</StackLayout>
		</NavLink>
	</React.Fragment>
);

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
