import { StackLayout } from 'components/layouts';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import FounderSearchForm from './components/FounderSearchForm';

const Founders = (): JSX.Element => (
	// <React.Fragment>
	// 	<DocumentTitle title="All founders" />
	// 	<PageLayout title="All founders">
	// 		<Grid
	// 			templateColumns="repeat(7, 1fr)"
	// 			gap={6}
	// 			minH={'full'}
	// 			flex={1}
	// 		>
	// 			<GridItem
	// 				display={{ base: 'none', md: 'block' }}
	// 				colSpan={{ md: 3, lg: 2 }}
	// 				position={'relative'}
	// 			>
	// 				<DesktopSearch />
	// 			</GridItem>

	// 			<GridItem
	// 				colSpan={{ base: 7, md: 4, lg: 5 }}
	// 				position={'relative'}
	// 			>
	// 				<FoundersContainer />
	// 			</GridItem>
	// 		</Grid>
	// 	</PageLayout>
	// </React.Fragment>

	<></>
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
		<FounderSearchForm />
	</StackLayout>
);

export default AuthFilter(Founders);
