import { useColorModeValue } from '@chakra-ui/color-mode';
import Icon from '@chakra-ui/icon';
import { Link } from '@chakra-ui/layout';
import { LinkButton } from 'components/buttons/BaseButton';
import { BaseLabel } from 'components/labels/BaseLabel';
import { BoxLayout, FlexLayout, StackLayout } from 'components/layouts';
import BasePopover from 'components/popover/BasePopover';
import useUserProfile from 'hooks/user';
import { usePathMatch } from 'hooks/util';
import React from 'react';
import { IoChevronForwardSharp } from 'react-icons/io5';
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
							p={2}
							href={navItem.href ?? '#'}
							fontSize={'sm'}
							fontWeight={
								usePathMatch(navItem.href) ? 'medium' : 'normal'
							}
							color={
								usePathMatch(navItem.href)
									? 'black'
									: 'gray.500'
							}
							_hover={{
								textDecoration: 'none',
								color: 'black'
							}}
						>
							{navItem.label}
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

const DesktopSubNav = ({ label, subLabel, href, icon }: NavItem) => (
	<React.Fragment>
		<NavLink
			href={href}
			role={'group'}
			display={'block'}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
		>
			<StackLayout direction={'row'} spacing={2}>
				<BoxLayout alignItems={'center'} p={2}>
					{icon && <Icon as={icon} mr={2} />}
					<BoxLayout
						p={0}
						flexDirection={'column'}
						alignItems={'flex-start'}
						justifyContent={'flex-start'}
					>
						<BaseLabel
							transition={'all .3s ease'}
							label={label}
							color={'black'}
							_groupHover={{ color: 'gray.900' }}
						/>
						<BaseLabel
							label={subLabel}
							color={'gray.400'}
							fontWeight={'normal'}
						/>
					</BoxLayout>
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

const ProfileNotSet = (): JSX.Element => (
	<LinkButton
		name={'profile-not-set-button'}
		position={'fixed'}
		right={4}
		colorScheme={'red'}
		variant={'outline'}
		href={'/app/account/profile'}
	>
		Profile not set
	</LinkButton>
);

export default DesktopNav;
