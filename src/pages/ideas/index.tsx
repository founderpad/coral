import SearchContentGridLayout from '@components/layouts/SearchContentGridLayout';
import { DocumentTitle, PageHeader } from '@components/shared';
import AuthFilter from '@utils/AuthFilter';
import Head from 'next/head';
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
		<Head>
			<meta
				property="og:title"
				content="Founderpad · Search ideas"
				key="title"
			/>
			<meta
				property="og:url"
				content="https://app.founderpad.com/ideas?page=1"
			/>
			<meta
				property="og:image"
				content="https://founderpad-file-uploads.s3.eu-west-1.amazonaws.com/founderpad-og-image%40256x256.png"
			/>
			<meta property="og:site_name" content="Founderpad" />
			<meta
				property="og:description"
				content="Search all ideas to collaborate, or form a team"
			/>
		</Head>

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
