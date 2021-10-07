import { Grid, GridItem } from '@chakra-ui/react';
import { PageLayout, StackLayout } from 'components/layouts';
import WindowTitle from 'components/shared/WindowTitle';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import IdeasSearchForm from './components/IdeasSearchForm';
import IdeasContainer from './IdeasContainer';

const Ideas = (): JSX.Element => (
	<React.Fragment>
		<WindowTitle title="All ideas" />
		<PageLayout
			title="All ideas"
			subtitle="The latest ideas from other users"
		>
			<Grid templateColumns="repeat(7, 1fr)" gap={6} minH={'full'}>
				<GridItem
					display={{ base: 'none', md: 'block' }}
					colSpan={{ md: 3, lg: 2 }}
					position={'relative'}
				>
					<DesktopSearch />
				</GridItem>

				<GridItem
					colSpan={{ base: 7, md: 4, lg: 5 }}
					position={'relative'}
				>
					<IdeasContainer />
				</GridItem>
			</Grid>
		</PageLayout>
	</React.Fragment>
);

const DesktopSearch = () => (
	<StackLayout
		display={{ base: 'none', md: 'flex' }}
		pr={6}
		h={'full'}
		bg={'white'}
		borderRightWidth={1}
		borderRightColor={'fpLightGrey.300'}
	>
		<IdeasSearchForm />
	</StackLayout>
);

export default AuthFilter(Ideas);
