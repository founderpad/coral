import {
	Icon,
	Tab,
	TabList,
	TabPanel,
	TabPanelProps,
	TabPanels,
	Tabs,
	TabsProps
} from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { FlexLayout } from './FlexLayout';
// import { BoxLayout } from './BoxLayout';

type Props = Omit<TabsProps, 'children'> & {
	tabs: TabProps[];
	children: JSX.Element[];
	actions?: React.ReactNode;
};

interface TabProps {
	label?: string;
	icon?: IconType;
}

const TabLayout = (props: Props & TabsProps) => {
	const { tabs, children, actions, ...rest } = props;

	return (
		<Tabs
			{...rest}
			overflow="hidden"
			display="flex"
			flexDirection="column"
			variant="soft-rounded"
			size="sm"
			rounded="md"
		>
			<TabList
				px={4}
				py={2}
				borderBottomWidth={1}
				borderBottomColor="fpLightGrey.900"
			>
				{tabs
					.filter((tab) => Object.keys(tab).length !== 0)
					.map((tab, key) => (
						<Tab
							key={key}
							fontSize="xs"
							_hover={{
								color: 'black',
								bg: 'fpLightGrey.300'
							}}
							_selected={{
								bg: 'fpLightGrey.700',
								color: 'black'
							}}
							fontWeight="normal"
							mr={2}
							rounded="md"
							borderWidth={1}
							borderColor="fpLightGrey.900"
						>
							{tab?.icon && (
								<Icon
									as={tab.icon}
									mr={2}
									fontSize="xl"
									display={{ base: 'none', sm: 'block' }}
								/>
							)}
							{tab.label}
						</Tab>
					))}

				{/* {actions && <BoxLayout ml="auto">{actions}</BoxLayout>} */}
				{actions && <FlexLayout ml="auto">{actions}</FlexLayout>}
			</TabList>

			{/* {actions} */}
			<TabPanels display="flex" flex={1} overflowY="hidden">
				{children?.map((tp: TabPanelProps, key) => {
					return (
						<TabPanel
							key={key}
							overflowY="hidden"
							p={0}
							display="flex"
							flex={1}
							css={{
								'> *': {
									width: '100%',
									height: '100%'
								}
							}}
						>
							{tp as any}
						</TabPanel>
					);
				})}
			</TabPanels>
		</Tabs>
	);
};

export default TabLayout;
