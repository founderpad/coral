import { PageLayout } from '@/components/layouts';
import { MatchContainer } from '@/components/shared/match';
import { DocumentTitle } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useCurrentUser } from '@/hooks/auth';

const Match: NextPage = () => {
	const authUser = useCurrentUser();
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
				subtitle={`Here are the ${authUser.matchSettings?.lookingFor?.toLowerCase()}s we've found for you`}
			>
				<MatchContainer />
			</PageLayout>
		</React.Fragment>
	);
};

export default AuthFilter(Match);
