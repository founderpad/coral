import { Icon } from '@chakra-ui/react';
import { IoChevronForwardSharp } from '@/components/icons';
import { BaseLabel } from '@/components/labels/BaseLabel';
import { BoxLayout, FlexLayout, StackLayout } from '@/components/layouts';
import AppDivider from '@/components/shared/AppDivider';
import React, { memo } from 'react';
import NavLink from '../components/NavLink';
import { NavItem } from './NavItems';

export const SubNav = memo(
	({
		label,
		subLabel,
		href,
		icon,
		divider,
		color = 'fpPrimary.700'
	}: NavItem) => (
		<React.Fragment>
			{divider && (
				<FlexLayout alignSelf="center" py={4}>
					<AppDivider width="150px" alignSelf="center" />
				</FlexLayout>
			)}
			<NavLink href={href} role="group" display="block" rounded="md">
				<StackLayout
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					py={2}
					pr={2}
				>
					<BoxLayout
						display="flex"
						alignItems="center"
						justifyContent="start"
						textAlign="start"
						p={0}
					>
						{icon && (
							<FlexLayout
								p={2}
								mr={4}
								bg="fpLightGrey.400"
								rounded="md"
							>
								<Icon
									as={icon}
									fontSize="xl"
									color={color}
									transition="all .3s ease"
									// transform="translateX(-10px)"
									// opacity={0}
									_groupHover={{
										// opacity: '100%',
										// transform: 'translate(3px, -3px)'
										transform: 'scale(1.2)'
									}}
								/>
							</FlexLayout>
						)}
						<FlexLayout flexDirection="column">
							<BaseLabel
								transition="all .3s ease"
								color="black"
								fontSize="small"
								fontWeight="medium"
							>
								{label}
							</BaseLabel>
							<BaseLabel
								color="fpGrey.300"
								fontWeight="thin"
								fontSize="xs"
							>
								{subLabel}
							</BaseLabel>
						</FlexLayout>
					</BoxLayout>

					<Icon
						color="gray.500"
						w={4}
						h={4}
						display={{ base: 'none', md: 'block' }}
						as={IoChevronForwardSharp}
						transition="all .3s ease"
						transform="translateX(-10px)"
						opacity={0}
						_groupHover={{
							opacity: '100%',
							transform: 'translateX(0)'
						}}
						justifySelf="flex-end"
					/>
				</StackLayout>
			</NavLink>
		</React.Fragment>
	)
);
