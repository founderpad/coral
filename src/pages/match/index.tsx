import { PageLayout } from '@/components/layouts';
import { MatchContainer } from '@/components/shared/match';
import { DocumentTitle } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Match: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<meta
					property="og:title"
					content="Founderpad · Your matches"
					key="title"
				/>
				<meta
					property="og:url"
					content={`https://app.founderpad.com/match`}
				/>
				<meta
					property="og:image"
					content="https://founderpad-file-uploads.s3.eu-west-1.amazonaws.com/founderpad-og-image%40256x256.png"
				/>
				<meta property="og:site_name" content="Founderpad" />
				<meta
					property="og:description"
					content="View all your matches."
				/>
			</Head>
			<DocumentTitle title="Match" />
			<PageLayout
				title="Your matches"
				subtitle="Here are the matches we have found for you based on your preferences"
				spacing={0}
			>
				<MatchContainer />
			</PageLayout>
		</React.Fragment>
	);
};

export default AuthFilter(Match);
