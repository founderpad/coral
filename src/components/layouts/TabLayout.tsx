import {
	Icon,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	TabsProps
} from '@chakra-ui/react';
import React from 'react';

type Props = Omit<TabsProps, 'children'> & {
	tabs: TabProps[];
	children: JSX.Element[];
};

type TabProps = {
	label: string;
	icon?: any; //React.ComponentProps<'svg'>;
};

const TabLayout = (props: Props): JSX.Element => {
	const { tabs, children, ...rest } = props;

	return (
		<Tabs {...rest} overflow={'hidden'} colorScheme={'fpPrimary'} height={'full'} d={'flex'} flexDirection={'column'} flex={1}>
			<TabList borderBottomWidth={1} px={4}>
				{tabs?.map((tab) => (
					<Tab
						color={'fpGrey.300'}
						fontSize={{ base: 'xs', sm: 'sm' }}
						fontWeight={'medium'}
						key={tab?.label}
						px={{ lg: 0 }}
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
		</Tabs >
	);
};

export default TabLayout;
