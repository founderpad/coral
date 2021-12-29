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
import React, { useCallback, useState } from 'react';
import { IconType } from 'react-icons/lib';

type Props = Omit<TabsProps, 'children'> & {
	tabs: TabProps[];
	children: JSX.Element[];
};

type TabProps = {
	label: string;
	icon?: IconType;
};

const TabLayout = (props: Props): JSX.Element => {
	const { tabs, children, ...rest } = props;
	const [tabIndex, setTabIndex] = useState(0);

	const onChange = useCallback((index) => setTabIndex(index), [tabIndex]);

	return (
		<Tabs
			{...rest}
			onChange={onChange}
			overflow={'hidden'}
			colorScheme={'black'}
			px={0}
			d={'flex'}
			flexDirection={'column'}
		>
			<TabList px={4}>
				{tabs
					?.filter((tab) => Object.keys(tab).length !== 0)
					.map((tab) => (
						<Tab {...tab} key={tab?.label} fontSize={'small'}>
							{tab?.icon && (
								<Icon
									as={tab.icon}
									mr={2}
									fontSize={'xl'}
									display={{ base: 'none', sm: 'block' }}
								/>
							)}
							{tab?.label}
						</Tab>
					))}
			</TabList>
			<TabPanels d={'flex'} flex={1} overflowY={'hidden'}>
				{children?.map((tp: TabPanelProps, key) => {
					return (
						<TabPanel
							{...tp}
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
