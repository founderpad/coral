import {
	Icon,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	TabsProps
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

type Props = Omit<TabsProps, 'children'> & {
	tabs: TabProps[];
	children: JSX.Element[];
};

type TabProps = {
	label: string;
	icon?: any; //React.ComponentProps<'svg'>;
};

const TabLayout = (props: Props): JSX.Element => {
	const { tabs, children, px, ...rest } = props;
	const [tabIndex, setTabIndex] = useState(0);

	// const onChange = (index: number) =>
	// 	useCallback(() => setTabIndex(index), [index]);

	const onChange = useCallback((index) => setTabIndex(index), [tabIndex]);

	return (
		<Tabs
			{...rest}
			onChange={onChange}
			overflow={'hidden'}
			colorScheme={'black'}
		>
			<TabList borderBottomWidth={1}>
				{tabs?.map((tab: TabProps, key: number) => (
					<Tab
						color={'gray.400'}
						fontSize={{ base: 'xs', sm: 'sm' }}
						fontWeight={'medium'}
						key={tab?.label}
						px={px ?? { lg: 2 }}
						_hover={{
							borderColor: tabIndex !== key && 'gray.400'
						}}
						_selected={{ color: 'black', borderColor: 'black' }}
						mr={4}
					>
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
			<TabPanels d={'flex'} flex={1} h={'full'}>
				{children?.map((tp, key) => {
					return (
						<TabPanel
							key={key}
							py={4}
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
