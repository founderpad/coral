// import { PageLayout } from '@components/layouts';
import SearchContentGridLayout from '@components/layouts/SearchContentGridLayout';
import { DocumentTitle, PageHeader } from '@components/shared';
import AuthFilter from '@utils/AuthFilter';
import React from 'react';
import IdeasSearchForm from './components/IdeasSearchForm';
import IdeasContainer from './IdeasContainer';

const Ideas = () => (
	<React.Fragment>
		<DocumentTitle title="All ideas" />
		{/* <PageLayout
			title="All ideas"
			subtitle="The latest ideas from the community."
		>
			<SearchContentGridLayout>
				<IdeasSearchForm />
				<IdeasContainer />
			</SearchContentGridLayout>
		</PageLayout> */}

		<SearchContentGridLayout>
			<IdeasSearchForm />
			<PageHeader
				title="All ideas"
				subtitle="The latest ideas from the community"
			/>

			<IdeasContainer />
		</SearchContentGridLayout>
	</React.Fragment>
);

export default AuthFilter(Ideas);
