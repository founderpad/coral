import BaseHeading from '@components/heading/BaseHeading';
import { StackLayout } from '@components/layouts';
import React from 'react';
import { NavItem } from './NavItems';
import { SubNav } from './SubNav';

const SubNavMenu = (navItem: NavItem) => {
	return (
		<StackLayout direction={{ base: 'column', md: 'row' }} p={4} d="flex">
			{navItem.items?.map((parentNavItem, key) => (
				<StackLayout key={key}>
					{parentNavItem.title && (
						<BaseHeading fontSize="sm" color="fpGrey.900">
							{parentNavItem.title}
						</BaseHeading>
					)}
					<StackLayout spacing={{ base: 1, sm: 3 }} d="flex" flex={1}>
						{parentNavItem.items?.map((childNavItem, key) => (
							<SubNav {...childNavItem} key={key} />
						))}
					</StackLayout>
				</StackLayout>
			))}
		</StackLayout>
	);
};

export default SubNavMenu;
