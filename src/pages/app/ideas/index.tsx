import { Grid, GridItem } from '@chakra-ui/react';
import { PageLayout, StackLayout } from 'components/layouts';
import { DocumentTitle } from 'components/shared';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import IdeasSearchForm from './components/IdeasSearchForm';
import IdeasContainer from './IdeasContainer';

const TIdeas = (): JSX.Element => (
	<React.Fragment>
		<DocumentTitle title="All ideas" />
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
		spacing={1}
		borderRightWidth={1}
		borderRightColor={'gray.100'}
		rounded={'none'}
	>
		<IdeasSearchForm />
	</StackLayout>
);

export default AuthFilter(TIdeas);
