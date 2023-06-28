import {
	ButtonProps,
	ContainerProps,
	FlexProps,
	Icon,
	StackProps
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { IoAdd, IoLockClosedOutline } from 'react-icons/io5';

interface CustomButtonProps extends ButtonProps {
	href?: string;
}

export const newIdeaButtonProps = (isMobile: boolean): CustomButtonProps => ({
	name: 'new-idea',
	as: NextLink,
	href: '/ideas/create',
	mx: 'auto',
	size: 'sm',
	display: isMobile ? { base: 'flex', md: 'none' } : undefined,
	colorScheme: 'fpPrimary',
	leftIcon: <Icon as={IoAdd} fontSize={{ base: 'xl', md: 'lg' }} />,
	children: isMobile ? 'New' : 'New idea'
});

export const createIdeaButtonProps: CustomButtonProps = {
	name: 'create-idea',
	as: NextLink,
	href: '/ideas/create',
	mx: 'auto',
	fontSize: 'xs',
	minW: '90px',
	display: { base: 'none', md: 'flex' },
	title: 'Create a new idea'
};

export const mentorButtonProps: CustomButtonProps = {
	pl: 2,
	fontSize: 'xs',
	variant: 'unstyled',
	rightIcon: <Icon as={IoLockClosedOutline} />,
	isDisabled: true
};

export const navStackProps: StackProps = {
	direction: 'row',
	alignItems: 'center',
	spacing: 4,
	ml: 'auto',
	display: { base: 'none', md: 'flex' },
	position: 'relative',
	h: 'full'
};

export const mainNavProps = (bg: string): FlexProps => ({
	bg,
	borderBottomWidth: 1,
	borderBottomColor: 'fpLightGrey.900',
	zIndex: 1000,
	position: 'fixed',
	top: 0,
	h: '56px',
	w: 'full'
});

export const mainNavContainerProps = (
	bg: string,
	color: string
): ContainerProps => ({
	bg,
	color,
	px: { base: 4, xl: 0 },
	display: 'flex',
	justifySelf: 'center',
	position: 'sticky',
	maxW: { base: '100%', xl: '95ch' },
	alignItems: 'center',
	justifyContent: 'space-between',
	flex: 1
});
