import { useColorModeValue } from '@chakra-ui/color-mode';
import Icon from '@chakra-ui/icon';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import { MenuDivider } from '@chakra-ui/menu';
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/popover';
import { HStack } from '@chakra-ui/react';
import { BaseButton } from 'components/buttons';
import { BaseLink } from 'components/links';
import { useCurrentUser } from 'hooks/auth';
import { useRouter } from 'next/router';
import React from 'react';
import { IoChevronForwardSharp } from 'react-icons/io5';
import NavLink from '../components/NavLink';
import NavItems, { NavItem } from './NavItems';

const DesktopNav = (): JSX.Element => {
	const router = useRouter();

	return (
		<HStack
			alignItems={'center'}
			spacing={6}
			ml={'auto'}
			display={{ base: 'none', md: 'flex' }}
			position={'relative'}
		>
			{NavItems.map((navItem) => (
				<Box key={navItem.key}>
					<Popover trigger={'hover'} placement={'bottom-end'}>
						<PopoverTrigger>
							<NavLink
								href={navItem.href ?? '#'}
								color={
									router.pathname === navItem.href
										? 'fpGrey.900'
										: 'fpGrey.500'
								}
							>
								{navItem.label}
							</NavLink>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={useColorModeValue('white', 'gray.500')}
								p={4}
							>
								<Stack spacing={2}>
									{navItem.children.map((child) => (
										<DesktopSubNav
											key={child.label}
											{...child}
										/>
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
			<ProfileNotSet />
		</HStack>
	);
};

const DesktopSubNav = ({ label, href, divider, icon }: NavItem) => {
	return (
		<React.Fragment>
			{divider && <MenuDivider />}
			<NavLink href={href} role={'group'} color={'fpGrey.500'} my={2}>
				<Stack direction={'row'} align={'center'}>
					{icon}
					<Box>
						<Text
							transition={'all .3s ease'}
							fontSize={'sm'}
							fontWeight={500}
						>
							{label}
						</Text>
					</Box>
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
						<Icon color={'fpGrey.900'} as={IoChevronForwardSharp} />
					</Flex>
				</Stack>
			</NavLink>
		</React.Fragment>
	);
};

const ProfileNotSet = (): JSX.Element => {
	const isComplete = useCurrentUser().user_profile.is_complete;

	if (!isComplete)
		return (
			<BaseButton
				as={BaseLink}
				label={'Profile not set'}
				position={'fixed'}
				right={4}
				colorScheme={'red'}
				variant={'outline'}
				href={'/account/profile'}
			/>
		);

	return null;
}

export default DesktopNav;
