import Icon from '@chakra-ui/icon';
import { Link } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { PrimaryButton } from '@components/buttons';
import { StackLayout } from '@components/layouts';
import { BaseLink } from '@components/links';
import BasePopover from '@components/popover/BasePopover';
import { AppDivider } from '@components/shared';
import Router from 'next/router';
import React, { memo } from 'react';
import {
	IoAdd,
	IoChevronDownSharp,
	IoLockClosedOutline
} from 'react-icons/io5';
import NavItems from './NavItems';
import SubNavMenu from './SubNavMenu';

const DesktopNav = memo(() => {
	const getCurrentPath = (href: string) =>
		href.includes(Router.pathname) ?? '';

	return (
		<React.Fragment>
			<PrimaryButton
				name="create-idea"
				as={BaseLink}
				href="/ideas/create"
				mx="auto"
				d={{ base: 'flex', md: 'none' }}
			>
				<Icon as={IoAdd} fontSize={{ base: 'xl', md: 'lg' }} mr={2} />
				New
			</PrimaryButton>
			<StackLayout
				direction="row"
				alignItems="center"
				spacing={4}
				ml="auto"
				display={{ base: 'none', md: 'flex' }}
				position="relative"
			>
				<PrimaryButton
					name="create-idea"
					as={BaseLink}
					href="/ideas/create"
					mx="auto"
					fontSize="xs"
					minW="90px"
					d={{ base: 'none', md: 'flex' }}
					title="Create a new idea"
				>
					<Icon
						as={IoAdd}
						fontSize={{ base: 'xl', md: 'lg' }}
						mr={2}
					/>
					New idea
				</PrimaryButton>
				<AppDivider orientation="vertical" />
				{NavItems.map((navItem, key) => (
					<BasePopover
						key={key}
						triggerEl={
							<Link
								px={2}
								d="flex"
								href={navItem.href}
								fontSize="xs"
								fontWeight={
									getCurrentPath(navItem.href ?? '')
										? 'medium'
										: 'normal'
								}
								alignItems="center"
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
								{/* {navItem.rightIcon && (
									<Icon
										color="inherit"
										ml={1}
										as={navItem.rightIcon}
									/>
								)} */}
								{navItem.items?.length && (
									<Icon
										color="inherit"
										ml={1}
										as={IoChevronDownSharp}
										// _hover={{
										// 	transform: 'rotate(-180deg)'
										// }}
										// transform="rotate(0deg)"
										// transition={'transform .1s linear'}
										// transition='transform .1s linear'
									/>
								)}
							</Link>
							// <Button>{navItem.label}</Button>
						}
					>
						{navItem.items && (
							<StackLayout
								direction={{ base: 'column', md: 'row' }}
								p={2}
								d="flex"
							>
								<SubNavMenu {...navItem} />
							</StackLayout>
						)}
					</BasePopover>
				))}
				<Button
					pl={2}
					fontSize="xs"
					variant="unstyled"
					rightIcon={<IoLockClosedOutline />}
					isDisabled
				>
					Mentor
				</Button>
			</StackLayout>
		</React.Fragment>
	);
});

export default DesktopNav;
