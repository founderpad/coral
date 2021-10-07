import { useColorModeValue } from '@chakra-ui/color-mode';
import Icon from '@chakra-ui/icon';
import { Flex, Link } from '@chakra-ui/layout';
import { LinkButton } from 'components/buttons/BaseButton';
import { BaseLabel } from 'components/labels/BaseLabel';
import { BoxLayout, StackLayout } from 'components/layouts';
import BasePopover from 'components/popover/BasePopover';
import useUserProfile from 'hooks/user';
import { useRouter } from 'next/router';
import React from 'react';
import { IoChevronForwardSharp } from 'react-icons/io5';
import NavLink from '../components/NavLink';
import NavItems, { NavItem } from './NavItems';

const DesktopNav = (): JSX.Element => {
	const router = useRouter();
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
							fontWeight={500}
							color={
								router.pathname === navItem.href
									? 'fpPrimary.300'
									: 'fpGrey.900'
							}
							_hover={{
								textDecoration: 'none',
								color: 'fpGrey.900'
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
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}
		>
			<StackLayout direction={'row'} spacing={2}>
				<BoxLayout p={0} alignItems={'center'}>
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
							color={'fpGrey.900'}
							fontWeight={500}
							_groupHover={{ color: 'fpGrey.900' }}
						/>
						<BaseLabel label={subLabel} color={'fpGrey.300'} />
					</BoxLayout>
				</BoxLayout>

				<Flex
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
						color={'fpGrey.300'}
						w={4}
						h={4}
						as={IoChevronForwardSharp}
					/>
				</Flex>
			</StackLayout>
		</NavLink>
	</React.Fragment>
);

const ProfileNotSet = (): JSX.Element => (
	<LinkButton
		name={'profile-not-set-button'}
		label={'Profile not set'}
		position={'fixed'}
		right={4}
		colorScheme={'red'}
		variant={'outline'}
		href={'/account/profile'}
	/>
);

export default DesktopNav;
