import { Icon, useColorModeValue } from '@chakra-ui/react';
import { BaseLabel } from 'components/labels/BaseLabel';
import { BoxLayout, FlexLayout, StackLayout } from 'components/layouts';
import AppDivider from 'components/shared/AppDivider';
import React from 'react';
import { IoChevronForwardSharp } from 'react-icons/io5';
import NavLink from '../components/NavLink';
import { NavItem } from './NavItems';

export const SubNav = ({
	label,
	subLabel,
	href,
	icon,
	divider,
	color
}: NavItem) => (
	<React.Fragment>
		{divider && <AppDivider display={{ base: 'none', md: 'block' }} />}
		<NavLink
			href={href}
			role={'group'}
			display={'block'}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
		>
			<StackLayout
				direction={'row'}
				spacing={2}
				alignItems={'center'}
				justifyContent={'space-between'}
				p={2}
			>
				<BoxLayout
					d={'flex'}
					alignItems={'center'}
					justifyContent={'start'}
					textAlign={'start'}
					p={0}
				>
					{icon && (
						<BoxLayout p={2} mr={4} bg={'fpPrimary.50'}>
							<Icon
								as={icon}
								fontSize={'md'}
								color={'fpPrimary.500'}
							/>
						</BoxLayout>
					)}
					<FlexLayout flexDirection={'column'}>
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
					</FlexLayout>
				</BoxLayout>

				<Icon
					color={'gray.500'}
					w={4}
					h={4}
					display={{ base: 'none', md: 'block' }}
					as={IoChevronForwardSharp}
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{
						opacity: '100%',
						transform: 'translateX(0)'
					}}
					justifySelf={'flex-end'}
				/>
			</StackLayout>
		</NavLink>
	</React.Fragment>
);
