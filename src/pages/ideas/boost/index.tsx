import { PageLayout } from '@components/layouts';
import { DocumentTitle } from '@components/shared';
import AuthFilter from '@utils/AuthFilter';
import Head from 'next/head';
import React from 'react';
import BoostedIdeasGridLayout from './BoostedIdeasGridLayout';

const Ideas = () => (
	<React.Fragment>
		<DocumentTitle title="Boosted ideas" />
		<Head>
			<meta
				property="og:title"
				content="Founderpad · Boosted ideas"
				key="title"
			/>
			<meta
				property="og:url"
				content="https://app.founderpad.com/ideas/boost?page=1"
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

		<PageLayout
			title="Boosted ideas"
			subtitle="All currently boosted ideas"
			p={{ base: 0, md: 4 }}
		>
			<BoostedIdeasGridLayout />
		</PageLayout>
	</React.Fragment>
);

export default AuthFilter(Ideas);
