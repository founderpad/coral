import { Button } from '@chakra-ui/react';
import { StackLayout } from '@/components/layouts';
import { AppDivider } from '@/components/shared';
import React, { memo } from 'react';
import NavItems from './NavItems';
import { mentorButtonProps, navStackProps, newIdeaButtonProps } from './styles';
import { NavLinkPopover } from '../components/NavLinkPopover';

const DesktopNav = memo(() => {
	return (
		<>
			<Button {...newIdeaButtonProps(true)}></Button>
			<StackLayout {...navStackProps}>
				<Button {...newIdeaButtonProps(false)}></Button>
				<AppDivider orientation="vertical" />
				{NavItems.map((navItem, key) => (
					<NavLinkPopover {...navItem} key={key} />
				))}
				<Button {...mentorButtonProps}>Mentor</Button>
			</StackLayout>
		</>
	);
});

export default DesktopNav;
