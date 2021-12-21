import { DocumentTitle } from 'components/shared';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import ViewIdeaTabLayout from './ViewIdeaTabLayout';

export const ViewIdea = (): JSX.Element => (
	<React.Fragment>
		<DocumentTitle title="View idea" />
		<ViewIdeaTabLayout />

		{/* <StackLayout
			bg={'red.100'}
			p={2}
			spacing={12}
			flex={1}
			overflowY={'auto'}
			rounded={'none'}
			h={'full'}
			// minH={'1px'}
			height={'600px'}
		>
			<Heading>Test</Heading>
			<Heading>Test</Heading>
			<Heading>Test</Heading>
			<Heading>Test</Heading>
			<Heading>Test</Heading>
			<Heading>Test</Heading>
			<Heading>Test</Heading>
			<Heading>Test</Heading>
			<Heading>Test</Heading>
			<Heading>Test</Heading>
			<Heading>Test</Heading>
		</StackLayout> */}
	</React.Fragment>
);

export default AuthFilter(ViewIdea);
