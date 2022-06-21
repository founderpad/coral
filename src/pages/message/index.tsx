import { PageLayout } from '@/components/layouts';
import { DocumentTitle } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import MessagesContainer from './MessageThreadsContainer';

const Messages: NextPage = () => (
	<React.Fragment>
		<Head>
			<meta
				property="og:title"
				content="Founderpad · All messages"
				key="title"
			/>
			<meta
				property="og:url"
				content={`https://app.founderpad.com/messages`}
			/>
			<meta
				property="og:image"
				content="https://founderpad-file-uploads.s3.eu-west-1.amazonaws.com/founderpad-og-image%40256x256.png"
			/>
			<meta property="og:site_name" content="Founderpad" />
			<meta
				property="og:description"
				content="View all your messages with other users."
			/>
		</Head>
		<DocumentTitle title="Messages" />
		<PageLayout title="Your messages" p={4}>
			<MessagesContainer />
		</PageLayout>
	</React.Fragment>
);

export default AuthFilter(Messages);
