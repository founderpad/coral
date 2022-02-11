import {
	Box,
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

type Props = Omit<TabsProps, 'children'> & {
	tabs: TabProps[];
	children: JSX.Element[];
};

interface TabProps {
	label?: string;
	icon?: IconType;
}

const TabLayout = (props: Props) => {
	const { tabs, children, ...rest } = props;

	return (
		<Tabs
			{...rest}
			overflow={'hidden'}
			d={'flex'}
			flexDirection={'column'}
			variant={'soft-rounded'}
			size={'sm'}
		>
			<TabList px={4} py={2} borderBottomWidth={1}>
				{tabs
					.filter((tab) => Object.keys(tab).length !== 0)
					.map((tab, key) => (
						<Tab
							key={key}
							fontSize={'xs'}
							_hover={{ color: 'black', bg: '#F8F8F9' }}
							_selected={{
								bg: 'fpLightGrey.700',
								color: 'black'
							}}
							fontWeight={'normal'}
							mr={2}
							rounded={'md'}
						>
							{tab?.icon && (
								<Icon
									as={tab.icon}
									mr={2}
									fontSize={'xl'}
									display={{ base: 'none', sm: 'block' }}
								/>
							)}
							{tab.label}
						</Tab>
					))}
			</TabList>
			<TabPanels d={'flex'} flex={1} overflowY={'hidden'}>
				{children?.map((tp: TabPanelProps, key) => {
					return (
						<TabPanel
							key={key}
							overflowY={'hidden'}
							p={0}
							display={'flex'}
							flex={1}
							css={{
								'> *': {
									width: '100%',
									height: '100%'
								}
							}}
						>
							{tp}
						</TabPanel>
					);
				})}
			</TabPanels>
		</Tabs>
	);
};

export default TabLayout;
